// Script para Rolagem Suave
document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todos os links que começam com '#'
    const links = document.querySelectorAll('a[href^="#"]');
    
    for (const link of links) {
        link.addEventListener('click', function(e) {
            // Previne o comportamento padrão de "pular" para a âncora
            e.preventDefault();
            
            // Pega o ID do alvo (ex: '#features')
            const targetId = this.getAttribute('href');
            
            // Se o alvo for apenas '#', volta para o topo
            if (targetId === '#') {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
                return;
            }

            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Rola suavemente até o elemento
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }
});