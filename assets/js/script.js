const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");


function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensagem.value = textoEncriptado;
    textArea.value = "";

}

function encriptar(stringEncriptada) {

    let matrizcodigo = [["e","enter"] , ["i", "imes"] , ["a","ai"] , ["o","ober"] , ["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizcodigo.length; i ++) {
        if(stringEncriptada.includes(matrizcodigo[i][0], matrizcodigo[i])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizcodigo[i][0], matrizcodigo[i][1]);
        }
    }

    return stringEncriptada
}

function btnDesencriptar() {
    const textoDesencriptado = desencriptar(textArea.value);
    mensagem.value = textoDesencriptado;
    textArea.value = "";

}

function desencriptar(stringDesencriptada) {

    let matrizcodigo = [["e","enter"] , ["i", "imes"] , ["a","ai"] , ["o","ober"] , ["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizcodigo.length; i ++) {
        if(stringDesencriptada.includes(matrizcodigo[i][1], matrizcodigo[i])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizcodigo[i][1], matrizcodigo[i][0]);
        }
    }

    return stringDesencriptada
}



