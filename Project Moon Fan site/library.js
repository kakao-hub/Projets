const slide = ["library_of_ruina.webp","library_of_ruina2.webp","library_of_ruina3.webp","library_of_ruina4.webp","library_of_ruina5.webp"]
let numero = 0; 

function ChangeSlide(sens) {
    numero = numero + sens;
    if (numero > slide.length - 1)
        numero = 0;
    if (numero < 0)
        numero = slide.length - 1;
    document.getElementById("slide").src = "images/" + slide[numero];
}
 