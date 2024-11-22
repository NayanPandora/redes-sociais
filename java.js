// graficos.js     

import { obterDadosGlobais, titulo, cores } from './importacoesGlobais.js';

document.addEventListener("DOMContentLoaded", async () => {
    const container = document.getElementById("graficos-container");
    const dadosGlobais = await obterDadosGlobais();

    if (dadosGlobais) {
        const ctx = document.createElement("canvas");
        container.appendChild(ctx);
       
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ["Facebook", "Instagram", "Twitter"],
                datasets: [{
                    label: 'Engajamento',
                    data: [
                        dadosGlobais.facebook.engajamento,
                        dadosGlobais.instagram.engajamento,
                        dadosGlobais.twitter.engajamento
                    ],
                    backgroundColor: cores.primaria,
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: titulo
                    }
                }
            },
        });
    }
});
