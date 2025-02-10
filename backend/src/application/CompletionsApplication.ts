// import { CompletionRepository, IAiMessage } from '../domain/CompletionRepository'
import { CompletionRepository, IAiMessage } from '../domain/completion.repository'

export class CompletionsApplication {
  constructor(private repository: CompletionRepository) {}

  async run(messages: IAiMessage[]) {
    return this.repository.complete({ messages })
  }
}
