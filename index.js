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
    var attach = message.attachments.array();
    var messageToSend = "";
    
    if (message.content.substring(1)){
        messageToSend += message.author.username+" sa "+message.content;
    }
    
    if(attach[0]){
        if(message.content.substring(1)){
            messageToSend += "\n"+attach[0].attachment;
        }else{
            messageToSend = message.author.username+" skickade\n"+attach[0].attachment;
        }
    }

    logChannel.send(messageToSend);
});

bot.on("messageDeleteBulk",(messages)=>{
    messages.forEach(message=>{
        var attach = message.attachments.array();
        var messageToSend = "";
        
        if (message.content.substring(1)){
            messageToSend += message.author.username+" sa "+message.content;
        }
        
        if(attach[0]){
            if(message.content.substring(1)){
                messageToSend += "\n"+attach[0].attachment;
            }else{
                messageToSend = message.author.username+" skickade\n"+attach[0].attachment;
            }
        }

        logChannel.send(messageToSend);
    });
});

bot.login(token);
