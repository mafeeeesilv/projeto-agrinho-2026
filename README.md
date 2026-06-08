# projeto-agrinho-2026
# 🌾 Agrinho 2026 - Agricultura do Amanhã 🚀

Este é um projeto de site completo desenvolvido com foco no tema do **Agrinho 2026**, conectando os pilares da **Tecnologia, Agricultura e Sustentabilidade**. O objetivo principal é demonstrar de forma interativa e visual como a inovação tecnológica no campo pode construir um futuro mais verde e eficiente.

O projeto foi estruturado de forma simples e didática, sendo ideal para o aprendizado de estudantes de programação de níveis iniciante e intermediário.

---

## 🎨 Identidade Visual e Estilo

O site utiliza uma abordagem **Futurista / Cyber-Agro** com um tema predominantemente escuro (*Dark Mode*), fazendo com que as cores de destaque simulem luzes neon e interfaces tecnológicas de monitoramento de campo.

As cores principais foram mapeadas através de variáveis no `:root` do CSS:
* **Cor de Fundo:** Preto Espacial (`#0a0a0c`) - traz o contraste e o clima tecnológico.
* **Cor Principal:** Verde Neon (`#00ff87`) - representa a natureza, a agricultura e o crescimento.
* **Cor Secundária:** Azul Neon (`#00e5ff`) - representa a água, os dados e a tecnologia digital.
* **Cor dos Botões:** Roxo Vibrante (`#7000ff`) - traz o toque futurista de comando e ação.
* **Textos:** Branco (`#ffffff`) e Cinza Claro (`#b3b3b3`) - para garantir máxima leitura.

---

## ⚙️ Funcionalidades do Projeto

O site conta com recursos interativos controlados de forma nativa (sem bibliotecas externas), divididos entre os arquivos do projeto:

### 1. Menu Responsivo (Hambúrguer)
* **Como funciona:** No computador, exibe um menu de navegação fixo com efeito de vidro fosco (*Glassmorphism*). Em telas menores (celulares e tablets), o menu se recolhe automaticamente em um botão de três barras (hambúrguer).
* **Tecnologia:** O CSS oculta o menu em telas pequenas usando `@media queries` e o JavaScript (`main.js`) gerencia a abertura/fechamento alternando a classe `.active` com `classList.toggle`.

### 2. Navegação com Rolagem Suave
* **Como funciona:** Ao clicar nos links do menu (Home, Introdução, Tecnologia, etc.), a página desliza suavemente até a seção desejada, sem saltos bruscos.
* **Tecnologia:** Configurado de forma simples no CSS através da propriedade `scroll-behavior: smooth;`.

### 3. Simulador de Clima e Cultivo Inteligente (Lógica em JS)
* **Como funciona:** Uma ferramenta lógica que simula os impactos reais do uso de tecnologias (como Drones e Sensores) em diferentes condições climáticas (como períodos de seca ou chuva).
* **Tecnologia:** No arquivo `main.js`, a função `simularPlantio(clima, tecnologia)` utiliza estruturas condicionais (`if / else if / else`) para calcular o nível de eficiência da produção e a porcentagem de economia de água, exibindo os relatórios detalhados diretamente no console do desenvolvedor.

---

## 📁 Estrutura de Arquivos

```text
├── index.html        # Estrutura semântica e conteúdo das seções do site.
├── style.css         # Estilização futurista, variáveis de cores e responsividade.
└── main.js           # Lógica do menu responsivo e motor do simulador do campo.