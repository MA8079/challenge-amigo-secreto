// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];
let campoNombre;
let regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ]+$/;

function agregarAmigo() {
    campoNombre = document.getElementById('amigo').value;
    if (regex.test(campoNombre)) {
        if (campoNombre != '') {
            listaAmigos.push(campoNombre);
            limpiarCaja();
            mostrarListaDeAmigos();
        }
    } else {
        alert("Ingresar información válida.");
        limpiarCaja();
    }
}


function mostrarListaDeAmigos() {
    let lista = document.querySelector('#listaAmigos');
    lista.innerHTML = '';
    for (let index = 0; index < listaAmigos.length; index++) {
        let itemLista = document.createElement('li'); // Crear un elemento lista
        itemLista.textContent = listaAmigos[index]; // asignar valor de indice
        lista.appendChild(itemLista);
    }    
}

function numeroAleatorio(numeroMaximo) {
    return Math.floor(Math.random() * numeroMaximo);
}

function sortearAmigo() {
    let numeroSorteado = numeroAleatorio(listaAmigos.length);
    let amigoSecreto = listaAmigos[numeroSorteado];
    mostrarResultado(amigoSecreto);
    setTimeout(restablecerCondiciones(),5000);

}

function mostrarResultado(nombre) {
    let resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    let elementoLista = document.createElement('li');
    elementoLista.textContent = `El amigo elegido es ${nombre}`;
    resultado.appendChild(elementoLista);

}

function limpiarCaja() {
    document.querySelector('.input-name').value = '';

}

function restablecerCondiciones(){
    listaAmigos=[];
    let lista = document.querySelector('#listaAmigos');
    lista.innerHTML='';

};


