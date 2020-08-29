require('dotenv').config();
const tmi = require('tmi.js');
const Message = require('./src/classes/messages');

const client = new tmi.Client({
	options: { debug: true },
	connection: {
		reconnect: true,
		secure: true
	},
	identity: {
		username: process.env.TWITCH_USERNAME,
		password: process.env.OAUTH_TOKEN
	},
	channels: [ 'Laudeee' ]
});

client.connect();

client.on("roomstate", (channel) => {
    setInterval(() => {
		client.say(channel, 'A gente tem uma comunidade do discord. Chega mais pra gente conversar e fazer projetos juntos: https://discord.gg/q93AEbT <3');
	}, 60000 * 5)

	setInterval(() => {
		client.say(channel, 'A gente tem uma comunidade do discord. Chega mais pra gente conversar e fazer projetos juntos: https://discord.gg/q93AEbT <3');
	}, 60000 * 6)
});

client.on('message', (channel, tags, message, self) => {
	if (self) return;

    // Processing the messages.
    const response = new Message(message, tags)._process();

    // If it needs an answer, we send it.
    if (response) {
        client.say(channel, response);
    }

    return;
});