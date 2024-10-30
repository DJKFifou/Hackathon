document.addEventListener("DOMContentLoaded", function () {
    const loader = document.querySelector('#loader');
    const video = loader.querySelector("#videoLoader");
    const main = document.querySelector("main");
    const body = document.body;

    video.addEventListener("ended", function () {
        loader.classList.add("opacity-0");
        main.classList.remove("opacity-0");
        main.classList.add("opacity-100");
        body.classList.remove("overflow-hidden");
    });
});