const commands = require('./../commands');

class Message {
    constructor (action, tags) {
        this.action = action;
        this.tags = tags;
    }

    _process () {
        // Searching for the specified command in the command list.
        const command = commands.map((command) => {
            if (command.action.toLowerCase() === this.action.toLowerCase()) {
                return command;
            }
        }).filter((v) => v )[0];


        // If that command exists in the list.
        if (command) {
            // If it has a counter;
            if (Number.isInteger(command.count)) {
                // We increment the counter and replace it on the message.
                command.count = command.count + 1;
                command.message = command.oldMessage.replace("<X>", String(command.count));
            }

            // If the command mentions the user who sent it, we add the display name to the message.
            if (command.includeNames) {
                return `@${this.tags['display-name']}, ${command.message}`;
            }

            return command.message;
        }
    }
}

module.exports = Message;