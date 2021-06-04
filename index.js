const client = require("discord.js");
const bot = new client.Client();
const token = "NzQ3NzYxNzk0MzQwMjI1MDc0.X0TlcA.aWuSWHAOvEXMgRgi33ef7-enlCE";
var logChannel;

bot.on("ready",()=>{
    console.log("ready");
    logChannel = bot.channels.cache.get("755046816919322774");
});

bot.on("message",message=>{
    var member = message.member;
    if(member.id == "756829876178255913" || member.id == "400458098612895755"){
        if(message.content.startsWith("delete ")){
            var number = Number(message.content.split(" ")[1]);
            if (number){
                message.channel.bulkDelete(number+1);
            }
        }
    }
});

bot.on("messageDelete",message=>{
    logChannel.send(message.author.username+" sa "+message.content);
});

bot.on("messageDeleteBulk",(messages)=>{
    messages.forEach(message=>{
        logChannel.send(message.author.username+" sa "+message.content);
    });
});

bot.login(token);