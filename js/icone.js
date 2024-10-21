const themeIcon = document.getElementById('theme-icon'); // Ícone de modo claro
const lightIcon = document.getElementById('light-icon'); // Ícone de modo escuro
const body = document.body;

// Verifica se há um tema salvo no localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  body.classList.add(savedTheme);
  
  // Verifica qual tema está ativo e ajusta os ícones
  if (savedTheme === 'dark-theme') {
    themeIcon.classList.add('hidden'); // Esconde o ícone de modo claro
    lightIcon.classList.remove('hidden'); // Mostra o ícone de modo escuro
  } else {
    themeIcon.classList.remove('hidden'); // Mostra o ícone de modo claro
    lightIcon.classList.add('hidden'); // Esconde o ícone de modo escuro
  }
}

// Adiciona o evento de clique ao ícone
themeIcon.addEventListener('click', function() {
  // Alterna entre o tema claro e escuro
  if (body.classList.contains('light-theme')) {
    body.classList.remove('light-theme');
    body.classList.add('dark-theme');
    localStorage.setItem('theme', 'dark-theme'); // Salva o tema atual
    themeIcon.classList.add('hidden'); // Esconde o ícone de modo claro
    lightIcon.classList.remove('hidden'); // Mostra o ícone de modo escuro
  } else {
    body.classList.remove('dark-theme');
    body.classList.add('light-theme');
    localStorage.setItem('theme', 'light-theme'); // Salva o tema atual
    themeIcon.classList.remove('hidden'); // Mostra o ícone de modo claro
    lightIcon.classList.add('hidden'); // Esconde o ícone de modo escuro
  }
});

// Adiciona o evento de clique ao ícone de modo escuro
lightIcon.addEventListener('click', function() {
  body.classList.remove('dark-theme');
  body.classList.add('light-theme');
  localStorage.setItem('theme', 'light-theme'); // Salva o tema atual
  themeIcon.classList.remove('hidden'); // Mostra o ícone de modo claro
  lightIcon.classList.add('hidden'); // Esconde o ícone de modo escuro
});
