import { messageHandler } from './actionHanlders'
import { ACTIONS, REGISTRATION } from './constants'

export const registerPlayer = (setContext) => {
  const connection = new WebSocket(REGISTRATION)
  setContext((prevContext) => ({
    ...prevContext,
    connection,
  }))

  connection.onmessage = (message) => messageHandler(message, setContext)
}

export const sendPlayerName = (context, name) => {
  context.connection.send(JSON.stringify({
    action: ACTIONS.playerNameRegistration,
    name,
  }))
}
