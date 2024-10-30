const bricksAnimation = document.getElementById("bricksAnimation");
const brick = document.getElementById("brick");

const bricks = [];
for (let i = 1; i <= 100; i++) {
    const imageNumber = String(i).padStart(4, '0');
    bricks.push(`./src/assets/bricksAnimation/${imageNumber}.webp`);
}

const totalBricks = bricks.length;

window.addEventListener("scroll", () => {
    const sectionTop = bricksAnimation.offsetTop;
    const sectionHeight = bricksAnimation.offsetHeight;
    const scrollPosition = window.scrollY + window.innerHeight;
    const startScrollPosition = sectionTop + sectionHeight * 0.5;
    const endScrollPosition = sectionTop + sectionHeight * 1.3;

    if (scrollPosition > startScrollPosition && scrollPosition < endScrollPosition) {
        const adjustedProgress = (scrollPosition - startScrollPosition) / (endScrollPosition - startScrollPosition);
        const imageIndex = Math.min(
            Math.floor(adjustedProgress * totalBricks),
            totalBricks - 1
        );
        brick.src = bricks[imageIndex];
    }
});