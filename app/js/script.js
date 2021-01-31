const headerMenu = document.querySelector(".header__menu");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay")

headerMenu.addEventListener("click", function(){
    header.classList.toggle("open");
    if( header.classList.contains('open')){
        overlay.classList.add('fade-in');
        overlay.classList.remove('fade-out');
    }else{
        overlay.classList.add('fade-out');
        overlay.classList.remove('fade-in');
    }
});