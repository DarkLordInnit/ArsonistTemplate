const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

const pimages = ["https://c.tenor.com/7JVff7vMCVkAAAAC/face-punch-punch.gif", "https://c.tenor.com/6a42QlkVsCEAAAAC/anime-punch.gif", "https://c.tenor.com/BoYBoopIkBcAAAAC/anime-smash.gif", "https://c.tenor.com/iNtrE9xI-U4AAAAC/the-world-muda-muda-muda.gif", "https://c.tenor.com/LytxJSf81m4AAAAC/ora-beatdown-oraoraora.gif", "https://c.tenor.com/25f3EArLzgcAAAAC/punch-in-the-face-joshua-buatsi.gif", "https://c.tenor.com/p-t3ydFj5RMAAAAC/vgggg-izuku-midoriya.gif", "https://cdn.weeb.sh/images/SJvGvT-bf.gif", "https://c.tenor.com/SwMgGqBirvcAAAAC/saki-saki-kanojo-mo-kanojo.gif"]

const pimage = Math.floor((Math.random() * pimages.length));
    
const responses = [", ouch!", ", that must have hurt!", ", OOF!"]

const response = Math.floor((Math.random() * responses.length))
    
const personpunched = message.mentions.members.first();

if (personpunched){

let punchembed = new Discord.MessageEmbed()
.setTitle(`You punch ${personpunched.user.tag}${responses[response]}`)
.setColor("RANDOM")
.setImage(pimages[pimage])
.setTimestamp();

message.reply({embeds: [punchembed]})
}
else{
    message.reply('That person is not in the server!')
}
}

module.exports.config = {
    name: "punch",
    description: "Punch a member.",
    usage: "?punch <@user>",
    accessableby: "Members",
    aliases: []
}
