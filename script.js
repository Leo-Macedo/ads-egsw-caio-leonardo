// ===================================
// 1. Lógica do Modal/Pop-up
// ===================================

const localATrigger = document.getElementById('localA-trigger'); 
const localAModal = document.getElementById('localA-modal');     
const closeModalButton = localAModal.querySelector('.close-button'); 

const openLocalAModal = () => {
    // Remove a classe 'hidden' para exibir o modal
    localAModal.classList.remove('hidden');
}

const closeLocalAModal = () => {
    // Adiciona a classe 'hidden' para ocultar o modal
    localAModal.classList.add('hidden');
}

// Eventos de Abertura e Fechamento
localATrigger.addEventListener('click', openLocalAModal);
closeModalButton.addEventListener('click', closeLocalAModal);

// 4.3. Fechar ao clicar fora do conteúdo do modal (no overlay)
localAModal.addEventListener('click', (event) => {
    if (event.target === localAModal) {
        closeLocalAModal();
    }
});

// 4.4. Fechar ao pressionar a tecla ESC
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !localAModal.classList.contains('hidden')) {
        closeLocalAModal();
    }
});


// ===================================
// 2. Efeito de Cabeçalho Fixo (Sticky Header)
// ===================================
const header = document.querySelector('.main-header');

window.addEventListener('scroll', () => {
    // Adiciona o estilo fixo se a rolagem for maior que 50px
    if (window.scrollY > 50) {
        header.style.position = 'fixed';
        header.style.width = '100%';
        header.style.top = '0';
        header.style.zIndex = '1000';
    } else {
        // Volta ao estilo normal
        header.style.position = 'static'; 
        header.style.zIndex = 'auto';
    }
});