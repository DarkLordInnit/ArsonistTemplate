const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {

    if (!args[1]) {
        return message.channel.send('Please include what you want me to say.')
    }
    const sayEmbed = new Discord.MessageEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dyanmic: true }))
        .setDescription(args.slice(0))
        .setTimestamp()
        .setColor("RANDOM")

    message.channel.send({embeds: [sayEmbed] })
  }

  module.exports.config = {
    name: "say",
    description: "Say a message with an embed.",
    usage: "?say <message>",
    accessableby: "Members",
    aliases: []
}