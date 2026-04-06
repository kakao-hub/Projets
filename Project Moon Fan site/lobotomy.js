const slide = ["LobotomyCorporationLogoExt.webp","lobotomy-corporation1.webp","lobotomy-corporation2.webp","lobotomy-corporation3.webp","lobotomy_corporation.webp"]
let numero = 0; 

function ChangeSlide(sens) {
    numero = numero + sens;
    if (numero > slide.length - 1)
        numero = 0;
    if (numero < 0)
        numero = slide.length - 1;
    document.getElementById("slide").src = "images/" + slide[numero];
}
