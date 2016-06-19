var socket = io.connect('http://localhost:8080');

$(document).ready(function() {
    $('#introduceUsuario').show();

});

//al pulsar en el botón de Entrar 
$("#loginBtn").on("click", function(e) {
    e.preventDefault();
    //, creamos la sesión login y lanzamos el evento loginUser
    //pasando el nombre del usuario que se ha conectado
    manageSessions.set("login", $(".username").val());
    //llamamos al evento loginUser, el cuál creará un nuevo socket asociado a nuestro usuario
    socket.emit("loginUser", manageSessions.get("login"));
    //ocultamos la ventana modal
    $("#introduceUsuario").hide();
    $('#nombreParaSaludo').text($(".username").val());
    $('#saluditoLogado').show();

});

//objeto para el manejo de sesiones
var manageSessions = {
    //obtenemos una sesión //getter
    get: function(key) {
        return sessionStorage.getItem(key);
    },
    //creamos una sesión //setter
    set: function(key, val) {
        return sessionStorage.setItem(key, val);
    },
    //limpiamos una sesión
    unset: function(key) {
        return sessionStorage.removeItem(key);
    }
};