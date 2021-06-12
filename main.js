window.addEventListener(scroll, function (){
    var header1 = document.querySelector("nav");
    header1.classList.oggle(".sticky",window.scrollY < 0);
})