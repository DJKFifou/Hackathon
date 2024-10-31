window.addEventListener('scroll', () => {
    const logo = document.getElementById("logo");
    const header = document.querySelector("header");

    if (window.scrollY > (window.innerHeight - 50)) {
        logo.src = './src/assets/logo_egol_black.svg';
    } else {
        logo.src = './src/assets/logo_egol_white.svg';
    }

    if (window.scrollY > (window.innerHeight - 150)) {
        header.classList.add('text-black');
        header.classList.remove('text-white');
    } else {
        header.classList.add('text-white');
        header.classList.remove('text-black');
    }
});

document.getElementById('logo').addEventListener('click', function(event) {
    event.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});