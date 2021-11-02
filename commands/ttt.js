const Discord = require('discord.js');
const simplydjs = require('simply-djs')

module.exports.run = async (bot, message, args) => {

simplydjs.tictactoe(message)

}

module.exports.config = {
    name: "tictactoe",
    description: "Play tictacetoe with a member.",
    usage: "?tictactoe <@user>",
    accessableby: "Members",
    aliases: ['ttt']
}