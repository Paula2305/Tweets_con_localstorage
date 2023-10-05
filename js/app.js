// Variables
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets = [];

// Event listeners
eventListeners();

function eventListeners(){ 
    // Cuando el usuario agrega un nuevo tweet
    formulario.addEventListener('submit',agregarTweet);

    // Cuando el documento esta listo 
    document.addEventListener('DOMContentLoaded', () => {
        tweets = JSON.parse(localStorage.getItem('tweets')) || [];

        console.log(tweets);

        crearHTML();
    });

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

    const tweetObj = {
        id: Date.now(),
        tweet // ===> tweet: tweet
    }

    // Añadir al arreglo de tweets
    tweets = [...tweets,tweetObj];

    // Una vez agregado el obj, se crea el HTML
    crearHTML();

    // Reiniciar ele formulario
    formulario.reset();

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

// Muestra un listado de los tweets
function crearHTML(){

    limpiarHtml();

    if(tweets.length > 0){
        tweets.forEach(tweet => {
            // Agregar un boton eliminar
            const btnEliminar = document.createElement('a');
            btnEliminar.classList.add('borrar-tweet'); // lo traemos del css
            btnEliminar.innerHTML = 'X';

            // Añadir la funcion de eliminar
            btnEliminar.onclick = () => {
                borrarTweet(tweet.id);
            }

            // Crear el HTML
            const li = document.createElement('li');

            // Añadir el texto
            li.innerText = tweet.tweet;

            //Asignar el boton
            li.appendChild(btnEliminar);

            // Insertarlo en el html
            listaTweets.appendChild(li);
        })
    }

    sincronizarStorage();
}

//Agrega los tweets actuales a localstorage
function sincronizarStorage(){
    localStorage.setItem('tweets', JSON.stringify(tweets));
}


// Elimina un tweet
function borrarTweet(id) {
    // console.log('borrando...', id);
    tweets = tweets.filter( tweet => tweet.id !== id);

    crearHTML();
}


// Limpiar el HTML

function limpiarHtml(){
    while(listaTweets.firstChild){
        listaTweets.removeChild(listaTweets.firstChild);
    };
}


