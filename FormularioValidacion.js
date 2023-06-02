var inputs = document.getElementsByClassName('formulario__input');
for (var i=0; i<inputs.length; i++) {
    inputs[i].addEventListener('keyup', function() {
        if(this.value.length >= 1) {
            this.nextElementSibling.classList.add('fijar');
        }
        else {
            this.nextElementSibling.classList.remove('fijar');
        }
    })
}

const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const telefono = document.getElementById("telefono");
const usuario = document.getElementById("usuario");
const contra = document.getElementById("contra");
const form = document.getElementById("form");
const parrafo = document.getElementById("warnings");

form.addEventListener("submit", e=> {
    e.preventDefault();
    var numbers = /^[0-9]+$/;
    let warnings = "";
    let entrar = false;
    parrafo.innerHTML = "";
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (nombre.value.length < 6) {
        warnings += "El nombre es invalido.<br>";
        entrar = true;
    }
    if (!regexEmail.test(correo.value)) {
        warnings += "El email es invalido.<br>";
        entrar = true;
    }
    if (contra.value.length < 6) {
        warnings += "Contraseña invalida.<br>";
        entrar = true;
    }
    if (!numbers.test(telefono.value)) {
        warnings += "Telefono invalido.<br>";
        entrar = true;
    }
    if (usuario.value.length < 2) {
        warnings += "Usuario invalido.<br>";
        entrar = true;
    }

    if (entrar) {
        parrafo.innerHTML = warnings;
    }
    else {
        parrafo.innerHTML = "Enviado";
        form.reset();
    }
    //Validacion.

})