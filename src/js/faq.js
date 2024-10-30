const faqQuestions = document.querySelectorAll(".faq_question");

faqQuestions.forEach((question) => {
    question.addEventListener("click", () => {
        const answer = question.nextElementSibling;
        answer.style.maxHeight
        ? (answer.style.maxHeight = null)
        : (answer.style.maxHeight = answer.scrollHeight + "px");
        answer.classList.toggle("mt-6");
    });
});