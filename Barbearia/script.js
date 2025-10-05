document.addEventListener('DOMContentLoaded', function() {
    
    // Selecionando os elementos do modal
    const scheduleButton = document.getElementById('schedule-btn');
    const bookingModal = document.getElementById('booking-modal');
    const closeModalButton = document.getElementById('close-modal-btn');
    const bookingForm = document.getElementById('booking-form');

    // Função para abrir o modal
    function openModal() {
        if (bookingModal) {
            bookingModal.classList.add('active');
        }
    }

    // Função para fechar o modal
    function closeModal() {
        if (bookingModal) {
            bookingModal.classList.remove('active');
        }
    }

    // Adiciona evento de clique para abrir o modal
    if (scheduleButton) {
        scheduleButton.addEventListener('click', function(e) {
            e.preventDefault();
            openModal();
        });
    }

    // Adiciona evento de clique para fechar no botão 'X'
    if (closeModalButton) {
        closeModalButton.addEventListener('click', closeModal);
    }

    // Adiciona evento para fechar clicando fora do modal
    if (bookingModal) {
        bookingModal.addEventListener('click', function(e) {
            // Se o clique foi no overlay (fundo), fecha o modal
            if (e.target === bookingModal) {
                closeModal();
            }
        });
    }

    // Simulação do envio do formulário
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Previne o envio real do formulário
            
            // Pega os valores dos campos
            const name = document.getElementById('name').value;
            const service = document.getElementById('service').value;
            
            alert(`Obrigado, ${name}!\n\nSua solicitação para o serviço de "${service}" foi recebida.\n\nEm um site real, esta informação seria enviada para um servidor. Como este é um projeto de portfólio, estamos simulando o envio.`);
            
            // Limpa o formulário e fecha o modal
            bookingForm.reset();
            closeModal();
        });
    }

    // Inicializa o AOS (animações de scroll)
    AOS.init({
        duration: 800,
        once: false,
    });
});