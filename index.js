const Discord = require('discord.js');
const config = require('./config.json');
const messageAction = require('./functions').messageCommands;

const client = new Discord.Client();

client.login(config.BOT_TOKEN);
client.on("message", messageAction);