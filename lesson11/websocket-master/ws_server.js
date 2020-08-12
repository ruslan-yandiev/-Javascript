const WebSocket = require("ws");
const wsConnection = new WebSocket.Server({ port: 8080 });

const clients = new Set();

class User {
  constructor(connection) {
    this.connection = connection;
    this._channels = new Set();
  }

  loginChannel(channelName) {
    this._channels.add(channelName);
  }

  logoutChannel(channelName) {
    this._channels.delete(channelName);
  }

  isLoggedIn(channelName) {
    return this._channels.has(channelName);
  }
};

function sendMessage(channelName, userName, message) {
  for (let client of clients) {
    if (client.isLoggedIn(channelName)) {
      client.connection.send(`channel: ${channelName} user: ${userName} text: ${message}`);
    }
  }
};

wsConnection.on("connection", ws => {
  const user = new User(ws);
  clients.add(user);

  user.connection.on("message", function (data) {
    const message = JSON.parse(data);

    switch (message.command) {
      case "login":

        user.name = message.username;
        user.loginChannel(message.channel);
        sendMessage(message.channel, user.name, message.command);
        return

      case "logout":

        if (user.isLoggedIn(message.channel)) {
          user.logoutChannel(message.channel);
          sendMessage(message.channel, user.name, message.command);
          return
        } else {
          return
        }

      case "sendMessage":

        if (user.isLoggedIn(message.channel)) {
          sendMessage(message.channel, user.name, message.text);
          return
        } else {
          return
        }

      case "exitChat":

        user.logoutChannel(message.channel);
        sendMessage(message.channel, user.name, message.command);
        ws.close();
        return

      default:

        ws.send("Unknown command");
        return
    }
  });

  user.connection.on("close", function () {
    clients.delete(user);
  });
});
