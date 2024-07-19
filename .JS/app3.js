// Selecionando os elementos da página
const sizeOptions = document.querySelectorAll('.size .option');
const selectedSize = document.querySelector('.size .option.selected');

// Adicionando o evento de clique para as opções de tamanho
sizeOptions.forEach(option => {
  option.addEventListener('click', () => {
    // Removendo a classe 'selected' da opção atual
    selectedSize.classList.remove('selected');

    // Adicionando a classe 'selected' à opção clicada
    option.classList.add('selected');

    // Atualizando o elemento 'selectedSize' para a opção clicada
    selectedSize = option;
  });
});

// Função para animar o piscar
function blink() {
  // Selecionando o elemento a ser animado
  const element = document.querySelector('.product .image');

  // Alterando a opacidade do elemento para 0,5 e depois para 1
  element.style.opacity = 0.5;
  setTimeout(() => {
    element.style.opacity = 1;
  }, 1500);

  // Chamando a função 'blink' novamente após 3 segundos
  setTimeout(blink, 3000);
}

// Iniciando a animação
blink();



// Função para salvar o estado da seleção de cores no localStorage
function saveColorSelection(color) {
  localStorage.setItem('selectedColor', color);
}

// Função para recuperar o estado da seleção de cores do localStorage
function loadColorSelection() {
  return localStorage.getItem('selectedColor');
}

// Adicionando o evento de clique para as opções de cores
colorOptions.forEach(option => {
  option.addEventListener('click', () => {
    // Salvar o estado da seleção de cores
    saveColorSelection(option.dataset.color);

    // Atualizar o estado da seleção de cores em outras páginas ou componentes
    // (usando localStorage, cookies ou outras técnicas)
  });
});

// Carregando o estado da seleção de cores do localStorage
const selectedColor = loadColorSelection();

// Atualizando a seleção de cores na página atual
if (selectedColor) {
  // Encontrar a opção de cor correspondente
  const colorOption = document.querySelector(`.color .option[data-color="${selectedColor}"]`);

  // Adicionar a classe 'selected' à opção de cor correspondente
  colorOption.classList.add('selected');
}

