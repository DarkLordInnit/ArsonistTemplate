const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

const nspimages = ["https://c.tenor.com/cEOjUcKVDI0AAAAd/dora-no-swiping.gif"]

const nspimage = Math.floor((Math.random() * nspimages.length));

const personnswipe = message.mentions.members.first();

if (personnswipe){

let nswipeembed = new Discord.MessageEmbed()
.setTitle(`You saved ${personnswipe.user.tag} from death!`)
.setColor("RANDOM")
.setImage(nspimages[nspimage])
.setTimestamp();

message.reply({embeds: [nswipeembed]})
}
else{
    message.reply('That person is not in the server!')
}
}

module.exports.config = {
    name: "noswipe",
    description: "Save a member or yourself from being swiped!",
    usage: "no?swipe <@user>",
    accessableby: "Members",
    aliases: ['noslash']
}