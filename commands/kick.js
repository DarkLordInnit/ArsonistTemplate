const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {


    if (!message.member.permissions.has(Discord.Permissions.FLAGS.ADMINISTRATOR)) {
        return message.reply("Missing Permissions!")
    }

    const mentionMember = message.mentions.members.first();
    let reason = args.slice(22);
    if (!reason) reason = "No reason given";

    if (message.member.roles.highest.position <= mentionMember.roles.highest.position) return message.reply('The member you are trying to kick has higher or the same role as you!');

    const kickembed = new Discord.MessageEmbed()
    .setTitle(`You were kicked from **${message.guild.name}**`)
    .setDescription(`Reason: ${reason}`)
    .setColor("RANDOM")
    .setTimestamp()
    .setFooter(bot.user.tag, bot.user.displayAvatarURL())

    if (!mentionMember) return message.reply("You need to specify a valid user to kick!");

        if(!mentionMember.kickable) return message.reply("I was unable to kick this user!");

        await mentionMember.send({embeds: [kickembed]});
        await mentionMember.kick({
            reason: reason
        }).then(() => message.reply("Successfully kicked: " + mentionMember.user.tag));
    }


module.exports.config = {
    name: "kick",
    description: "Kick a member",
    usage: "?kick <@user>",
    accessableby: "Admins",
    aliases: []
}
