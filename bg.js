const body = document.querySelector("body");

const IMG_NUMBER = 7;

function paintImage(imgNumber){
    const image = new Image();
    
    switch(imgNumber){
        case 1 : image.src= `images/KagoShima_2018.jpg`;    break;
        case 2 : image.src= `images/Tokyo_2017.jpg`;    break;
        case 3 : image.src= `images/Singapore_2012.jpg`;    break;
        case 4 : image.src= `images/Jeju_2012.jpg`;    break;
        case 5 : image.src= `images/Yokohama_2017.jpg`;    break;
        case 6 : image.src= `images/Takayama_2018.jpg`;    break;
        case 7 : image.src= `images/Jeju_2013.jpg`;    break;
    }
    image.classList.add("bgImage");
    body.prepend(image);
}

function getRandom(){
    const number = Math.floor(Math.random() * IMG_NUMBER)+1;
    return number;
}

function init(){
    const randomNumber = getRandom();
    paintImage(randomNumber);
}
init();