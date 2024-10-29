document.addEventListener("DOMContentLoaded", function() {

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
        "./src/assets/Img-1.png"
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

    //SECTION LINES

    const section = document.getElementById("lines");
    const scrollLineVertical = document.getElementById("scroll-line-vertical");
    const scrollLineHorizontalLeft = document.getElementById("scroll-line-horizontal-left");
    const scrollLineHorizontalRight = document.getElementById("scroll-line-horizontal-right");

    window.addEventListener("scroll", () => {
        const sectionTop = section.getBoundingClientRect().top + window.scrollY;
        const sectionHeight = section.offsetHeight;
        const sectionWidth = section.offsetWidth;
        const windowScroll = window.scrollY;

        if (windowScroll + window.innerHeight >= sectionTop + (sectionHeight / 2) &&
            windowScroll < sectionTop + sectionHeight) {
            
            const scrollProgress = windowScroll - sectionTop + (sectionHeight / 2);

            const progress = Math.min(scrollProgress / (sectionHeight / 2), 1);

            scrollLineVertical.style.height = `${progress * sectionHeight}px`;
            scrollLineHorizontalLeft.style.width = `${progress * sectionWidth}px`;
            scrollLineHorizontalRight.style.width = `${progress * sectionWidth}px`;
        } else {
            scrollLineVertical.style.height = `0px`;
            scrollLineHorizontalRight.style.width = `0px`;
        }
    });

    //SECTION VIDEO

    const video = document.getElementById('myVideo');
    let lastScrollTop = 0;
    let isVideoReady = false;

    video.addEventListener('canplaythrough', () => {
        isVideoReady = true;
    });

    window.addEventListener('scroll', () => {
        if (!isVideoReady) return;

        const scrollTop = window.scrollY;
        let delta = scrollTop - lastScrollTop;
        lastScrollTop = scrollTop;
      
        const secondsToAdd = delta * 0.01;
        console.log('secondsToAdd', secondsToAdd);
        
        let newTime = video.currentTime + secondsToAdd;
        if (!isNaN(newTime) && newTime >= 0 && newTime <= video.duration) {
            video.currentTime = newTime;
        }
    });

    //SECTION FOOTER

    const footerContainer = document.getElementById('footer-container');
    const lastSection = document.getElementById('lastSection');

    function updateFooterHeight() {
        const lastSectionHeight = lastSection.offsetHeight;

        footerContainer.style.height = `${lastSectionHeight}px`;
        footerContainer.style.marginTop = `-${lastSectionHeight}px`;

        footerContainer.style.setProperty("--before-height", `${lastSectionHeight}px`);
        console.log('lastSectionHeight', lastSectionHeight);
        console.log('footerContainer', footerContainer);
    }

    window.addEventListener('load', updateFooterHeight);
    window.addEventListener('resize', updateFooterHeight);

});