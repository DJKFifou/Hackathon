const faqQuestions = document.querySelectorAll(".faq_question");
const animatedElements = document.querySelectorAll('.animate-left, .animate-right');
let lastScrollTop = 0;
let hasBeenVisible = new Set();

faqQuestions.forEach((question) => {
    question.addEventListener("click", () => {
        const answer = question.nextElementSibling;
        answer.style.maxHeight
            ? (answer.style.maxHeight = null)
            : (answer.style.maxHeight = answer.scrollHeight + "px");
        answer.classList.toggle("mt-6");
    });
});

function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const triggerPoint = windowHeight * 0.75;
    return rect.top <= triggerPoint;
}

function animateOnScroll() {
    const st = window.pageYOffset || document.documentElement.scrollTop;
    const scrollingDown = st > lastScrollTop;

    animatedElements.forEach(element => {
        const isVisible = isElementInViewport(element);

        if (isVisible) {
            hasBeenVisible.add(element);
            element.classList.add('visible');
        } else if (hasBeenVisible.has(element)) {
            element.classList.remove('visible');
        }
    });

    lastScrollTop = st <= 0 ? 0 : st;
}

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

document.addEventListener('DOMContentLoaded', () => {
    animateOnScroll();
});