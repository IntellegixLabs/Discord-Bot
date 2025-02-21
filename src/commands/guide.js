const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'guide',
    description: 'Sends a guide message to new users.',
    execute(message) {
        const guideEmbed = new MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Welcome to the Server!')
            .setDescription('Here are some guidelines to help you get started:')
            .addFields(
                { name: 'Server Rules', value: '1. Be respectful to everyone.\n2. No spamming.\n3. Follow the channel topics.' },
                { name: 'Getting Started', value: 'Introduce yourself in the #introductions channel and check out the #announcements for updates.' },
                { name: 'Need Help?', value: 'Feel free to ask any questions in the #help channel.' }
            )
            .setFooter('Enjoy your stay!');

        message.channel.send({ embeds: [guideEmbed] });
    },
};