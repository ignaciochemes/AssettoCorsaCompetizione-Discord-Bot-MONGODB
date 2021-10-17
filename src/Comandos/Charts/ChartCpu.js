const { MessageAttachment } = require('discord.js');
const { CanvasRenderService } = require('chartjs-node-canvas');
const { DediStatus } = require('../../complementos/checkDediStatus');

module.exports = {
    name: "cpu",
    aliases: ["cpu"],
    category: "charts",
    description: "Con este comando puedes ver el uso de cpu",
    usage: "!afrt cpu",
    run: async(client, message, args) => {
        let cpuUsage = await DediStatus.cpuUsage();
        const chartCb = (ChartJs) => {};
        const canvas = new CanvasRenderService(width = 800, height = 400, chartCb);
        const data = {
            labels: [
                'USADO',
                'LIBRE'
            ],
            datasets: [{
                label: 'CPU',
                data: [cpuUsage, 100 - cpuUsage],
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)'                ],
                hoverOffset: 4
            }]
        };
        const config = { type: 'doughnut', data: data };
        const image = await canvas.renderToBuffer(config);
        const attachment = new MessageAttachment(image);
        return message.channel.send(`Uso del cpu: \`% ${cpuUsage}\`. Cpu libre: \`% ${100 - cpuUsage}\``, attachment);
    }
}