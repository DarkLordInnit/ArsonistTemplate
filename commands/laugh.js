const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

const limages = ["https://c.tenor.com/fvyhQ6n57wEAAAAd/saturday-baby.gif", "https://c.tenor.com/WPGSnkUjy8gAAAAC/laugh-jerry.gif", "https://c.tenor.com/9Jpj6U1Bq9YAAAAC/laughing-hysterically.gif", "https://c.tenor.com/P3071wk1eXcAAAAC/laughing-baby.gif", "https://c.tenor.com/wIxFiobxxbIAAAAd/john-jonah-jameson-lol.gif", "https://c.tenor.com/MCn_GMSSqAsAAAAd/lol-laughing-hysterically.gif", "https://c.tenor.com/B-expmjx5R0AAAAC/natsu-lol.gif"]

const limage = Math.floor((Math.random() * limages.length));

const personl = message.mentions.members.first();

if (personl){

let lembed = new Discord.MessageEmbed()
.setTitle(`You laugh at ${personl.user.tag}`)
.setColor("RANDOM")
.setImage(limages[limage])
.setTimestamp();

message.reply({embeds: [lembed]})
}

    if (!personl){

let lembed2 = new Discord.MessageEmbed()
.setTitle(`You laugh`)
.setColor("RANDOM")
.setImage(limages[limage])
.setTimestamp();
        
        message.reply({embeds: [lembed2]})
    }
}

module.exports.config = {
    name: "laugh",
    description: "Laugh at a member.",
    usage: "?laugh (optional - <@user>)",
    accessableby: "Members",
    aliases: []
}
