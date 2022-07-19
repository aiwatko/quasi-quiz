export const hostMessageHandler = (message, context, setContext) => {
  try {
    const parsedMessage = JSON.parse(message.data);

    switch (parsedMessage.action) {
      case 'players':
        setContext({ ...context, players: parsedMessage.players });
        break;
      default:
        console.log('incorrect action provided');
        break;
    }
  } catch (e) {
    console.log(e);
  }
};

export const playerMessageHandler = (message, context, setContext) => {
  try {
    const parsedMessage = JSON.parse(message.data);

    switch (parsedMessage.action) {
      case 'playerId':
        setContext({ ...context, currentPlayerId: parsedMessage.id });
        break;
      default:
        console.log('incorrect action provided');
        break;
    }
  } catch (e) {
    console.log(e);
  }
};
