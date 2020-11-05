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
        document.getElementById('car_1').src = 'image/salon_1_2_phone.webp';
        document.getElementById('car_2').src = 'image/salon_4_phone.webp';
        document.getElementById('car_3').src = 'image/salon_5_phone.webp';
        document.getElementById('car_4').src = 'image/salon_6_phone.webp';
    }
    else
    {
        document.getElementById('car_1').src = 'image/salon_1_2.webp';
        document.getElementById('car_2').src = 'image/salon_4.webp';
        document.getElementById('car_3').src = 'image/salon_5.webp';
        document.getElementById('car_4').src = 'image/salon_6.webp';
    }
}
