class InteractionHandler {
    interactionCustomId;
    interactionValue;

    constructor(interaction) {
        this.interactionCustomId = interaction.customId;
        this.interactionValue = interaction.values[0];
    }
}

module.exports = { InteractionHandler };