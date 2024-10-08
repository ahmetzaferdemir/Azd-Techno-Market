//Close card
const opencloseCardOne = document.getElementById("open-close-card-1");
opencloseCardOne.addEventListener("click", openCloseCard1)

function openCloseCard1() {
    var openclosedCards1 = document.getElementById("openClosedOne");
    if (
        openclosedCards1.style.display == "flex") {
        openclosedCards1.style.display = "none";
        opencloseCardOne.innerText = "See More.."
        console.log("Satır kapandı..");

    }
    else {
        openclosedCards1.style.display = "flex";
        opencloseCardOne.innerText = "See Less.."
        console.log("Satır açıldı..");
    }
};

const opencloseCardTwo = document.getElementById("open-close-card-2");
opencloseCardTwo.addEventListener("click", openCloseCard2)

function openCloseCard2() {
    var openclosedCards2 = document.getElementById("openClosedTwo");
    if (
        openclosedCards2.style.display == "flex") {
        openclosedCards2.style.display = "none";
        opencloseCardTwo.innerText = "See More.."
        console.log("Satır kapandı..");

    }
    else {
        openclosedCards2.style.display = "flex";
        opencloseCardTwo.innerText = "See Less.."
        console.log("Satır açıldı..");
    }
};


//Slider
const slider = ["slider1.jpg", "slider2.jpg", "slider3.jpg"];

const buttonLeft = document.getElementById("previous-img");
const buttonRight = document.getElementById("next-img");
const sliderImage = document.getElementById("slider-img");

let currentIndex = 0; 
sliderImage.setAttribute("src", "img/" + slider[currentIndex]); 

buttonLeft.addEventListener("click", slideLeft);
buttonRight.addEventListener("click", slideRight);

function slideLeft() {
    currentIndex--; 
    if (currentIndex < 0) {
        currentIndex = slider.length - 1; 
    }
    sliderImage.setAttribute("src", "img/" + slider[currentIndex]); 
    console.log("Sola kaydırıldı!");
}

function slideRight() {
    currentIndex++; // 
    if (currentIndex >= slider.length) {
        currentIndex = 0; 
    }
    sliderImage.setAttribute("src", "img/" + slider[currentIndex]); 
    console.log("Sağa kaydırıldı!");
}


setInterval(function () {
    let min = 0;
    let max = 2;
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    sliderImage.setAttribute("src", "img/" + slider[randomNumber]);
},1500)

