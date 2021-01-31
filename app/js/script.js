const headerMenu = document.querySelector(".header__toggle");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const hasFadeElems = document.querySelectorAll(".has-fade");
const body = document.querySelector('body');

headerMenu.addEventListener("click", function(){
    header.classList.toggle("open");
    if( header.classList.contains('open')){
        overlay.classList.add('fade-in');
        overlay.classList.remove('fade-out');

        hasFadeElems.forEach(function(elem){
            elem.classList.add('fade-in');
            elem.classList.remove('fade-out');
        });

        body.classList.add("no-scroll");

    }else{
        overlay.classList.add('fade-out');
        overlay.classList.remove('fade-in');

        hasFadeElems.forEach(function(elem){
            elem.classList.add('fade-out');
            elem.classList.remove('fade-in');
        });

        body.classList.remove("no-scroll");
    }
});