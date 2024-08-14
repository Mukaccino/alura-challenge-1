const texto = document.querySelector('.ingresoForm');
const footImage = document.querySelector('.noMessage');
const image = document.querySelector('.imgSD');
const btnCopy = document.querySelector('.btnCopiar');
let resultado = document.querySelector('.messageData');
var datosGuardados = "";



function encriptar() {
    datos = texto.value

    if (datos == '') {
        image.classList.remove("ocultar")
        footImage.classList.remove("ocultar")
        btnCopy.classList.add("ocultar")
        resultado.textContent = 'Ingresa el texto que desees encriptar o desencriptar'
    } else {


        let a = contieneMayusculas(datos) ? '-El texto contiene mayúsculas' : '';
        let b = contieneAcentos(datos) ? '-El texto contiene acentos' : '';
        let c = contieneCaracteresEspeciales(datos) ? '-El texto contiene caracteres especiales' : '';

        let mensajes = [];

        if (a) mensajes.push(a);
        if (b) mensajes.push(b);
        if (c) mensajes.push(c);

        if (mensajes.length > 0) {
            alert(`No se ha podido encriptar debido a que:\n${mensajes.join('\n')}`);
        } else {


            const encriptador = {
                'a': 'ai',
                'e': 'enter',
                'i': 'imes',
                'o': 'ober',
                'u': 'ufat'

            };

            let datosGuardados = datos.replace(/[aeiou]/g, m => encriptador[m]);

            image.classList.add("ocultar")
            footImage.classList.add("ocultar")
            btnCopy.classList.remove("ocultar")
            resultado.textContent = datosGuardados

            texto.value = ''
        }
    }

}

function desencriptar() {
    datos = texto.value

    if (datos == '') {
        image.classList.remove("ocultar")
        footImage.classList.remove("ocultar")
        btnCopy.classList.add("ocultar")
        resultado.textContent = 'Ingresa el texto que desees encriptar o desencriptar'
    } else {


        let a = contieneMayusculas(datos) ? '-El texto contiene mayúsculas' : '';
        let b = contieneAcentos(datos) ? '-El texto contiene acentos' : '';
        let c = contieneCaracteresEspeciales(datos) ? '-El texto contiene caracteres especiales' : '';

        let mensajes = [];

        if (a) mensajes.push(a);
        if (b) mensajes.push(b);
        if (c) mensajes.push(c);

        if (mensajes.length > 0) {
            alert(`No se ha podido desencriptar debido a que:\n${mensajes.join('\n')}`);
        } else {


            datos = datos.replace(/ai/g, "a");
            datos = datos.replace(/enter/g, "e");
            datos = datos.replace(/imes/g, "i");
            datos = datos.replace(/ober/g, "o");
            datos = datos.replace(/ufat/g, "u");


            datosGuardados = datos;


            image.classList.add("ocultar")
            footImage.classList.add("ocultar")
            btnCopy.classList.remove("ocultar")
            resultado.textContent = datosGuardados

            texto.value = ''
        }
    }


}

function contieneMayusculas(texto) {
    for (let i = 0; i < texto.length; i++) {
        if (texto[i] === texto[i].toUpperCase() && texto[i] !== texto[i].toLowerCase()) {
            return true;
        }
    }
    return false;
}

function contieneAcentos(texto) {
    const regex = /[áéíóúÁÉÍÓÚüÜ]/;
    return regex.test(texto);
}

function contieneCaracteresEspeciales(texto) {
    const regex = /[^A-Za-z\s]/
    return regex.test(texto); // Verifica la presencia de cualquier cosa que no sea letra o espacio
}



function copiar() {
    let blq = document.querySelector('.messageData');
    let txt = blq.innerText;
    navigator.clipboard.writeText(txt).then(() => {
        let btnCopiar = document.querySelector('.btnCopiar');
        btnCopiar.innerText = "Copiado!";
        setTimeout(() => {
            btnCopiar.innerText = "Copiar";
        }, 1500);
    });


}

