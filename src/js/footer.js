const footerContainer = document.getElementById("footer-container");
const lastSection = document.getElementById("faq");

function updateFooterHeight() {
const lastSectionHeight = lastSection.offsetHeight;

footerContainer.style.height = `${lastSectionHeight}px`;
footerContainer.style.marginTop = `-${lastSectionHeight}px`;

footerContainer.style.setProperty(
    "--before-height",
    `${lastSectionHeight}px`
);
}

window.addEventListener("load", updateFooterHeight);
window.addEventListener("resize", updateFooterHeight);