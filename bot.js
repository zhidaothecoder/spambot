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

if (message.content === 'spam', 'spam', 'Spam') {
    for (i=0;i <= 10000;i++){
    message.reply('my brudda');
    }
  }
});

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
