const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

const spaimages = ["https://c.tenor.com/p_5BI_lkmxgAAAAC/%E3%81%8A%E3%81%97%E3%82%8A%E3%83%9A%E3%83%B3%E3%83%9A%E3%83%B3-%E5%8F%A9%E3%81%8F.gif", "https://c.tenor.com/pmNhwo6_2nUAAAAC/bum-kick.gif", "https://c.tenor.com/b-91Y6md2HgAAAAC/dog-rooster.gif", "https://c.tenor.com/B5oC9lACJ9kAAAAC/anime-spank.gif", "https://c.tenor.com/5ropePOLZV4AAAAC/bad-beat.gif", "https://c.tenor.com/bbAQ2wzoecoAAAAC/spank-tom-and-jerry.gif"]

const spaimage = Math.floor((Math.random() * spaimages.length));
    
const responses = [", ouch!", ", that must have hurt!", ", OOF!"]

const response = Math.floor((Math.random() * responses.length))

const personspank = message.mentions.members.first();

if (personspank){

let spankembed = new Discord.MessageEmbed()
.setTitle(`You spank ${personspank.user.tag}${responses[response]}`)
.setColor("RANDOM")
.setImage(spaimages[spaimage])
.setTimestamp();

message.reply({embeds: [spankembed]})
}
else{
    message.reply('That person is not in the server!')
}
}

module.exports.config = {
    name: "spank",
    description: "Spank a member.",
    usage: "?spank <@user>",
    accessableby: "Members",
    aliases: []
}
