// import { IAiMessage } from '../interfaces/IAi'

export interface IAiMessage {
  role: 'system' | 'user' | 'assistant'
  content: string
}

export interface IAiMessageWithTool extends IAiMessage {
  tool_calls: {
    name: string
    arguments: string
  }[]
}

export interface CompletionRepository {
  complete({
    messages,
    includeReason,
  }: {
    messages: IAiMessage[]
    includeReason?: boolean
  }): Promise<IAiMessage>
}
