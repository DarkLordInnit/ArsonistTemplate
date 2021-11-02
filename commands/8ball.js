const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
    if(!args[0]) return message.reply('Please ask a full question!')
        let replies = ["yes.", "Outlook seems good.", "of course.", "Yes – definitely.", "no.", "Better not tell you now.", "Outlook is not so good..", "nah", "never", "Cannot predict now.", "I dont know.", "I dont know *yet*...", "not a chance.", "I think so.", "only for today!", "not for today c:", "sadly yes..", "sadly no..", "maybe!", "ask again.. later.."];
        
        let result = Math.floor((Math.random() * replies.length));
        let question = args.slice(0);

        let ballembed = new Discord.MessageEmbed()
        .setAuthor(`🎱 ${message.author.username}`)
        .setColor("RANDOM")
        .addField("Question", question)
        .addField("Answer", replies[result])

        message.channel.send({embeds: [ballembed] })
    }
    module.exports.config = {
        name: "8ball",
        description: "See the future",
        usage: "?8ball <question>",
        accessableby: "Members",
        aliases: ['8b']
    }
