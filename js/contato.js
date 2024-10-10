(function () {
    emailjs.init("wE9r5arbqqRFojKxL"); // Substitua "seu_user_id" pelo seu User ID do EmailJS
})();

document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o comportamento padrão de recarregar a página

    const serviceID = 'service_is@i@s'; // Substitua pelo seu Service ID
    const templateID = 'template_wqc88d6'; // Substitua pelo seu Template ID

    // Envia o formulário usando o método emailjs.sendForm
    emailjs.sendForm(serviceID, templateID, this)
        .then(function (response) {
            alert('E-mail enviado com sucesso!', response.status, response.text);
        }, function (error) {
            alert('Erro ao enviar o e-mail...', error);
        });
});


// Evento de abrir e fechar a div bar das três barras de navegação.

// console.log('teste de javascript');

//seleção de elementos HTML

var btnMenu = document.querySelector('.btn-menu');
var menuHeader = document.querySelector('.menu-header');
var menuItems = document.querySelectorAll(".menu-header a");

// Alterna o menu ao clicar no botão
btnMenu.addEventListener('click', function(){
    menuHeader.classList.toggle('menu-open');
    btnMenu.classList.toggle('x');
});

// // Fecha o menu e faz scroll suave ao clicar num item
// menuItems.forEach(function(item) {
//     item.addEventListener('click', function(e) {
//         e.preventDefault(); // Evita comportamento padrão dos links

//         // Fecha o menu e remove a classe 'x' do botão
//         menuHeader.classList.remove('menu-open');
//         btnMenu.classList.remove('x');

//         // Scroll suave até à secção correspondente
//         var targetId = this.getAttribute('href'); // Pega o ID da secção
//         var targetSection = document.querySelector(targetId);

//         // Faz o scroll suave até a secção se ela existir
//         if (targetSection) {
//             targetSection.scrollIntoView({ behavior: 'smooth' });
//         }
        
//     });
// });
