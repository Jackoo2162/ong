const Discord = require('discord.js');
const bot = new Discord.Client();




bot.on('message', message => {
  if (message.content === 'nico nico ni') {
   // message.reply('pong');
    message.channel.sendMessage('annyeong');
  }
});

bot.on("ready", () => {
  bot.user.setPresence({game: {name:"SLEEPING"}})
  console.log('I have jackoo: {SERVERNAME}')
})

bot.on('message', message => {
  if (message.content === 'sorry') {
   // message.reply('pong');
    message.channel.sendMessage('Sorry Sorry Sorry Sorry Sorry Sorry naega naega naega meonjeo nege nege nege bbajyeo bbajyeo bbajyeo beoryeo baby!');
  }
});

bot.on('ready', ()=>{
  console.log(`Logged in as ${bot.user.tag}!`);
  voiceChannel = bot.guilds.find('name', 'DREAMENERG3T1CER').channels.find('name', 'SEONG-WU');
  voiceChannel.join().then(()=>{
      console.log(`Connected to ${voiceChannel.name}!`);
  });
});

// Create an event listener for new guild members
bot.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.find('name', 'general');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`Welcome to the server, ${member}`);
});


bot.login('NDA4MTY4MzUzMTAzMDg1NTY4.DVMQwg.fHS_W7bIA2nKk_oaqWd8w-DgIzo');
