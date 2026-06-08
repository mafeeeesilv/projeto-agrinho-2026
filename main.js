/* ==========================================================================
   1. CONTROLE DO MENU RESPONSIVO (HAMBÚRGUER)
   ========================================================================== */
document.addEventListener("DOMContentLoaded", function () {
    // Seleciona o botão do menu e a lista de links do HTML
    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");

    // Verifica se os elementos existem na página para evitar erros
    if (menuToggle && navMenu) {
        // Adiciona o evento de clique no botão hambúrguer
        menuToggle.addEventListener("click", function () {
            // Liga/Desliga a classe 'active' que mostra o menu no CSS
            navMenu.classList.toggle("active");
            
            // Efeito visual opcional: Transforma as barras em um 'X'
            menuToggle.classList.toggle("open");
        });

        // Fecha o menu automaticamente quando o usuário clica em um link
        const links = navMenu.querySelectorAll("a");
        links.forEach(link => {
            link.addEventListener("click", function () {
                navMenu.classList.remove("active");
                menuToggle.classList.remove("open");
            });
        });
    }
});


/* ==========================================================================
   2. INTERAÇÃO DO SIMULADOR DE CLIMA E SUSTENTABILIDADE (AGRINHO 2026)
   ========================================================================== */
/**
 * Função fictícia para rodar a simulação do campo do futuro.
 * Pode ser chamada via console para testes ou atrelada a um formulário futuramente.
 * @param {string} clima - 'seco', 'chuvoso' ou 'ideal'
 * @param {string} tecnologia - 'drones', 'sensores' ou 'nenhuma'
 */
function simularPlantio(clima, tecnologia) {
    let resultadoProducao = "";
    let economiaAgua = "";
    let mensagemSustentavel = "";

    // Lógica para determinar o impacto com base nas escolhas do usuário
    if (tecnologia === "sensores" && clima === "seco") {
        resultadoProducao = "Alta! 🌾";
        economiaAgua = "40% de economia.";
        mensagemSustentavel = "Os sensores detectaram a falta de umidade e irrigaram apenas o necessário!";
    } else if (tecnologia === "drones" && clima === "chuvoso") {
        resultadoProducao = "Estável! 🛸";
        economiaAgua = "10% de economia.";
        mensagemSustentavel = "Os drones mapearam as áreas alagadas em tempo real, evitando a perda de nutrientes do solo.";
    } else if (tecnologia === "nenhuma") {
        resultadoProducao = "Baixa a Moderada... ⚠️";
        economiaAgua = "0% (Desperdício detectado).";
        mensagemSustentavel = "Sem tecnologia, o manejo não foi preciso. O campo sofreu com as variações do clima.";
    } else {
        resultadoProducao = "Excelente! 🚀";
        economiaAgua = "25% de economia.";
        mensagemSustentavel = "A combinação ideal de tecnologia com a natureza garante comida na mesa e planeta protegido.";
    }

    // Exibe o resultado no console para testes iniciais dos estudantes
    console.log(`--- SIMULAÇÃO AGRINHO 2026 ---`);
    console.log(`Clima Escolhido: ${clima.toUpperCase()}`);
    console.log(`Tecnologia Aplicada: ${tecnologia.toUpperCase()}`);
    console.log(`Eficiência da Produção: ${resultadoProducao}`);
    console.log(`Uso da Água: ${economiaAgua}`);
    console.log(`Resultado: ${mensagemSustentavel}`);
    console.log(`--------------------------------`);
}

// Mensagem de boas-vindas no console para confirmar que o arquivo carregou com sucesso
console.log("🌱 Arquivo main.js do Agrinho 2026 carregado com sucesso! Pronto para inovar o campo.");