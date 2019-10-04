const Discord = require('discord.js');  //WESO#0001
const client = new Discord.Client();  //WESO#0001
const moment = require('moment');
const zalgo = require('zalgolize');  //WESO#0001
const math = require('math-expression-evaluator');   //WESO#0001 
const figlet = require('figlet');   //WESO#0001
const fs = require('fs');  //WESO#0001
const ms = require('ms');  //WESO#0001
const prefix = '-'
    }
});

client.on('message', message => {
    if (message.content.startsWith(prefix + 'sug')) {
        if (message.author.bot) return
        if (!message.guild) return message.reply('**:x: This Commands Just In Server**').then(v => {v.react('❌')})
        var args =  message.content.split(' ').slice(1).join(' ')
        if (!args) return message.reply('Type You Suggestion').then(c => {c.delete(5000)})
        let Room = message.guild.channels.find(`name`, "suggestions")
        if (!Room) return message.channel.send("Can't find suggestions channel.").then(d => d.react('❌'))
        let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setAuthor(`Vote on ${message.author.username}'s suggestion`, message.author.avatarURL)
       .addField('**Suggestion**',`${args}`)
       .setThumbnail(message.author.avatarURL)
       .setFooter(`ID: ${message.author.id}`)
       Room.sendEmbed(embed).then(c => {
           c.react('✅').then(() =>
               c.react('❌'))
});




client.login(process.env.BOT_TOKEN);
