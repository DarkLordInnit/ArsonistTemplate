const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

const dimages = ["https://c.tenor.com/1XBEd972B2sAAAAd/dance-kid.gif", "https://c.tenor.com/u2zOGD8sWCgAAAAC/kakashi-dancing.gif", "https://c.tenor.com/PEiwJfiuGkAAAAAd/kermit-dance.gif", "https://c.tenor.com/ZIZ9CRd3dtsAAAAC/chris-tucker-dancing.gif", "https://c.tenor.com/W06knTv2yOUAAAAd/jetha-dance.gif", "https://c.tenor.com/P8VsDwHZreYAAAAd/tobey-maguire-spider-man.gif", "https://c.tenor.com/PiGmcEswsd0AAAAd/incredible-dance-crazy-dance.gif"]

const dimage = Math.floor((Math.random() * dimages.length));

const persondance = message.mentions.members.first();

if (persondance){

let danceembed = new Discord.MessageEmbed()
.setTitle(`You dance on ${persondance.user.tag}!`)
.setColor("RANDOM")
.setImage(dimages[dimage])
.setTimestamp();

message.reply({embeds: [danceembed]})
}
if(!persondance){
    let danceembed2 = new Discord.MessageEmbed()
    .setTitle(`You dance`)
.setColor("RANDOM")
.setImage(dimages[dimage])
.setTimestamp();
    
    message.reply({embeds: [danceembed2]})
  }
}

module.exports.config = {
    name: "dance",
    description: "Dance on a member.",
    usage: "?dance (optional - <@user>)",
    accessableby: "Members",
    aliases: []
}
