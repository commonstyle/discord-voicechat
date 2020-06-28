const config = require('./config.json');
const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
    console.log(`NAME : ${client.user.username}\nID : ${client.user.id}`);
});

client.login(config.token);