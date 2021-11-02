const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
    let msg = bot.snipes.get(message.channel.id);
        if (!msg) return message.reply("There are no deleted messages in this channel!");
        let snipEMbed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setAuthor(msg.author, msg.avatar)
        .setDescription(msg.content)
        .setImage(msg.image?msg.image:null)
        .setFooter("Message Deleted")
        .setTimestamp(msg.time)
        message.channel.send({embeds:[snipEMbed]});
    }

module.exports.config = {
    name: "snipe",
    description: "Get the last deleted message in the channel.",
    usage: "?snipe",
    accessableby: "Members",
    aliases: ['s']
}