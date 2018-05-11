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


client.login(process.env.NDQ0NDExNDY0MzI1NzkxNzU0.DdbiNA.ys5RV2mNy0vHzsVBfFZzpv1bPkU);
