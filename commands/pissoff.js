const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

const fimages = ["https://c.tenor.com/6R1Os9KwTjUAAAAC/anime-naruto.gif", "https://c.tenor.com/pJXFJRIYRaUAAAAC/baby-girl-middle-finger.gif", "https://c.tenor.com/ojGSDL9QIQAAAAAC/mr-bean-fuck-you.gif", "https://c.tenor.com/N9yJ9gUpX48AAAAC/oh-fuck-off-go-away.gif"]

const fimage = Math.floor((Math.random() * fimages.length));

const personf = message.mentions.members.first();

if (personf){

let fembed = new Discord.MessageEmbed()
.setTitle(`You told ${personf.user.tag} to piss off.`)
.setColor("RANDOM")
.setImage(fimages[fimage])
.setTimestamp();

message.reply({embeds: [fembed]})
}
else{
    message.reply('That person is not in the server!')
}
}

module.exports.config = {
    name: "pissoff",
    description: "Piss off!",
    usage: "?pissoff <@user>",
    accessableby: "Members",
    aliases: ['foff']
}