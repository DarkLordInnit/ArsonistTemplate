module.exports.run = async (bot, message, args) => {
    let number = Math.floor(Math.random() * 2);
        if (number == 1) {
            message.reply('Heads')
        }
        if (number == 0) {
            message.reply('Tails')
        }
}

module.exports.config = {
    name: "coinflip",
    description: "Flip a coin",
    usage: "?coinflip",
    accessableby: "Members",
    aliases: ['coin', 'cf','flip']
}