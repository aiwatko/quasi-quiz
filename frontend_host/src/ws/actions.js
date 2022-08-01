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

export const disablePlayerButtons = (context) => {
  context.connection.send(JSON.stringify({ action: ACTIONS.buttonsOff }))
}
