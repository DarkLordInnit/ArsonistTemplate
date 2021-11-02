const Discord = require('discord.js')
const { pagination } = require('reconlx')

module.exports.run = async (bot, message, args) => {

    let helpArray = message.content.split(" ");
    let helpArgs = helpArray.slice(1);
    
    if(helpArgs[0]) {
    let command = helpArgs[0];

    if(bot.commands.has(command)) {
        
        command = bot.commands.get(command);
        var embed = new Discord.MessageEmbed()
        .setAuthor(`${command.config.name} Command`)
        .setDescription(`
        - **Command's Description** __${command.config.description || "There is no Description for this command."}__
        - **Command's Usage:** __${command.config.usage || "No Usage"}__
        - **Command's Permissions:** __${command.config.accessableby || "Members"}__
        - **Command's Aliases:** __${command.config.aliases || "No Aliases"}__
        `)
        .setColor("#DC3F1D")

    message.channel.send({embeds: [embed]});
}}
    else{
    
    const BotInfo = new Discord.MessageEmbed()
    .setColor("#DC3F1D")
    .setTitle("Bot Information 📍 ")
    .addField("**Prefix**", "Bot prefix is: ?")
    .addField("**Pages**", "1. BotInformation, 2. Fun, 3. Interactions, 4. Utility, 5. Moderation")
    .addField("**Navigation Help**", "Use the buttons below to navigate through pages!")
    .setFooter("The first page")

    const Fun = new Discord.MessageEmbed()
    .setColor("#DC3F1D")
    .setTitle("Fun Commands:")
    .addField("`?8ball`", "See all your questons answered! 🔮")
    .addField("`?coinflip`", "Flip a coin! 🪙")
    .addField("`?cricketrandom`", "A random cricket players name. 🏏")
    .addField("`?emojify`", "Emojify any message you want!")
    .addField("`?howgay`", "See how gay a person is 🏳️‍🌈")
    .addField("`?meme`", "See a meme from r/memes! 🤣")
    .addField("`?dankmeme`", "See a meme from r/dankmemes! 🤣")
    .addField("`?animememe`", "See a meme from r/animememes! 🤣")
    .addField("`?say`", "Say a message in an embed!")
    .addField("`?tictactoe`", "Play a tictactoe with a member! ❌⭕")

    const Interactions = new Discord.MessageEmbed()
    .setColor("#DC3F1D")
    .setTitle("Interaction Commands:")
    .addField("`?dance`", "Dance on someone! 🕺")
    .addField("`?laugh`", "Laugh at a member! 😆")
    .addField("`?pissoff`", "Use the command if your angry or pissed at someone! 😡")
    .addField("`?punch`", "Punch a member! 👊")
    .addField("`?slap`", "Slap a member! ✋")
    .addField("`?spank`", "Spank a member! 🖐️")
    .addField("`?stomp`", "Stomp/kick a member! 🦶")
    .addField("`?wave`", "Wave at a member! :wave:")
    .addField("`?swipe`", "Swipe someone to death! 🔪")
    .addField("`?noswipe`", "Save someone from being swiped! 😁")

    const Utility = new Discord.MessageEmbed()
    .setColor("#DC3F1D")
    .setTitle("Utility Commands:")
    .addField("`?ping`", "See the ping of the bot! 🏓")
    .addField("`?snipe`", "See the last deleted message!")
    .addField("`?editsnipe`", "See the last edited message!")
    .addField("`?memberinfo`", "See all information about a member!")
    .addField("`?calculator`", "Use the calculator. 🧮")
    .addField("`?invite`", "Invite this bot to your server! 🤖")

    const Moderation = new Discord.MessageEmbed()
    .setColor("#DC3F1D")
    .setTitle("Moderation Commands:")
    .addField("`?ban`", "Ban a member. 🔨")
    .addField("`?kick`", "Kick a member. 🦵")
    

   var pages = [
        BotInfo,
        Fun,
        Interactions,
        Utility,
        Moderation,
    ]


pagination({
    embeds: pages,
    channel: message.channel,
    author: message.author,
    fastSkip: true,
    pageTravel: true,
})
}
}

module.exports.config = {
    name: "help",
    description: "See the list of commands",
    usage: "?help",
    accessableby: "Members",
    aliases: ['h']
}
