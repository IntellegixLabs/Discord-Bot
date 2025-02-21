const { Permissions } = require('discord.js');

module.exports = {
    name: 'ban',
    description: 'Ban a user from the server',
    async execute(message, args) {
        // Check if the user has permission to ban members
        if (!message.member.permissions.has(Permissions.FLAGS.BAN_MEMBERS)) {
            return message.reply("You don't have permission to use this command.");
        }

        // Check if a user ID was provided
        if (!args.length) {
            return message.reply('You need to specify a user ID to ban.');
        }

        const userId = args[0];

        try {
            // Fetch the user and ban them
            const user = await message.guild.members.ban(userId);
            message.channel.send(`Successfully banned ${user.user.tag}`);
        } catch (error) {
            console.error(error);
            message.channel.send('There was an error trying to ban that user. Please make sure the ID is correct and that the user is in the server.');
        }
    },
};