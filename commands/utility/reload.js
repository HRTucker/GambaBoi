const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    category: 'utility',
    cooldown: 20,
    data: new SlashCommandBuilder()
        .setName('reload')
        .setDescription('Reloads Command')
        .addStringOption(option =>
                option.setName('command')
                    .setDescription('The command to be reloaded')
                    .setRequired(true)),
    async execute(interaction) {
        const commandName = interaction.options.getString('command', true).toLowerCase();
        const command = interaction.client.commands.get(commandName);

        if (!command) {
            return interaction.reply(`'${commandName}' is not a command!`);
        }

        delete require.cache[require.resolve(`../${command.category}/${command.data.name}.js`)];

        try {
            interaction.client.commands.delete(command.data.name);
            const newCommand = require(`../${command.category}/${command.data.name}.js`);
            interaction.client.commands.set(newCommand.data.name, newCommand);
            await interaction.reply(`Command \`${newCommand.data.name}\` was reloaded!`);
            console.log(` !! ${command.data.name} was reloaded by ${interaction.user.username}`);
        } catch (error) {
            console.error(error);
            await interaction.reply(`There was an error while reloading a command \`${command.data.name}\`:\n\`${error.message}\``);
        }
    },
};