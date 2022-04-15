require('dotenv').config();
const { Client, Intents } = require('discord.js');

const client = new Client({intents: [Intents.FLAGS.DIRECT_MESSAGES, Intents.FLAGS.GUILD_MESSAGES]});

client.on('ready', () => console.log('epoch timestamp bot is online'));
client.login(process.env.KEY);