const Discord = require('discord.js');
const botsettings = require('./botsettings.json');

const bot = new Discord.Client({ intents: new Discord.Intents([
    "GUILDS",
    "GUILD_MEMBERS",
    "GUILD_BANS",
    "GUILD_EMOJIS_AND_STICKERS",
    "GUILD_INTEGRATIONS",
    "GUILD_WEBHOOKS",
    "GUILD_INVITES",
    "GUILD_VOICE_STATES",
    "GUILD_MESSAGES",
    "GUILD_MESSAGE_REACTIONS",
    "GUILD_MESSAGE_TYPING",
    "DIRECT_MESSAGES",
    "DIRECT_MESSAGE_REACTIONS",
    "DIRECT_MESSAGE_TYPING",
    "GUILD_PRESENCES"
])})

require("./util/eventHandler")(bot)

const fs = require("fs");
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();
bot.snipes = new Map();
bot.editSnipes = new Map();

fs.readdir("./commands/", (err, files) => {

    if(err) console.log(err)

    let jsfile = files.filter(f => f.split(".").pop() === "js") 
    if(jsfile.length <= 0) {
         return console.log("[LOGS] Couldn't Find Commands!");
    }

    jsfile.forEach((f, i) => {
        let pull = require(`./commands/${f}`);
        bot.commands.set(pull.config.name, pull);  
        pull.config.aliases.forEach(alias => {
            bot.aliases.set(alias, pull.config.name)
        });
    });
});

bot.on("messageCreate", async message => {
    if(message.author.bot || message.channel.type === "dm") return;

    let prefix = botsettings.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = message.content.substring(message.content.indexOf(' ')+1);

    if(!message.content.startsWith(prefix)) return;
    let commandfile = bot.commands.get(cmd.slice(prefix.length)) || bot.commands.get(bot.aliases.get(cmd.slice(prefix.length)))
    if(commandfile) commandfile.run(bot,message,args)

})

bot.on("messageDelete", async (message, channel) => {
	if (message.author.bot) return;
	bot.snipes.set(message.channel.id, {
		content: message.content,
		author: message.author.tag,
		avatar: message.author.displayAvatarURL(),
		image: message.attachments.first()
			? message.attachments.first().proxyURL
			: null,
                time: Date.now()
	});
});

bot.on("messageUpdate", (oldMessage, newMessage) => {
	if (oldMessage.author.bot) return;
  if (oldMessage.content == newMessage.content) return;
	bot.editSnipes.set(oldMessage.channel.id, {
		oldContent: oldMessage.content,
		newContent: newMessage.content,
		author: oldMessage.author.tag,
		avatar: oldMessage.author.displayAvatarURL(),
		time: newMessage.editedTimestamp
	});
    
});

bot.login(botsettings.token);