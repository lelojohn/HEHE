function RandomNumberGenerator() {
let RandomNumberMaker = Math.floor((Math.random() * 10) + 1);
if (RandomNumberMaker == 1) {
    window.open("https://youtube.com");
}
else if (RandomNumberMaker == 2) {
    window.open("https://cheese.com")
}
else if (RandomNumberMaker == 3) {
    document.getElementById("RandomThingy").textContent = "( ͡° ͜ʖ ͡°)";
}
else if (RandomNumberMaker == 4) {
    const BackgroundRandomColour = '#' + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = BackgroundRandomColour;
}
}



