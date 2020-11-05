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

function setStatut() {
    var date = new Date();
    var d = date.getDay();
    var h = date.getHours();
    var m = date.getMinutes();
    if(d===1 || d===0 ){
        document.getElementById("statut").innerHTML = 'Salon fermé';
        document.getElementById('statut_img').src = 'image/red_dot.webp';
    }else if(d===2){
        if(h>9 && h<12 || h>14 && h<18){
            document.getElementById("statut").innerHTML = 'Salon ouvert';
            document.getElementById('statut_img').src = 'image/green_dot.webp';
        } else {
            document.getElementById("statut").innerHTML = 'Salon fermé';
            document.getElementById('statut_img').src = 'image/red_dot.webp';
        }
    }else if(d===3){
        if(h>9 && h<18){
            document.getElementById("statut").innerHTML = 'Salon ouvert';
            document.getElementById('statut_img').src = 'image/green_dot.webp';
        } else {
            document.getElementById("statut").innerHTML = 'Salon fermé';
            document.getElementById('statut_img').src = 'image/red_dot.webp';
        }
    } else if(d===4 || d===5){
        if(h>9 && h<19){
            document.getElementById("statut").innerHTML = 'Salon ouvert';
            document.getElementById('statut_img').src = 'image/green_dot.webp';
        } else {
            document.getElementById("statut").innerHTML = 'Salon fermé';
            document.getElementById('statut_img').src = 'image/red_dot.webp';
        }
    } else if(d===6){
        if(h>8 && m>30 && h<17 || h>9 && h<17){
            document.getElementById("statut").innerHTML = 'Salon ouvert';
            document.getElementById('statut_img').src = 'image/green_dot.webp';
        } else {
            document.getElementById("statut").innerHTML = 'Salon fermé';
            document.getElementById('statut_img').src = 'image/red_dot.webp';
        }
    }
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
