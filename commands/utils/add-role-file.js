const Discord = require('discord.js');
const fs = require('fs');

module.exports = {
    name: "add-role-file",
    description: "ボットに読み込まれてる名簿ファイル全員に指定されたロールを与えるよ",
    execute(message, args){
        const role = message.guild.roles.cache.find(role => role.name === args[0]);
        
        const data = fs.readfilesync('meibo.csv');

        var username= new Array();
        for(const elem of data){
            const member =client.users.fetch(elem);
            member.add.roles(role);
            //send ans in embed.
            username.push(member.name);
        }
        const embed = new Discord.MessageEmbed()
            .setTitle('ロールを付与しました')
            .addField( 'ロール', `${role.name}`)
            .addField('名前', `${username.join(',')}`);
    },

}