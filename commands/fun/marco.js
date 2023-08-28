const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  category: 'fun',
  cooldown: 5,
  data: new SlashCommandBuilder()
    .setName('marco')
    .setDescription('Replies with Polo!'),
  async execute(interaction) {
    await interaction.reply('Polo!');
  },
};