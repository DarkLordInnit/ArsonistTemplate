const Discord = require('discord.js');
const got = require('got');

module.exports.run = async (bot, message, args) => {
    if (message.content === "?meme") {
        const meme = new Discord.MessageEmbed()
        got('https://www.reddit.com/r/memes/random/.json').then(response => {
            let content = JSON.parse(response.body);
            let permalink = content[0].data.children[0].data.permalink;
            let memeUrl = `https://reddit.com${permalink}`;
            let memeImage = content[0].data.children[0].data.url;
            let memeTitle = content[0].data.children[0].data.title;
            let memeUpvotes = content[0].data.children[0].data.ups;
            let memeDownvotes = content[0].data.children[0].data.downs;
            let memeNumComments = content[0].data.children[0].data.num_comments;
            meme.setTitle(`${memeTitle}`)
            meme.setURL(`${memeUrl}`)
            meme.setImage(memeImage)
            meme.setColor('RANDOM')
            meme.setFooter(`👍 ${memeUpvotes} 👎 ${memeDownvotes} 💬 ${memeNumComments}`)
            message.channel.send({ embeds: [meme] });
        })
    }

}

module.exports.config = {
    name: "meme",
    description: "See a meme from r/memes",
    usage: "?meme",
    accessableby: "Members",
    aliases: []
}