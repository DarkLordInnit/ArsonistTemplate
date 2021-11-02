module.exports.run = async (bot, message, args) => {
    const msg = await message.reply(`📊 Ping: ${bot.ws.ping} ms.`);

		msg.edit(
			`📊 Ping: ${bot.ws.ping} ms.\n🏓 Message Ping: ${
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