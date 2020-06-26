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
1
  if (message.content === 'spam', 'spam', 'Spam') {
1
    message.reply('hi');
1
  }
1
});

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
