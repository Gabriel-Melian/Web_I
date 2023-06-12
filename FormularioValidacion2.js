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

function reiniciar() {
    var labels = document.getElementsByClassName('formulario__label');
    for (var i = 0; i < labels.length; i++) {
      labels[i].classList.remove('fijar');
    }
}

const correo = document.getElementById("correo");
correo.focus();
const contra = document.getElementById("contra");
const form = document.getElementById("form");
const parrafo = document.getElementById("warnings");

form.addEventListener("submit", e=> {
    e.preventDefault();
    let warnings = "";
    let entrar = false;
    let datos = "";
    parrafo.innerHTML = "";
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!regexEmail.test(correo.value)) {
        warnings += "El email es invalido.<br>";
        entrar = true;
    }
    if (contra.value.length < 6) {
        warnings += "Contraseña invalida.<br>";
        entrar = true;
    }

    if (entrar) {
        parrafo.innerHTML = warnings;
    }
    else {
        datos += "Correo: " + correo.value + "<br>";
        datos += "Contra: " + contra.value + "<br>";

        parrafo.innerHTML = "Enviado<br><br>Datos ingresados:<br>" + datos;
        form.reset();
        reiniciar();
        correo.focus();
    }
    //Validacion

})
