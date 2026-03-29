const botoes = [
    { id: "Inicial", link:"index.html"},
    { id: "Tabela", link: "segundapagina.html"},
    { id: "Era1", link: "windows1-2-3.html" },
    { id: "Era2", link: "windows95-98.html" },
    { id: "Era3", link: "windowsXP-Vista-7.html" },
    { id: "Era4", link: "windows8-8_1.html" },
    { id: "Era5", link: "windows10-11.html" }
];

botoes.forEach(botao => {
    const el = document.getElementById(botao.id);
    if (el) {
        el.addEventListener("click", () => {
            window.location.href = `./${botao.link}`;
        });
    }
});