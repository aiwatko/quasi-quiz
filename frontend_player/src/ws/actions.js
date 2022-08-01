import { messageHandler } from './actionHanlders'
import { REGISTRATION, ACTIONS } from './constants'

export const registerPlayer = (setContext, name) => {
  const connection = new WebSocket(`${REGISTRATION}&name=${name}`)
  setContext((prevContext) => ({
    ...prevContext,
    connection,
  }))

  connection.onmessage = (message) => messageHandler(message, setContext)
}

export const sendAnswer = (context, answer) => {
  const { playerId, questionId, connection } = context
  connection.send(JSON.stringify({
    action: ACTIONS.sendAnswer,
    player_id: playerId,
    question_id: questionId,
    answer,
  }))
}
