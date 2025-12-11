const dataElemento = document.getElementById('dataAtual');

function atualizarData() {
  const agora = new Date();
  const dataFormatada = agora.toLocaleDateString('pt-BR', {
    weekday: 'long',
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  });
  dataElemento.textContent = dataFormatada;
}

atualizarData(); // executa ao carregar
