exports.run = async (client, message, args) => {
    if (message.author.id != client.config.ownerid) return;
    if (!args[0]) {
        return message.channel.send('What would you like me to say?');
    }
    message.channel.send(args.join(' '));
    message.delete();
};

exports.info = {
    name: 'say',
    aliases: ['echo'],
    usage: ["say Hi there!"],
    module: "Owner",
    nsfw: false,
    serverOnly: false,
    ownerOnly: true,
    requires: [],
    botPermissions: ['SEND_MESSAGES'],
    description: "Have me say something based on what you write"
};