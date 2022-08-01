export const messageHandler = (message, setContext) => {
  try {
    const parsedMessage = JSON.parse(message.data)

    switch (parsedMessage.action) {
      case 'send_player_id':
        setContext((prevContext) => ({
          ...prevContext,
          playerId: parsedMessage.id,
        }))
        break
      case 'start_question':
        setContext((prevContext) => ({
          ...prevContext,
          buttons: 'on',
          questionId: parsedMessage.question_id,
        }))
        break
      case 'end_question':
        setContext((prevContext) => ({
          ...prevContext,
          buttons: 'off',
          questionId: undefined,
        }))
        break
      default:
        console.log('incorrect action provided:', parsedMessage.action)
        break
    }
  } catch (e) {
    console.log(e)
  }
}
