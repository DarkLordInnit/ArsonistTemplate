module.exports.run = async (bot, message, args) => {
    const msg = await message.reply(`š Ping: ${bot.ws.ping} ms.`);

		msg.edit(
			`š Ping: ${bot.ws.ping} ms.\nš Message Ping: ${
				msg.createdTimestamp - message.createdTimestamp
			} ms.`
		);
	}

    module.exports.config = {
        name: "ping",
        description: "See the ping of the bot.",
        usage: "?ping",
        accessableby: "Members",
        aliases: ['p']
    }