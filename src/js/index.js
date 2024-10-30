
  //SECTION IMAGES ROTATION

  const rotateSection = document.getElementById("rotate-section");
  const image = document.getElementById("rotate-image");

  const images = [
    "./src/assets/Img-1.png",
    "./src/assets/Img-2.png",
    "./src/assets/Img-3.png",
    "./src/assets/Img-4.png",
    "./src/assets/Img-5.png",
    "./src/assets/Img-6.png",
    "./src/assets/Img-7.png",
    "./src/assets/Img-8.png",
    "./src/assets/Img-1.png",
  ];

  const totalImages = images.length;

  window.addEventListener("scroll", () => {
    const sectionTop = rotateSection.offsetTop;
    const sectionHeight = rotateSection.offsetHeight;
    const scrollPosition = window.scrollY + window.innerHeight;
    const startScrollPosition = sectionTop + sectionHeight * 0.5;
    const endScrollPosition = sectionTop + sectionHeight * 1.3;

    if (scrollPosition > startScrollPosition && scrollPosition < endScrollPosition) {
        const adjustedProgress = (scrollPosition - startScrollPosition) / (endScrollPosition - startScrollPosition);
        const imageIndex = Math.min(
            Math.floor(adjustedProgress * totalImages),
            totalImages - 1
        );
        image.src = images[imageIndex];
    }
    });