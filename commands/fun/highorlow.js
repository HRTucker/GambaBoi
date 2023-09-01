const { SlashCommandBuilder, ButtonStyle, ButtonBuilder, ActionRow } = require('discord.js');
//const wait = require('node:timers/promises').setTimeout;

module.exports = {
    category: 'fun',
    cooldown: 5,
    data: new SlashCommandBuilder()
        .setName('hol')
        .setDescription('Play Higher or Lower'),
    async execute(interaction) {
        function getRandomInt(range) {
            return Math.random().toFixed(1) * range;
        }

        const currentNum = getRandomInt(10);

        interaction.reply(`Your number is ${currentNum}`);
    },
};