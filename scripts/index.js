const planos = [
  {
    tipo: "Media Salarial",
    id: "mapa1",
    titulo: "Mapa Media Salarial",
    ref: "mapas/mapa_capitais.html",
    detalhes: [
      "Visualização interativa",
      "Média salarial por capital"
    ]
  },
  {
    tipo: "consorcios",
    titulo: "Consórcio de Equipamentos",
    preco: "R$ 280 /mês",
    detalhes: [
      "Crédito: R$ 25.000",
      "Sem juros",
      "Adquira equipamentos para seu negócio"
    ]
  },
  {
    tipo: "servicos",
    titulo: "Contabilidade Coletiva",
    preco: "R$ 120 /mês",
    detalhes: [
      "Escrituração completa",
      "Declarações obrigatórias",
      "Suporte especializado"
    ]
  },
  {
    tipo: "compras",
    titulo: "Compra Coletiva - Embalagens",
    preco: "R$ 0,45 /unidade",
    detalhes: [
      "Mínimo: 1.000 unidades",
      "Personalização incluída",
      "Entrega em 15 dias"
    ]
  }
];

const planosContainer = document.getElementById("planos");

function renderPlanos() {
  planosContainer.innerHTML = "";

  planos.forEach(plano => {
    const div = document.createElement("div");
    div.classList.add("plano");
    div.innerHTML = `
      <h3>${plano.titulo}</h3>
      <ul>${plano.detalhes.map(item => `<li>${item}</li>`).join("")}</ul>
      <button onclick="window.location.href='${plano.ref || "#"}'">Participar do Grupo</button>
    `;
    planosContainer.appendChild(div);
  });
}


renderPlanos();
