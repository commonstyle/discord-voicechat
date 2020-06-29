//Load and set essentials
const config = require("./config.json");
const Discord = require("discord.js");
const client = new Discord.Client();
const purpleColor = "#aa60ff";



//When a bot ready
client.once("ready", () => {
    console.log(`NAME : ${client.user.username}\nID : ${client.user.id}`);
    client.user.setActivity("p.init"), { type: "LISTENING" };
});



//Main rutine
client.on("message", message => {
    //Ignore message of bots
    if (message.author.bot) return 0;

    //Init command
    if (message.content.startsWith(`${config.prefix}init`)) {

        var arg = [message.content.substr(0, `${config.prefix}init`.length), message.content.substr(`${config.prefix}init`.length)];

        if (!arg[1]) {  //Send help message if there is no arguments

            var initHelp = new Discord.MessageEmbed()
                .setColor(purpleColor)
                .setTitle("❗ 노래듣는 펭귄 초기설정 하기")
                .addField("p.init <채널이름>", "전용 채널을 설정합니다.");

            message.channel.send(initHelp);

        } else {    //Make a channel then alarm

            message.guild.channels.create(arg[1], { type: "text" });

            var alertDone = new Discord.MessageEmbed()
                .setColor(purpleColor)
                .setTitle("✅ 채널 생성 완료!")
                .setDescription(`${arg[1]}라는 이름의 채널을 만들었습니다.`);

            message.channel.send(alertDone);
        }
    }
});



//Login
client.login(config.token);
