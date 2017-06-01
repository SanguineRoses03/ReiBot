const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  if (message.content === 'ping') {
    message.reply('pong');
  }
});

client.login('MzE5NzAyNzgwNzMyMzc1MDQy.DBFFJg.nmkHM_U15e4YWkKKl4MFMCx71hY');