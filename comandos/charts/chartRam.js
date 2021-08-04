const { MessageAttachment } = require('discord.js');
const { CanvasRenderService } = require('chartjs-node-canvas');
const { DediStatus } = require('../../complementos/checkDediStatus');

module.exports = {
    name: "ram",
    aliases: ["ram"],
    category: "charts",
    description: "Con este comando puedes ver el uso de ram",
    usage: "!afrt ram",
    run: async(client, message, args) => {
        let ramUsage = await DediStatus.ramUsage();
        const chartCb = (ChartJs) => {};
        const canvas = new CanvasRenderService(width = 800, height = 400, chartCb);
        const data = {
            labels: [
                'TOTAL',
                'LIBRE',
                'USADO',
            ],
            datasets: [{
                label: 'RAM',
                data: [ramUsage.totalMemMb, ramUsage.totalMemMb - ramUsage.usedMemMb ,ramUsage.usedMemMb],
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 206, 86)',
                ],
                hoverOffset: 4
            }]
        };
        const config = { type: 'doughnut', data: data };
        const image = await canvas.renderToBuffer(config);
        const attachment = new MessageAttachment(image);
        return message.channel.send(`Ram total: \`${Math.round(ramUsage.totalMemMb)} MB\`. Ram libre: \`${Math.round(ramUsage.totalMemMb - ramUsage.usedMemMb)} MB\`. Ram usada: \`${Math.round(ramUsage.usedMemMb)} MB\``, attachment);
    }
}