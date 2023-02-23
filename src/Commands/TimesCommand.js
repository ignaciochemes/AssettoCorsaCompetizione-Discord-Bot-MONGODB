const { EmbedBuilder, SlashCommandBuilder, ActionRowBuilder, SelectMenuBuilder, messageLink } = require('discord.js');
const { TextConstants } = require('../Constants/TextConstants');
const { GeneralConstants } = require('../Constants/GeneralConstants');
const { TimesServices } = require('../Services/TimesServices');
const { MsToSeconds } = require('../Utils/Results/MsToSegundos');
const { TracksConstants } = require('../Constants/TrackConstants');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('times')
        .setDescription('Shows the times of the players on the selected court')
        .addStringOption(option =>
            option.setName('category')
                .setDescription('Gt3 or Gt4')
                .setRequired(true)
                .addChoices(
                    { name: 'GT3', value: 'gt3' },
                    { name: 'GT4', value: 'gt4' },
                ))
        .addStringOption(option =>
            option.setName('track')
                .setDescription('Track to filte')
                .setRequired(true)
                .addChoices(
                    ...TracksConstants.tracks.map(track => ({ name: track, value: track })),
                )),
    async execute(interaction) {
        const options = interaction.options._hoistedOptions;
        const clas = options[0].value;
        const track = options[1].value;
        const findTimes = await TimesServices.getTimes(track, clas.toUpperCase());
        if (findTimes === false) return interaction.reply(TextConstants.TABLA_ERROR_PISTA);
        if (!findTimes[0]) return interaction.reply(TextConstants.TABLA_NO_TIEMPOS);
        const bestLapForTrack = findTimes[0].bestLapNum;
        const embed = new EmbedBuilder()
            .setTitle('AFRT Leaderboard')
            .setDescription(`${track} - ${clas}`)
            .setColor(GeneralConstants.DEFAULT_COLOR)
            .setFooter({ text: GeneralConstants.DEFAULT_FOOTER });
        findTimes.forEach(time => {
            embed.addFields(
                {
                    name: `${time.nombre} ${time.apellido}`,
                    value: `- Time: \`${time.bestLap}\` || Gap: \`+ ${MsToSeconds.msToSeconds(time.bestLapNum - bestLapForTrack)}\`
                        - S1 \`${time.splitUno}\` S2 \`${time.splitDos}\` S3 \`${time.splitTres}\`
                        - Car: \`${time.coche}\`
                        - Date: \`${time.fecha}\``
                },
            )
        })
        return interaction.reply({ embeds: [embed] });
    }
}