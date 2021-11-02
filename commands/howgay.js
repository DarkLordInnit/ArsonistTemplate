const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
    let member = message.mentions.users.first() || message.author

        let rng = Math.floor(Math.random() * 101);

        const howgayembed = new Discord.MessageEmbed()
        .setTitle(`Gay Machine Calculator`)
        .setDescription(`${member.username} is ` + rng + "% Gay🌈")
        .setColor("GREEN")

        message.channel.send({embeds: [howgayembed]});
    }
    module.exports.config = {
        name: "howgay",
        description: "See how gay you are.",
        usage: "?howgay (optional - <@user>)",
        accessableby: "Members",
        aliases: ['gay']
    }