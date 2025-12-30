// 1. Efeito de Digitação (Typewriter Effect)
const textElement = document.getElementById('typing-text');
const phrases = ["Caos em Ordem.", "Confuso em Simples.", "Básico em Incrível."];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeSpeed = 100;

function typeWriter() {
    const currentPhrase = phrases[phraseIndex];
    
    if (isDeleting) {
        textElement.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        typeSpeed = 50; // Apaga mais rápido
    } else {
        textElement.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
        typeSpeed = 100; // Digita velocidade normal
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
        // Pausa no final da frase antes de apagar
        isDeleting = true;
        typeSpeed = 2000; 
        textElement.style.color = "#8e44ad"; // Cor Roxo quando completa
    } else if (isDeleting && charIndex === 0) {
        // Passa para a próxima frase
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typeSpeed = 500;
        textElement.style.color = "#333"; // Volta a cor normal
    }

    setTimeout(typeWriter, typeSpeed);
}

// Iniciar o efeito de digitação quando carregar
document.addEventListener('DOMContentLoaded', typeWriter);


// 2. Animação de Scroll (Aparecer ao rolar)
const revealElements = document.querySelectorAll('.reveal');

function checkReveal() {
    const triggerBottom = window.innerHeight * 0.85; // Dispara quando 85% da tela mostrar o elemento

    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < triggerBottom) {
            element.classList.add('active');
        }
    });
}

window.addEventListener('scroll', checkReveal);
// Verificar uma vez no início para elementos que já estão na tela
checkReveal();

// 3. Fechar menu mobile ao clicar em um link (Melhoria de UX)
const navLinks = document.querySelectorAll('.nav-link');
const menuToggle = document.getElementById('navbarNav');
const bsCollapse = new bootstrap.Collapse(menuToggle, {toggle: false});

navLinks.forEach((l) => {
    l.addEventListener('click', () => {
        if(menuToggle.classList.contains('show')) {
            bsCollapse.hide();
        }
    })
})