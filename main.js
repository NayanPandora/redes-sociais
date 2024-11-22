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

informaçõesGlobais.js

export const titulo = "Relatório das Redes Sociais";
export const autor = "Criado por Rãzão";
export const cores = {
    fundo: "#A5B68D",
    primaria: "#ECDFCC",
    secundaria: "#FCFAEE"
};

const linkRelatorio = "https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json";

export async function obterDadosGlobais() {
    try {
        const resposta = await fetch(linkRelatorio);
        if (!resposta.ok) {
            throw new Error("Erro ao buscar dados");
        }
        const dados = await resposta.json();
        return dados;
    } catch (erro) {
        console.error("Erro ao obter dados globais:", erro);
        return null;
    }
}
