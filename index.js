//Load and set essentials
const config = require('./config.json');
const Discord = require('discord.js');
const client = new Discord.Client();
const purpleColor = '#aa60ff';



//When a bot ready
client.once('ready', () => {
    console.log(`NAME : ${client.user.username}\nID : ${client.user.id}`);
    client.user.setActivity('p.init'), { type: 'LISTENING' };
});



//Main rutine
client.on('message', message => {
    //Ignore message of bots
    if (message.author.bot) return 0;

    //Init command
    if (message.content === `${config.prefix}init`) {
        var initHelp = new Discord.MessageEmbed()
            .setColor(purpleColor)
            .setTitle('✅ 노래하는 펭귄 초기설정 하기')
            .addField('p.init <채널이름>', '전용 채널을 설정합니다.');
        message.channel.send(initHelp);
    }
    
});



//Login
client.login(config.token);