const { EmbedBuilder, SlashCommandBuilder, ActionRowBuilder, SelectMenuBuilder, messageLink } = require('discord.js');
const { Pistas } = require('../Constants/PistasConstants');
const { TiemposTabla } = require('../Complementos/TiemposTablas');
const { TextConstants } = require('../Constants/TextConstants');
const { GeneralConstants } = require('../Constants/GeneralConstants');
const { MsToSegundos } = require('../Utils/Resultados/MsToSegundos');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('tiempos')
        .setDescription('Muestra los tiempos de los jugadores de la pista seleccionada')
        .addStringOption(option =>
            option.setName('categoria')
                .setDescription('Gt3 o Gt4')
                .setRequired(true)
                .addChoices(
                    { name: 'GT3', value: 'gt3' },
                    { name: 'GT4', value: 'gt4' },
                ))
        .addStringOption(option =>
            option.setName('pista')
                .setDescription('Pista a mostrar')
                .setRequired(true)
                .addChoices(
                    ...Pistas.pistas.map(pista => ({ name: pista, value: pista })),
                )),
    async execute(interaction) {
        const options = interaction.options._hoistedOptions;
        const categoria = options[0].value;
        const pista = options[1].value;
        const tiempos = await TiemposTabla.getTiempos(pista, categoria.toUpperCase());
        if (tiempos === false) return interaction.reply(TextConstants.TABLA_ERROR_PISTA);
        if (!tiempos[0]) return interaction.reply(TextConstants.TABLA_NO_TIEMPOS);
        const bestLapForTrack = tiempos[0].bestLapNum;
        const embed = new EmbedBuilder()
            .setTitle('AFRT Leaderboard')
            .setDescription(`${pista} - ${categoria}`)
            .setColor(GeneralConstants.DEFAULT_COLOR)
            .setFooter({ text: GeneralConstants.DEFAULT_FOOTER });
            tiempos.forEach(tiempo => {
                embed.addFields(
                    { 
                        name: `${tiempo.nombre} ${tiempo.apellido}`, 
                        value: `- Tiempo: \`${tiempo.bestLap}\` || Gap: \`+ ${MsToSegundos.msToSegundos(tiempo.bestLapNum - bestLapForTrack)}\`
                        - S1 \`${tiempo.splitUno}\` S2 \`${tiempo.splitDos}\` S3 \`${tiempo.splitTres}\`
                        - Coche: \`${tiempo.coche}\`
                        - Fecha: \`${tiempo.fecha}\``
                    },
                )
            })
        return interaction.reply({ embeds: [embed] });
    }

}