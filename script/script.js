function myFunction() {
    var x = document.getElementById("Topnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
function fermer() {
    document.getElementById("warning").style.display="none"
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slidepicture");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}
function setPanels()
{
        var windowWidth = window.innerWidth;
        if(windowWidth < 600)
        {
            var elems = document.getElementsByClassName("resizable");
            for (var i = 0; i < elems.length; i+= 1) {
                elems[i].src = elems[i].src+"_phone.webp";
            }
        }
        else{
            var desk = document.getElementsByClassName("resizable");
            for (var j = 0; j < desk.length; j+= 1) {
                desk[j].src =desk[j].src+ ".webp";
            }
        }
}
