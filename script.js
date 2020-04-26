(() => {
    const button = document.querySelector(".js-home__nav-mobile-button");
    const menu = document.querySelector(".js-home__nav-menu")

    const toggleClass = () => {
        menu.classList.toggle("home__nav-menu--open");
    };

    button.addEventListener("click", toggleClass);
    menu.addEventListener("click", toggleClass);
})();

    

