(function(){
    var $btnMenu = document.querySelector('.menu__btn');
    var $btnClose = document.querySelector('.menu__close');
    var $menu = document.querySelector('.header');

    $btnMenu.addEventListener('click', openOrClose);

    $btnClose.addEventListener('click', openOrClose);

    function openOrClose() {
        $menu.classList.toggle('open');
    }

})();