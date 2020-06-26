const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong pong pong pong pong pong pong pong pong');

       }

});

 client.on('message', message => {
10
  if (message.content === 'spam', 'spam', 'Spam') {
10
    message.reply('hi');
10
  }
10
});

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
