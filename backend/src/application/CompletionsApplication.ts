import { CompletionRepository, IAiMessage } from '../domain/completion.repository'
import { ReportTypes } from '../interfaces/IReports'
import { IntentAnalyzer } from './IntentAnalizerApplication'
import { Interpreter } from './InterpreterApplication'
import { PurchasesReport } from './reports/PurchasesReport'
import { SalesReport } from './reports/SalesReport'

export class CompletionsApplication {
  constructor(private repository: CompletionRepository, private alegraApiKey: string) {}

  async run(messages: IAiMessage[]) {
    const intentAnalizer = new IntentAnalyzer(this.repository)
    const intent = await intentAnalizer.run(messages)

    if (!intent || !intent.type) return await this.repository.complete({ messages })

    const reportHandlers = {
      [ReportTypes.SALES]: () => new SalesReport(this.alegraApiKey),
      [ReportTypes.PURCHASES]: () => new PurchasesReport(this.alegraApiKey),
    }

    const reportHandler = reportHandlers[intent.type]
    const report = await reportHandler().getReport(intent?.dateRange || null)

    const interpreter = new Interpreter(this.repository)
    return await interpreter.run(report, intent.type)
  }
}
