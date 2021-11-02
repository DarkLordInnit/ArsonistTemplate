const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {

const inviteembed = new Discord.MessageEmbed()
.setTitle("Invite this bot to your server!")
.setDescription("https://discord.com/api/oauth2/authorize?client_id=901707955584520224&permissions=8&scope=bot")
.setColor("#DC3F1D")
.setTimestamp()

message.reply({embeds: [inviteembed]});

}

module.exports.config = {
    name: "invite",
    description: "Invite this bot to your server!",
    usage: "?invite",
    accessableby: "Members",
    aliases: []
}