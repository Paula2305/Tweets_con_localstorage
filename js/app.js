// Variables
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets = [];





// Event listeners
eventListeners();

function eventListeners(){
    formulario.addEventListener('submit',agregarTweet);

}











// Funciones
function agregarTweet(e){
    e.preventDefault();

    const tweet = document.querySelector('#tweet').value;

    // validaacion 
    if(tweet === ''){
        mostrarError('Un mensaje no puede ir vacio');
        return; // evita que se ejecuten mas lineas de codigo
    }

    console.log('agregando tweet')
}

// mostrar mensaje de error
function mostrarError(error){
    const mensajeError = document.createElement('p');
    mensajeError.textContent = error;
    mensajeError.classList.add('error');


    // insertarlo en el contenido
    const contenido = document.querySelector('#contenido');
    contenido.appendChild(mensajeError);

    setTimeout(() =>{
        mensajeError.remove();
    }, 3000);
}




