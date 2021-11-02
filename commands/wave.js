const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

const wimages = ["https://c.tenor.com/Qy5sUxL5phgAAAAC/forest-gump-wave.gif", "https://c.tenor.com/UPa7j2Dz3rgAAAAC/wave.gif", "https://c.tenor.com/7rMJZKO5CYYAAAAC/baby-yoda-hi.gif", "https://c.tenor.com/2mvMfV8_KW0AAAAC/kakashi-hatake-naruto.gif", "https://c.tenor.com/xLkmU4JRI7oAAAAC/wave-snorlax.gif"]

const wimage = Math.floor((Math.random() * wimages.length));

const wave = message.mentions.members.first();

if (wave){

let waveembed = new Discord.MessageEmbed()
.setTitle(`You wave at ${wave.user.tag}`)
.setColor("RANDOM")
.setImage(wimages[wimage])
.setTimestamp();

message.reply({embeds: [waveembed]})
}
    if(!wave){
        let waveembed2 = new Discord.MessageEmbed()
        .setTitle("You wave")
        .setColor("RANDOM")
        .setImage(wimages[wimage])
        .setTimestamp();
        
        message.reply({embeds: [waveembed2]})
    }
}
module.exports.config = {
    name: "wave",
    description: "Wave at a member.",
    usage: "?wave (optional - <@user>)",
    accessableby: "Members",
    aliases: ['hello', 'hi', 'bye']
}
