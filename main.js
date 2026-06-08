/* ==========================================================================
   1. CONTROLE DO MENU RESPONSIVO (HAMBÚRGUER)
   ========================================================================== */
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");

    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", function () {
            navMenu.classList.toggle("active");
            menuToggle.classList.toggle("open");
        });

        const links = navMenu.querySelectorAll("a");
        links.forEach(link => {
            link.addEventListener("click", function () {
                navMenu.classList.remove("active");
                menuToggle.classList.remove("open");
            });
        });
    }

    /* ==========================================================================
       2. CONEXÃO DA INTERFACE DO SIMULADOR COM A TELA
       ========================================================================== */
    const btnSimular = document.getElementById("btnSimular");
    
    // Verifica se o botão do simulador existe na página antes de aplicar o evento
    if (btnSimular) {
        btnSimular.addEventListener("click", function () {
            // Captura os valores selecionados pelo usuário nas caixas de seleção
            const climaSelecionado = document.getElementById("selectClima").value;
            const tecnologiaSelecionada = document.getElementById("selectTecnologia").value;

            // Elementos da tela que vão mudar de texto
            const txtProducao = document.getElementById("resProducao");
            const txtAgua = document.getElementById("resAgua");
            const txtMensagem = document.getElementById("resMensagem");

            // Variáveis temporárias para guardar os resultados da lógica
            let resultadoProducao = "";
            let economiaAgua = "";
            let mensagemSustentavel = "";

            // Estrutura condicional para calcular o resultado da fazenda do futuro
            if (tecnologiaSelecionada === "sensores" && climaSelecionado === "seco") {
                resultadoProducao = "Alta e Estável! 🌾";
                economiaAgua = "40% de economia de recursos.";
                mensagemSustentavel = "Excelente! Os sensores detectaram a falta de umidade exata nas raízes e ativaram a irrigação gota a gota automaticamente, poupando água potável.";
            } else if (tecnologiaSelecionada === "drones" && climaSelecionado === "chuvoso") {
                resultadoProducao = "Otimizada! 🛸";
                economiaAgua = "15% de economia.";
                mensagemSustentavel = "Sucesso! Os drones mapearam as poças d'água causadas pelo excesso de chuva e a inteligência artificial recalculou os canais de drenagem do solo.";
            } else if (tecnologiaSelecionada === "nenhuma") {
                resultadoProducao = "Baixa a Moderada... ⚠️";
                economiaAgua = "0% (Risco de desperdício ou perda)";
                mensagemSustentavel = "Alerta! Sem monitoramento tecnológico, o manejo manual não acompanhou as variações severas do clima, gerando gastos desnecessários de recursos.";
            } else {
                resultadoProducao = "Máxima Eficiência! 🚀";
                economiaAgua = "25% de economia global.";
                mensagemSustentavel = "Ótimo trabalho! A tecnologia aplicada manteve as plantas saudáveis em harmonia com o meio ambiente.";
            }

            // Injeta as respostas calculadas diretamente nas tags HTML correspondentes
            txtProducao.innerText = resultadoProducao;
            txtAgua.innerText = economiaAgua;
            txtMensagem.innerText = mensagemSustentavel;

            // Adiciona um efeito de piscar suave no painel para indicar que atualizou
            const painel = document.getElementById("resultadoPainel");
            painel.style.opacity = "0.5";
            setTimeout(() => { painel.style.opacity = "1"; }, 150);
        });
    }
});