const { eightball } = require("../util/constants");
const gotMessage = async (msg) => {
  const index = Math.floor(Math.random() * eightball.length);
  //   console.log(msg.content);
  switch (msg.content) {
    case "t!8ball":
      msg.reply(eightball[index]);
      break;
    case "t!exit":
      if (!msg.author.bot) {
        try {
          const author = await msg.guild.members.fetch(msg.author);
          const authorRoles = author.roles.cache;
          //   let close = false;
          authorRoles.forEach(async (value, key, map) => {
            // if (close) {
            //   process.exit(1);
            // }
            if (value.permissions.has("Administrator")) {
              await msg.reply("Shutting down :face_holding_back_tears: ");
              process.exit(1);
              //   console.log(close);
              //   close = true;
            }
          });
          msg.reply("Ask admin");
        } catch (error) {
          msg.channel.send(error);
          console.log(error);
        }
      } else {
        msg.reply("Ask admin");
      }
      break;
  }
};
module.exports = { gotMessage };

///The function which allows the bot to send messages
// function gotMessage(msg) {
//     const index = Math.floor(Math.random() * eightball.length);
//     const index1 = Math.floor(Math.random() * fatwords.length);
//     const index2 = Math.floor(Math.random() * ashfaroth.length);
//     let message = msg.content.toLowerCase()
//     if (msg.author != '858413343089492009' && msg.author != '593359969806712861') {
//         if (msg.content === 't!help') {
//         msg.reply('Functions = 8ball, t!ping');
//         }
//         if (message.includes('test')) {
//         msg.reply('dont worry, your net is working...');
//         }
//         if (message.includes('shame')) {
//         msg.channel.send('no shaming nothing doing im not doing anyhting im sleeping');
//         }
//         if (message.includes('8ball')) {
//             msg.reply(eightball[index]);
//         }
//         if (msg.content === '!DEBUGMESSAGE1') {
//             msg.channel.send(message);
//         }
//         if (msg.content === 't!ping') {
//             msg.channel.send('pong');
//         }
//         if (message.includes('full on')) {
//             msg.channel.send('ayy half some');
//         }
//         if (message.includes('chib')) {
//             msg.channel.send('fuck those commands');
//         }
//         if (message.includes('ennada shaniyane onnu vecchena eppudi irkum teriyamo')) {
//             msg.channel.send(msg.content);
//         }
//         if (message.includes('khankir pola khushi thak ja paisos ota niya')) {
//             msg.channel.send(msg.content);
//         }
//         if (((message.includes('ay') && message.includes('megaeonise')) || message.includes('<@!858413343089492009>') || message.includes('<@!190756291558375424>'))) {
//             msg.channel.send('ay megaeonise');
//         }
//         if ((message.includes('thank you') || message.includes('thanks'))) {
//             msg.channel.send('think nothing of it');
//         }
//         if (msg.content === 'FAT' || msg.content === 'fat') {
//             msg.channel.send(fatwords[index1]);
//         }
//         if (message.includes('too many')) {
//             msg.channel.send('The Big Gete Star allowed me to cheat death, how could this be?');
//         }
//         if ((message.includes('brb') || message.includes('come in a bit') || message.includes('back in a bit'))) {
//             msg.channel.send('Who are you right now');
//         }
//         if ((message.includes('are you ready') || message.includes('ok im coming'))) {
//             msg.channel.send('https://cdn.discordapp.com/attachments/713289795962535957/860181227860656158/Screenshot_2019-12-19-14-36-53-1.png');
//         }//kept
//         if (message.includes('which') && message.includes('are') && message.includes('you')) {
//             msg.channel.send('hey which one are you');
//         }
//         if ((msg.content === 'deserved')) {
//             msg.channel.send('nothingggggggggggggggggggggggggggggggg');
//         }
//         if (message.includes('bhalu') || message.includes('janwar')) {
//             msg.channel.send(ashfaroth[index2]);
//         }
//         if ((message.includes('baal'))) {
//             msg.channel.send('https://cdn.discordapp.com/attachments/777823278567915522/863454029359349780/unknown.png');
//         }
//         if (msg.content === 't!exit') {
//             msg.reply('Ask megaeonise');
//         }
//         if (msg.content === 't!exit' && msg.author == '190756291558375424') {
//             msg.channel.send('turning off')
//             process.exit(1);
//         }
//     }
// }
