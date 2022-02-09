const Discord = require("discord.js")
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [30211] });
const { MessageEmbed } = require('discord.js'); 

const token = 'BOT TOKEN'
const logChannel = 'CHANNEL TO SEND LOG MESSAGES TP'
const allowedPermisson = 'MANAGE_MESSAGES'
const noPicPermRoleID = 'NO PICTURE PERMISSION ROLE ID' 
const prefix = '?'

client.once('ready', () => {
    console.log(`Ready! Logged in as ${client.user.username}`)
}) 

client.on('messageCreate', (message) => {
    if(message.content.includes(prefix + 'removepicperms') && message.member.permissions.has(allowedPermisson)) { 
        
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
      
        
        let roleadd = message.guild.roles.cache.find(role => role.id == noPicPermRoleID)

        user.roles.add(roleadd) 

        const LogMessage = new MessageEmbed() 
        .setColor('#FFFF00') 
        .setTitle(`Picture Perm Removal`)
        .setDescription(`${user} Picture Perms Removed, Removed by ${message.author.tag}`) 
        
        client.channels.fetch(logChannel)
        .then(channel => channel.send( {embeds: [LogMessage]} ))
		.catch(console.error)
    }

}) 

client.login(token)
