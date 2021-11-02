const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

const timages = ["https://c.tenor.com/BwVhHs5XfDsAAAAC/haikyuu-sh%C5%8Dy%C5%8Dhinata.gif", "https://c.tenor.com/BUZOVzZoN-gAAAAC/get-up-out-of-my-bed-anime.gif", "https://c.tenor.com/Ia58SdP_5MIAAAAC/lion-king-toss.gif", "https://c.tenor.com/yhz79wkknsYAAAAd/yeet-cat.gif", "https://c.tenor.com/EkQS-yDvuw4AAAAC/pool-throw.gif", "https://c.tenor.com/K9EkR1nAImwAAAAC/dumpster-man.gif" ]

const timage = Math.floor((Math.random() * timages.length));
    
const responses = [", ouch!", ", that must have hurt!", ", OOF!"]

const response = Math.floor((Math.random() * responses.length))

const personthrow = message.mentions.members.first();

if (personthrow){

let tembed = new Discord.MessageEmbed()
.setTitle(`You throw ${personthrow.user.tag}${responses[response]}`)
.setColor("RANDOM")
.setImage(timages[timage])
.setTimestamp();

message.reply({embeds: [tembed]})
}
else{
    message.reply('That person is not in the server!')
}
}

module.exports.config = {
    name: "throw",
    description: "Throw a member.",
    usage: "?throw <@user>",
    accessableby: "Members",
    aliases: ['chuck', 'yeet']
}
