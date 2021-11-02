const Discord = require('discord.js');
const simplydjs = require('simply-djs')

module.exports.run = async (bot, message, args) => {

simplydjs.calculator(message, {
embedColor: "RANDOM"
})

}

module.exports.config = {
    name: "calculator",
    description: "Use the calculator.",
    usage: "?calculator",
    accessableby: "Members",
    aliases: ['calc']
}