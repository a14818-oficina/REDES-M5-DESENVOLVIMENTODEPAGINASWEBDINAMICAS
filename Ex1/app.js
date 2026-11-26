const evento = {
  nome: "Web Summit 2026",
  cidade: "Lisboa, Portugal",
  mensagem: "Bem-vindo ao futuro da tecnologia!",
  nomeautor: "Tao Zhang",
  cargo: "Co-founder & CPO Manus AI",
  tema: "Tao Zhang é cofundador e diretor de produto (CPO) da Manus, o agente de inteligência artificial que causou sensação no mundo da tecnologia em 2025."
};


const botao = document.querySelector("#atualizar");


botao.addEventListener("click", () => {
  document.querySelector("#titulo").textContent =
    evento.nome;


  document.querySelector("#local").textContent =
    evento.cidade;


  document.querySelector("#mensagem").textContent =
    evento.mensagem;


  document.querySelector("#nomeautor").textContent =
  evento.nomeautor;
  document.querySelector("#cargo").textContent =
  evento.cargo;
  document.querySelector("#tema").textContent =
  evento.tema;
});