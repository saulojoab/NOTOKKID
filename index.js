require('dotenv').config();
const tmi = require('tmi.js');

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

let postura = 0;
let macho = 0;
let agua = 0;

client.on('message', (channel, tags, message, self) => {
    if(self) return;
    //console.log(tags);
    switch (message.toLowerCase()) 
    {
        // Comandos.
        case '!comandos':
            client.say(channel, '!github !twitter !donate !postura !agua');
            break;
        case '!agua':
            client.say(channel, 'BEBE ÁGUA AGORA ARROMBADO @Laudeee');
            break;
        case '!postura':
            client.say(channel, 'ARRUMA A POSTURA @Laudeee ARROMBADO');
            postura++;
            if (postura > 1) {
                client.say(channel, `Já pediram ${postura} vezes só nessa live, bicho.`);
            }
            break;
        case '!macho':
            macho++;
            client.say(channel, `Saulo já falou "macho" ${macho === 1 ? "uma vez " : macho + " vezes "}só nessa live.`);
            break;
        case '!github':
            client.say(channel, `Dá uma olhada nos meus códigos e me segue lá: https://github.com/saulojoab <3`);
            break;
        case '!twitter':
            client.say(channel, `Me segue lá: https://twitter.com/laudtriste <3`);
            break;
        case '!donate':
            client.say(channel, `@${tags['display-name']}, você pode me dar um help com qualquer valor financeiro e mandar uma mensagem na live.
            \nSó mandar por aqui: https://www.streamlabs.com/Laudeee`);
            break;
        case 'boa noite':
            client.say(channel, `Boa noite, @${tags['display-name']}! <3`);
            break;
        case 'salve':
            client.say(channel, `SALVE QUERIDO SER HUMANO @${tags['display-name']}`);
            break;
        case 'qual teu github':
            client.say(channel, `@${tags['display-name']} aqui ó: https://github.com/saulojoab. Dá uma olhada e me segue lá <3`);
            break;
        case 'qual teu github?':
            client.say(channel, `@${tags['display-name']} aqui ó: https://github.com/saulojoab. Dá uma olhada e me segue lá <3`);
            break;
        
        case 'bebe agua':
            client.say(channel, 'BEBE ÁGUA AGORA ARROMBADO @Laudeee');
            break;
        case 'bebe água':
            client.say(channel, 'BEBE ÁGUA AGORA ARROMBADO @Laudeee');
            break;
	}
});