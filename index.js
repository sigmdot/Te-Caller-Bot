const Discord = require('discord.js');
const dotenv = require('dotenv');

const messageAction = require('./functions').messageCommands;

const client = new Discord.Client();

dotenv.config();

console.log(process.env.BOT_TOKEN);

client.login(`${process.env.BOT_TOKEN}`);
client.on("message", messageAction);