console.log("hi guys welcome to my lets play")

require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();
client.login(process.env.BOTTOKEN);

client.on('ready', readyDiscord);
function readyDiscord() {
    console.log('AGLA \n sAGLA \n PAGla')
}

client.on('message', gotMessage);

const eightball = [
    'It is certain',
    'It is decidedly so',
    'Without a doubt',
    'Yes, definitely',
    'You may rely on it',
    'As I see it, yes',
    'Most likely',
    'Outlook good',
    'Yes',
    'Signs point to yes',
    'Reply hazy try again',
    'Ask again later',
    'Better not tell you now',
    'Cannot predict now',
    'Concentrate and ask again',
    'Don\'t count on it',
    'My reply is no',
    'My sources say no',
    'Outlook not so good',
    'Very doubtful'
]

const fatwords = [
    'FAT',
    'FAT PIGEON',
    'ATTACK PIGEON',
    'who rikth?',
]


function gotMessage(msg) {
    const index = Math.floor(Math.random() * eightball.length);
    const index1 = Math.floor(Math.random() * fatwords.length);
    let message = msg.content.toLowerCase()
        if (msg.content === 't!help') {
        msg.reply('Functions = 8ball, t!ping');
    }
    if (message.includes('test')) {
        msg.reply('dont worry, your net is working...');
    }
    if (message.includes('some') && msg.author != '858413343089492009') {
        msg.channel.send('OHHHHHHH SOME REFERENCE');
    }
    if (message.includes('shame') && msg.author != '858413343089492009') {
        msg.channel.send('no shaming nothing doing im not doing anyhting im sleeping');
    }
    if (message.includes('8ball')) {
        msg.reply(eightball[index]);
        }
    if (msg.content === '!DEBUGMESSAGE1' && msg.author != '858413343089492009') {
        msg.channel.send(message);
    }
    if (msg.content === 't!ping') {
        msg.channel.send('pong');
    }
    if (message.includes('full on') && msg.author != '858413343089492009') {
        msg.channel.send('ayy half some');
    }
    if (message.includes === 'ennada shaniyane onnu vecchena eppudi irkum teriyamo' && msg.author != '858413343089492009') {
        msg.channel.send(msg.content);
    }
    if (message.includes('khankir pola khushi thak ja paisos ota niya') && msg.author != '858413343089492009') {
        msg.channel.send(msg.content);
    }
    if (message.includes('ay') && message.includes('megaeonise') && msg.author != '858413343089492009') {
        msg.channel.send('ay megaeonise');
    }
    if (message.includes('fat') && msg.author != '858413343089492009') {
        msg.channel.send(fatwords[index1]);
    }
}

