const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

const stompimages = ["https://c.tenor.com/eLRdtjmJm1UAAAAd/stunt-fail.gif", "https://c.tenor.com/82qj45vuRjYAAAAC/za-warudo.gif", "https://c.tenor.com/sDsRgrQovukAAAAC/oruchuban-ebichu-oruchuban.gif", "https://c.tenor.com/jRsrUevchNcAAAAC/daniel-bryan-stomp.gif", "https://c.tenor.com/LxoWv1cv5UgAAAAd/kintaro-oe.gif", "https://c.tenor.com/Cijir9vIvYcAAAAd/seth-rollins-wwe.gif", "https://c.tenor.com/cIxVE_TS_RIAAAAC/stomp.gif", "https://c.tenor.com/SddY3UqUHOAAAAAC/kick-cartoon.gif", "https://c.tenor.com/MNFGsF3rD-MAAAAC/chun-li-thunder-kick.gif", "https://c.tenor.com/D67kRWw_cEEAAAAC/voz-dap-chym-dap-chym.gif", "https://c.tenor.com/HYYvbfGM8mMAAAAC/lol-you.gif"]

const stompimage = Math.floor((Math.random() * stompimages.length));
    
const responses = [", ouch!", ", that must have hurt!", ", OOF!"]

const response = Math.floor((Math.random() * responses.length))

const personstomp = message.mentions.members.first();

if (personstomp){

let stompembed = new Discord.MessageEmbed()
.setTitle(`You stomped/kicked ${personstomp.user.tag}${responses[response]}`)
.setColor("RANDOM")
.setImage(stompimages[stompimage])
.setTimestamp();

message.reply({embeds: [stompembed]})
}
else{
    message.reply('That person is not in the server!')
}
}

module.exports.config = {
    name: "stomp",
    description: "Stomp/kick a member.",
    usage: "?stomp <@user>",
    accessableby: "Members",
    aliases: ['legkick']
}
