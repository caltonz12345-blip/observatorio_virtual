const planos = [
  {
    tipo: "seguros",
    titulo: "Seguro Empresarial Coletivo",
    preco: "R$ 89 /mês",
    detalhes: [
      "Cobertura até R$ 500.000",
      "Responsabilidade civil",
      "Equipamentos e estoque"
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
const filterButtons = document.querySelectorAll(".filter");

function renderPlanos(filtro = "todos") {
  planosContainer.innerHTML = "";
  const filtrados = filtro === "todos" ? planos : planos.filter(p => p.tipo === filtro);

  filtrados.forEach(plano => {
    const div = document.createElement("div");
    div.classList.add("plano");
    div.innerHTML = `
      <h3>${plano.titulo}</h3>
      <p class="preco">${plano.preco}</p>
      <ul>${plano.detalhes.map(item => `<li>${item}</li>`).join("")}</ul>
      <button>Participar do Grupo</button>
    `;
    planosContainer.appendChild(div);
  });
}

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelector(".filter.active").classList.remove("active");
    btn.classList.add("active");
    renderPlanos(btn.dataset.filter);
  });
});

renderPlanos();
