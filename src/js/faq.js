const faqQuestions = document.querySelectorAll(".faq_question");
const animatedElements = document.querySelectorAll('.animate-left, .animate-right');
let lastScrollTop = 0;
let hasBeenVisible = new Set(); // Pour tracker les éléments qui ont déjà été visibles

// Gestion des questions FAQ
faqQuestions.forEach((question) => {
    question.addEventListener("click", () => {
        const answer = question.nextElementSibling;
        answer.style.maxHeight
            ? (answer.style.maxHeight = null)
            : (answer.style.maxHeight = answer.scrollHeight + "px");
        answer.classList.toggle("mt-6");
    });
});

// Fonction pour vérifier si un élément est visible
function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const triggerPoint = windowHeight * 0.75;
    return rect.top <= triggerPoint;
}

// Fonction pour animer les éléments en fonction du scroll
function animateOnScroll() {
    const st = window.pageYOffset || document.documentElement.scrollTop;
    const scrollingDown = st > lastScrollTop;

    animatedElements.forEach(element => {
        const isVisible = isElementInViewport(element);

        if (isVisible) {
            hasBeenVisible.add(element); // Marquer l'élément comme ayant été visible
            element.classList.add('visible');
        } else if (hasBeenVisible.has(element)) { // Ne retirer la classe que si l'élément a déjà été visible
            element.classList.remove('visible');
        }
    });

    lastScrollTop = st <= 0 ? 0 : st;
}

// Écouteur d'événement pour le scroll avec throttling
let ticking = false;
window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            animateOnScroll();
            ticking = false;
        });
        ticking = true;
    }
});

// Vérification initiale au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    animateOnScroll();
});