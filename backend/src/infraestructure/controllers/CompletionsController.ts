import { Request, Response } from 'express'
// import { DeepSeekRepository } from '../repositories/DeepSeekRepository'
import { CompletionsApplication } from '../../application/CompletionsApplication'
import { OpenAIRepository } from '../repositories/OpenAIRepository'

export class CompletionsController {
  static async completions(req: Request, res: Response) {
    try {
      // const aiRepository = new DeepSeekRepository()
      const aiRepository = new OpenAIRepository()
      const completionsApplication = new CompletionsApplication(
        aiRepository,
        req.headers.authorization || ''
      )

      const { messages } = req.body

      // Transformación: asigna 'user' si isUser es true, o 'assistant' si es false.
      const formattedMessages = messages.map((msg: any) => ({
        role: msg.role || (msg.isUser ? 'user' : 'assistant'),
        content: msg.content,
      }))

      const message = await completionsApplication.run(formattedMessages)

      res.json({ message })
    } catch (error) {
      console.error('Error processing completions:', error)
      res.status(500).json({ success: false, error: 'Error processing completions' })
    }
  }
}
