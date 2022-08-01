import { messageHandler } from './actionHanlders'
import { REGISTRATION } from './constants'

export const registerPlayer = (setContext, name) => {
  const connection = new WebSocket(`${REGISTRATION}&name=${name}`)
  setContext((prevContext) => ({
    ...prevContext,
    connection,
  }))

  connection.onmessage = (message) => messageHandler(message, setContext)
}
