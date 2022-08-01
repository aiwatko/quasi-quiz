export const messageHandler = (message, setContext) => {
  try {
    const parsedMessage = JSON.parse(message.data)

    switch (parsedMessage.action) {
      case 'send_players':
        setContext((prevContext) => ({
          ...prevContext,
          players: parsedMessage.players,
        }))
        break
      case 'send_questions':
        setContext((prevContext) => ({
          ...prevContext,
          questions: parsedMessage.questions,
          currentQuestion: 0,
        }))
        break
      case 'send_answers':
        setContext((prevContext) => ({
          ...prevContext,
          answers: parsedMessage.answers,
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
