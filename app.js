const paragrafo = document.getElementById("paragrafo-boas-vindas");
const botao = document.getElementById("btn-alterar-texto");

botao.addEventListener("click", () => {
  paragrafo.textContent = "Texto alterado com sucesso via JavaScript!";
});

const inputValor1 = document.getElementById("valor1");
const inputValor2 = document.getElementById("valor2");
const btnSomar = document.getElementById("btn-somar");
const resultadoSoma = document.getElementById("resultado-soma");

btnSomar.addEventListener("click", () => {
  const num1 = parseFloat(inputValor1.value) || 0;
  const num2 = parseFloat(inputValor2.value) || 0;

  resultadoSoma.textContent = num1 + num2;
});
const btnCriarAviso = document.getElementById("btn-criar-aviso");
const containerAvisos = document.getElementById("container-avisos");

btnCriarAviso.addEventListener("click", () => {
 
  const avisoDiv = document.createElement("div");
  avisoDiv.classList.add("aviso-item");

  const textoAlerta = document.createElement("span");
  textoAlerta.textContent = "Atenção: Este é um aviso importante!";

  const btnFechar = document.createElement("button");
  btnFechar.textContent = "X";
  btnFechar.type = "button";

  btnFechar.addEventListener("click", () => {
    avisoDiv.remove();
  });

  avisoDiv.appendChild(textoAlerta);
  avisoDiv.appendChild(btnFechar);
  containerAvisos.appendChild(avisoDiv);
});
const btnToggleTema = document.getElementById("btn-toggle-tema");
const cardModulo4 = document.getElementById("modulo-4");

btnToggleTema.addEventListener("click", () => {
  cardModulo4.classList.toggle("dark-theme");
});

const celulasSituacao = document.getElementsByClassName("situacao");

for (const celula of celulasSituacao) {
  const texto = celula.textContent.trim();

  if (texto === "Concluído") {
    celula.style.color = "#22c55e";
  } else if (texto === "Pendente") {
    celula.style.color = "#ef4444";
  }
}

const painelBotoes = document.getElementById("painel-botoes");
const logBotao = document.getElementById("log-botao");

painelBotoes.addEventListener("click", (event) => {
  if (event.target.nodeName === "BUTTON") {
    logBotao.textContent = `${event.target.textContent} (${event.target.id})`;
  }
});
const caixaDestaque = document.getElementById("caixa-destaque");
const infoAtributo = document.getElementById("info-atributo");

const btnPrioridadeAlta = document.getElementById("btn-prioridade-alta");
const btnPrioridadeBaixa = document.getElementById("btn-prioridade-baixa");
const btnLimparAtributo = document.getElementById("btn-limpar-atributo");

function atualizarStatusAtributo() {
  const valorAtual = caixaDestaque.getAttribute("data-prioridade");
  infoAtributo.textContent = valorAtual !== null ? valorAtual : "Nenhum";
}

btnPrioridadeAlta.addEventListener("click", () => {
  caixaDestaque.setAttribute("data-prioridade", "alta");
  atualizarStatusAtributo();
});


btnPrioridadeBaixa.addEventListener("click", () => {
  caixaDestaque.setAttribute("data-prioridade", "baixa");
  atualizarStatusAtributo();
});

btnLimparAtributo.addEventListener("click", () => {
  caixaDestaque.removeAttribute("data-prioridade");
  atualizarStatusAtributo();
});

const tarefas = [];

const formTarefa = document.getElementById("form-tarefa");
const inputTarefaTitulo = document.getElementById("input-tarefa-titulo");
const listaTarefas = document.getElementById("lista-tarefas");


function render() {
  listaTarefas.innerHTML = "";

  tarefas.forEach((tarefa) => {
    const li = document.createElement("li");
    li.textContent = tarefa.titulo;
    listaTarefas.appendChild(li);
  });
}


formTarefa.addEventListener("submit", (event) => {
  event.preventDefault();

  const titulo = inputTarefaTitulo.value.trim();
  if (titulo === "") return;

  tarefas.push({ titulo });
  inputTarefaTitulo.value = "";
  inputTarefaTitulo.focus();

  render();
});