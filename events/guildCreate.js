module.exports = (client, guild) => {
    client.fetchUser(client.config.ownerid[0]).then( user => {
        const embed = new Discord.MessageEmbed()
        .setColor(client.config.embedcolor)
        .setAuthor('Server Joined')
        .addField('Name', `${guild.name}`)
        .addField('ID', `${guild.id}`)
        .addField('Owner', `${guild.owner.user.tag}`)
        .addField('Members', `${guild.memberCount}`);
        user.send({ embed }).catch(console.error);
    });
    client.log.info(`I have been added to the guild: ${guild.name}, owned by: ${guild.owner.user.tag}, with ${guild.memberCount} members.`);

    client.ensure(guild.id, {
        prefix: client.config.prefix,
        logChannel: "",
        welcomeChannel: "",
        welcomeMessage: "Hey {{user}}, Welcome to {{guild}}!"
    })
}
