const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

    let upperlimit = 6;
        if (args[0]&&isNaN(args[0])) return message.reply("Invalid argument");
        if (args[0]&&(args[0]>9||args[0]<2)) return message.channel.send("Argument provided should be between 2 and 9");
        if (args[0]) upperlimit = args[0];
        let emb = new Discord.MessageEmbed()
         .setColor("GREEN")
         .setTitle("Number roll")
         .setDescription(`The number rolled is ${Math.floor(1+Math.random()*upperlimit)}`)
         .setTimestamp();
         message.channel.send({embeds: [emb]});
    }
module.exports.config = {
    name: "diceroll",
    description: "Roll a dice.",
    usage: "?dice",
    accessableby: "Members",
    aliases: ['dice']
}
