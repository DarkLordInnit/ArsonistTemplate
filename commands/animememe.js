const Discord = require('discord.js');
const got = require('got');

module.exports.run = async (bot, message, args) => {
        const ameme = new Discord.MessageEmbed()
        got('https://www.reddit.com/r/animememes/random/.json').then(response => {
            let content = JSON.parse(response.body);
            let permalink = content[0].data.children[0].data.permalink;
            let amemeUrl = `https://reddit.com${permalink}`;
            let amemeImage = content[0].data.children[0].data.url;
            let amemeTitle = content[0].data.children[0].data.title;
            let amemeUpvotes = content[0].data.children[0].data.ups;
            let amemeDownvotes = content[0].data.children[0].data.downs;
            let amemeNumComments = content[0].data.children[0].data.num_comments;
            ameme.setTitle(`${amemeTitle}`)
            ameme.setURL(`${amemeUrl}`)
            ameme.setImage(amemeImage)
            ameme.setColor('RANDOM')
            ameme.setFooter(`👍 ${amemeUpvotes} 👎 ${amemeDownvotes} 💬 ${amemeNumComments}`)
            message.channel.send({ embeds: [ameme] });
        })
    }

module.exports.config = {
    name: "animememe",
    description: "See a meme from r/animememes",
    usage: "?animememe",
    accessableby: "Members",
    aliases: ['ameme', 'animem']
}
