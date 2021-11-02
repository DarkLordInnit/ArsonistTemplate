const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
        let msg = bot.editSnipes.get(message.channel.id);
         if (!msg) return message.reply("There are no edited messages in this channel!");
         let editSnipEMbed = new Discord.MessageEmbed()
         .setColor("RANDOM")
         .setAuthor(msg.author, msg.avatar)
         .addFields(
         {name: "Old Message" ,value: msg.oldContent!=""?msg.oldContent:"[NA]"},
         {name: "New Message" ,value: msg.newContent!=""?msg.newContent:"[NA]"}
         )
         .setFooter(`Message Edited`)
         .setTimestamp(msg.time);
         message.channel.send({embeds: [editSnipEMbed]});
     }
 
     module.exports.config = {
        name: "editsnipe",
        description: "Get the last edited message in the channel.",
        usage: "?editsnipe",
        accessableby: "Members",
        aliases: ['es', 'esnipe']
    }