const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

const spimages = ["https://c.tenor.com/TX4Qayb1kfkAAAAd/one-piece.gif", "https://c.tenor.com/CQiKYcE8imsAAAAC/tsugumomo-kukuri.gif", "https://c.tenor.com/8FPrBDhBbtAAAAAC/dora-dora-the-explorer.gif", "https://c.tenor.com/oMEG-zYYdvMAAAAd/cat-kitten.gif"]

const spimage = Math.floor((Math.random() * spimages.length));

const personswipe = message.mentions.members.first();

if (personswipe){

let swipeembed = new Discord.MessageEmbed()
.setTitle(`You swiped ${personswipe.user.tag} to death!`)
.setColor("RANDOM")
.setImage(spimages[spimage])
.setFooter("Save yourself or the person swiped, you have 10 seconds!")
.setTimestamp();

message.reply({embeds: [swipeembed]})
}
else{
    message.reply('That person is not in the server!')
}
}

module.exports.config = {
    name: "swipe",
    description: "Swipe a member.",
    usage: "?swipe <@user>",
    accessableby: "Members",
    aliases: ['slash']
}
