const slide = ["limbus-company1.webp","limbus-company2.webp","limbus-company3.webp","limbus-company4.webp","limbus-company5.webp"]
let numero = 0; 

function ChangeSlide(sens) {
    numero = numero + sens;
    if (numero > slide.length - 1)
        numero = 0;
    if (numero < 0)
        numero = slide.length - 1;
    document.getElementById("slide").src = "images/" + slide[numero];
}
 