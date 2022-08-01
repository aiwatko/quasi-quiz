export const messageHandler = (message, setContext) => {
  try {
    const parsedMessage = JSON.parse(message.data)

    switch (parsedMessage.action) {
      case 'players':
        setContext((prevContext) => ({
          ...prevContext,
          players: parsedMessage.players,
        }))
        break
      case 'questions':
        setContext((prevContext) => ({
          ...prevContext,
          questions: parsedMessage.questions,
          currentQuestion: parsedMessage.questions[0],
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
