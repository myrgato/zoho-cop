const Discord = require('discord.js');
const got = require('got');

const client = new Discord.Client();
client.login('Njk0OTczMjQ1Mjg3NDMyMjIy.XoTdyw.qzqPZgiJKhb6rpkryAKM617skvM');

client.on('ready', () => {
  console.log('The bot is up!');
  const { guilds } = client;
  const GUILD = guilds.cache.find(guild => guild.id === '233631043851124736');
  const { channels } = GUILD;

  const TESTE = channels.cache.find(channel => channel.id === '694979936397557882');
  const myZohoId = '666269802';
  const myId = '140462634272030721';


  const MOCK = {
    '450299000003944141': {
      '694469826': 90
    },
    '450299000002868011': {
      '666269220': 960,
      '666269802': 960
    },
    '450299000002725367': { 
      '588380192': 240,
      '670086224': 180,
      '684801087': 660,
      '695658568': 840,
      '700710023': 870 
    },
    '450299000002510011': {
      '25440764': 90,
      '588380192': 60,
      '670086224': 240,
      '684801087': 120,
      '686913048': 180,
      '700710023': 90,
      '711478147': 180
    }
  }

  const SECONDS = MOCK.map(project => Object.keys(project).filter(key => key === myZohoId));
  console.log('seconds', { seconds });
});

client.on('message', message => {
  if (message.author.bot) return;
  const { guilds } = client;
  const GUILD = guilds.cache.find(guild => guild.id === '233631043851124736');
  const { channels } = GUILD;
  const TESTE = channels.cache.find(channel => channel.id === '694979936397557882');
  console.log('message', { message });
  if (message === 'hey') TESTE.send('hello!');
})