const { MessageAttachment } = require('discord.js');
const { CanvasRenderService } = require('chartjs-node-canvas');
const { DediStatus } = require('../../complementos/checkDediStatus');

module.exports = {
    name: "netstat",
    aliases: ["netstat"],
    category: "charts",
    description: "Con este comando puedes ver el uso de network",
    usage: "!afrt netstat",
    run: async(client, message, args) => {
        let netUsage = await DediStatus.netUsage();
        const chartCb = (ChartJs) => {};
        const canvas = new CanvasRenderService(width = 800, height = 400, chartCb);
        const data = {
            labels: [
                'IN',
                'OUT'
            ],
            datasets: [{
                label: 'NETSTATS',
                data: [netUsage.total.inputMb * 8, netUsage.total.outputMb * 8],
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)'                ],
                hoverOffset: 4
            }]
        };
        const config = { type: 'doughnut', data: data };
        const image = await canvas.renderToBuffer(config);
        const attachment = new MessageAttachment(image);
        return message.channel.send(`Download: \`${netUsage.total.inputMb * 8} Mbps\`. Upload: \`${netUsage.total.outputMb * 8} Mbps\``, attachment);
    }
}