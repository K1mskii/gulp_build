document.addEventListener('DOMContentLoaded', () => {
    // Burger menu
    const burger = document.querySelector('.burger');
    const menuBody = document.querySelector('.menu__nav');
    if(burger) {
        burger.addEventListener("click", function(e) {
            document.body.classList.toggle('_lock');
            burger.classList.toggle('_active');
            menuBody.classList.toggle('_active');
        })
    }

    // Закрытие меню при клике
    const menuLinks = document.querySelectorAll('.menu__link');
    
    if(menuLinks.length > 0) {
        menuLinks.forEach(menuLink => {
            menuLink.addEventListener("click", onMenuLinkClick);
        });

        function onMenuLinkClick(e) {
            const menuLink = e.target;
            if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
                const gotoBlock = document.querySelector(menuLink.dataset.goto);
                const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

                // Закрытие меню при клике X
                if(burger.classList.contains('_active')) {
                    document.body.classList.remove('_lock');
                    burger.classList.remove('_active');
                    menuBody.classList.remove('_active');
                }
            }
        }
    }
})