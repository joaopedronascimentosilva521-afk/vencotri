document.addEventListener('DOMContentLoaded', () => {
    
    // Toggle Menu Mobile
    const menuIcon = document.querySelector('.mobile-menu-icon');
    const navMenu = document.querySelector('.nav-menu');

    menuIcon.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        // Muda o ícone (Hambúrguer para X)
        const icon = menuIcon.querySelector('i');
        if (navMenu.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-xmark');
        } else {
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        }
    });

    // Fecha o menu mobile ao clicar em um link
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            menuIcon.querySelector('i').classList.replace('fa-xmark', 'fa-bars');
        });
    });

    // Simulação de envio do Formulário de Contato
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Evita recarregar a página
            
            // Simula um loading e resposta de sucesso
            const btnSubmit = contactForm.querySelector('button[type="submit"]');
            const originalText = btnSubmit.innerText;
            
            btnSubmit.innerText = 'Enviando...';
            btnSubmit.disabled = true;

            setTimeout(() => {
                alert('Obrigado! Sua mensagem foi enviada. A equipe Vencotri entrará em contato em breve.');
                contactForm.reset();
                btnSubmit.innerText = originalText;
                btnSubmit.disabled = false;
            }, 1500);
        });
    }
});
