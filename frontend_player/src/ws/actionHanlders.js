export const messageHandler = (message, setContext) => {
  try {
    const parsedMessage = JSON.parse(message.data)

    switch (parsedMessage.action) {
      case 'player_id':
        setContext((prevContext) => ({
          ...prevContext,
          currentPlayerId: parsedMessage.id,
        }))
        break
      case 'buttons_off':
        setContext((prevContext) => ({
          ...prevContext,
          buttons: 'off',
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
