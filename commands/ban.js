const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {


    if (!message.member.permissions.has(Discord.Permissions.FLAGS.ADMINISTRATOR)) {
        return message.reply("Missing Permissions!")
    }

    const mentionMember = message.mentions.members.first();
        let reason = args.slice(22);
        if (!reason) reason = "No reason given";

        if (message.member.roles.highest.position <= mentionMember.roles.highest.position) return message.reply('The member you are trying to ban has higher or the same role as you!');

        const embed = new Discord.MessageEmbed()
        .setTitle(`You were banned from **${message.guild.name}**`)
        .setDescription(`Reason: ${reason}`)
        .setColor("RED")
        .setTimestamp()
        .setFooter(bot.user.tag, bot.user.displayAvatarURL())

        if (!mentionMember) return message.reply("You need to specify a valid user to ban!");

        if(!mentionMember.bannable) return message.reply("I was unable to ban this user!");

        await mentionMember.send({embeds: [embed]});
        await mentionMember.ban({
            reason: reason
        }).then(() => message.reply("Successfully banned: " + mentionMember.user.tag));
    }


    module.exports.config = {
        name: "ban",
        description: "Ban a member!",
        usage: "?ban <@user>",
        accessableby: "Admins",
        aliases: []
    }
