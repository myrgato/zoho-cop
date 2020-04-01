const Discord = require("discord.js");

const client = new Discord.Client();
client.login('Njk0OTczMjQ1Mjg3NDMyMjIy.XoTdyw.qzqPZgiJKhb6rpkryAKM617skvM');

client.on('ready', () => {
  console.log('The bot is up!');
  // const { guilds } = client;
  // const wefit = guilds.cache.find(guild => guild.id === serversId[Server.WEFIT]);
  // const { channels } = wefit;

  // const daily = channels.cache.find(channel => channel.id === channelsId[Channel.DAILY]);
  // startDailyDelegatesJobOnChannel(wefit);
  // startDailyJobOnChannel(daily);

  // const general = channels.cache.find(channel => channel.id === channelsId[Channel.GENERAL]);
  // startZohoJobOnChannel(general);
});