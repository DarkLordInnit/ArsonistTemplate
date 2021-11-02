const Discord = require('discord.js');

const crickplayer = require('crickrandom');

module.exports.run = async (bot, message, args) => {
    const cembed = new Discord.MessageEmbed()
.setTitle('Cricket player')
.setColor("RANDOM")
.setDescription(`${crickplayer(1)}`)
.setTimestamp()


message.channel.send({embeds: [cembed]})
  
  }

  module.exports.config = {
    name: "cricketrandom",
    description: "A random cricket player's name.",
    usage: "?cricketrandom",
    accessableby: "Members",
    aliases: ['cricket', 'cr']
}
