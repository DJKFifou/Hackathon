// const section = document.getElementById("lines");
// const scrollLineVertical = document.getElementById("scroll-line-vertical");
// const scrollLineHorizontalLeft = document.getElementById("scroll-line-horizontal-left");
// const scrollLineHorizontalRight = document.getElementById("scroll-line-horizontal-right");

// window.addEventListener("scroll", () => {
//     const sectionTop = section.getBoundingClientRect().top + window.scrollY;
//     const sectionHeight = section.offsetHeight;
//     const sectionWidth = section.offsetWidth;
//     const windowScroll = window.scrollY;

//     if (windowScroll + window.innerHeight >= sectionTop + (sectionHeight / 2) &&
//         windowScroll < sectionTop + sectionHeight) {
        
//         const scrollProgress = windowScroll - sectionTop + (sectionHeight / 2);

//         const progress = Math.min(scrollProgress / (sectionHeight / 2), 1);

//         scrollLineVertical.style.height = `${progress * sectionHeight}px`;
//         scrollLineHorizontalLeft.style.width = `${progress * sectionWidth}px`;
//         scrollLineHorizontalRight.style.width = `${progress * sectionWidth}px`;
//     } else {
//         scrollLineVertical.style.height = `0px`;
//         scrollLineHorizontalRight.style.width = `0px`;
//     }
// });