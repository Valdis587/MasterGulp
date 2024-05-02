document.addEventListener('DOMContentLoaded', ()=>{ 
    if(window.innerWidth < 960) {
    var mobMenuOpen = document.querySelector('.header__mob-menu');
    var mobMenuClose = document.querySelector('.header__mob-menu-close');
    var mobPanel = document.querySelector('.header__menu-nav');
    mobMenuOpen.onclick=function() {
    mobPanel.classList.add('menu-nav-open');
    }
    mobMenuClose.onclick=function() {
       mobPanel.classList.remove('menu-nav-open');
    }
}
});