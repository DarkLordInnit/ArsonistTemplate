const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

const simages = ["https://c.tenor.com/UDo0WPttiRsAAAAd/bunny-girl-slap.gif", "https://c.tenor.com/fKzRzEiQlPQAAAAC/anime-slap.gif", "https://c.tenor.com/PeJyQRCSHHkAAAAC/saki-saki-mukai-naoya.gif", " https://c.tenor.com/EzwsHlQgUo0AAAAC/slap-in-the-face-angry.gif", "https://c.tenor.com/Ws6Dm1ZW_vMAAAAC/girl-slap.gif", "https://c.tenor.com/rVXByOZKidMAAAAd/anime-slap.gif", "https://c.tenor.com/PTONt_7DUTgAAAAC/batman-slap-robin.gif", "https://c.tenor.com/rwYmRb2wwdMAAAAC/slap-slapping.gif"]

const simage = Math.floor((Math.random() * simages.length));
    
const responses = [", ouch!", ", that must have hurt!", ", OOF!"]

const response = Math.floor((Math.random() * responses.length))

const personslapped = message.mentions.members.first();

if (personslapped){

let slapembed = new Discord.MessageEmbed()
.setTitle(`You slap ${personslapped.user.tag}${responses[response]}`)
.setColor("RANDOM")
.setImage(simages[simage])
.setTimestamp();

message.reply({embeds: [slapembed]})
}
else{
    message.reply('That person is not in the server!')
}
}

module.exports.config = {
    name: "slap",
    description: "Slap a member.",
    usage: "?slap <@user>",
    accessableby: "Members",
    aliases: ['thapad']
}
