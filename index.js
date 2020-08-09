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