const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Ready to educate!');
});

client.on('message', message => {
    if (message.content === '!hello') {
    	message.reply('Hello! I am RP bot!');
  	}
});


client.login(process.env...);
