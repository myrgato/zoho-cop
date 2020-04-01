const Discord = require('discord.js');
const got = require('got');

const client = new Discord.Client();
client.login('Njk0OTczMjQ1Mjg3NDMyMjIy.XoTdyw.qzqPZgiJKhb6rpkryAKM617skvM');

client.on('ready', () => {
  console.log('The bot is up!');
  const { guilds } = client;
  const GUILD = guilds.cache.find(guild => guild.id === serversId[Server.WEFIT]);
  const { channels } = GUILD;

  const TESTE = channels.cache.find(channel => channel.id === '694979936397557882');
  const myZohoId = '677235755';
  const myId = '';
});

client.on('message', message => {
  if (message.author.bot) return;
  const { guilds } = client;
  const GUILD = guilds.cache.find(guild => guild.id === serversId[Server.WEFIT]);
  const { channels } = GUILD;
  const TESTE = channels.cache.find(channel => channel.id === '694979936397557882');

  if (message === 'hey') TESTE.send('hello!');
})