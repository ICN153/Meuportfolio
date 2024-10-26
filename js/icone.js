const themeIcon = document.getElementById('theme-icon'); // Ícone de modo claro
const lightIcon = document.getElementById('light-icon'); // Ícone de modo escuro
const body = document.body;

// Carrega o tema salvo do localStorage e aplica
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  body.classList.add(savedTheme);
  
  // Ajusta os ícones com base no tema salvo
  if (savedTheme === 'dark-theme') {
    themeIcon.classList.add('hidden'); // Esconde o ícone de modo claro
    lightIcon.classList.remove('hidden'); // Mostra o ícone de modo escuro
  } else {
    themeIcon.classList.remove('hidden'); // Mostra o ícone de modo claro
    lightIcon.classList.add('hidden'); // Esconde o ícone de modo escuro
  }
}

// Verifica se os ícones existem antes de adicionar o evento
if (themeIcon && lightIcon) {
  // Evento para alternar para modo escuro
  themeIcon.addEventListener('click', function() {
    body.classList.remove('light-theme');
    body.classList.add('dark-theme');
    localStorage.setItem('theme', 'dark-theme');
    themeIcon.classList.add('hidden');
    lightIcon.classList.remove('hidden');
  });

  // Evento para alternar para modo claro
  lightIcon.addEventListener('click', function() {
    body.classList.remove('dark-theme');
    body.classList.add('light-theme');
    localStorage.setItem('theme', 'light-theme');
    themeIcon.classList.remove('hidden');
    lightIcon.classList.add('hidden');
  });
}
