const Discord = require('discord.js');
const got = require('got');

module.exports.run = async (bot, message, args) => {
        const dmeme = new Discord.MessageEmbed()
        got('https://www.reddit.com/r/dankmemes/random/.json').then(response => {
            let content = JSON.parse(response.body);
            let permalink = content[0].data.children[0].data.permalink;
            let dmemeUrl = `https://reddit.com${permalink}`;
            let dmemeImage = content[0].data.children[0].data.url;
            let dmemeTitle = content[0].data.children[0].data.title;
            let dmemeUpvotes = content[0].data.children[0].data.ups;
            let dmemeDownvotes = content[0].data.children[0].data.downs;
            let dmemeNumComments = content[0].data.children[0].data.num_comments;
            dmeme.setTitle(`${dmemeTitle}`)
            dmeme.setURL(`${dmemeUrl}`)
            dmeme.setImage(dmemeImage)
            dmeme.setColor('RANDOM')
            dmeme.setFooter(`👍 ${dmemeUpvotes} 👎 ${dmemeDownvotes} 💬 ${dmemeNumComments}`)
            message.channel.send({ embeds: [dmeme] });
        })
    }

module.exports.config = {
    name: "dankmeme",
    description: "See a meme from r/dankmemes",
    usage: "dankmeme",
    accessableby: "Members",
    aliases: ['dmeme', 'dankm']
}