
const btnMenu = document.querySelector('.btn-menu');
const menuHeader = document.querySelector('.menu-header');
const menuLinks = document.querySelectorAll('.menu-header a'); // Seleciona todos os links do menu

// Função que alterna o menu
function toggleMenu() {
    console.log("Menu button clicked!");
    menuHeader.classList.toggle('menu-header-open');
    btnMenu.classList.toggle('x');
}

// Função para fechar o menu
function closeMenu() {
    menuHeader.classList.remove('menu-header-open'); // Fecha o menu
    btnMenu.classList.remove('x'); // Reseta o ícone do botão
}

// Adiciona evento de clique ao botão do menu
btnMenu.addEventListener('click', toggleMenu);

// Adiciona evento de clique a cada link do menu
menuLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
});
