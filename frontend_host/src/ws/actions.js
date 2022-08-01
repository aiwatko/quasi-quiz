import { messageHandler } from './actionHanlders'
import { ACTIONS, REGISTRATION } from './constants'

export const registerHost = (setContext) => {
  const connection = new WebSocket(REGISTRATION)

  setContext((prevContext) => ({
    ...prevContext,
    connection,
  }))
  connection.onmessage = (message) => messageHandler(message, setContext)
}

export const startQuestion = (context, setContext, id) => {
  context.connection.send(JSON.stringify({ action: ACTIONS.startQuestion, id }))
  setContext((prevContext) => ({
    ...prevContext,
    answers: {},
  }))
}

export const endQuestion = (context) => {
  context.connection.send(JSON.stringify({ action: ACTIONS.endQuestion }))
}
