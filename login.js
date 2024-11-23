function validarLogin() {
    const usuario = document.getElementById("usuario").value;
    const contraseña = document.getElementById("contraseña").value;
    const errorMensaje = document.getElementById("errorMensaje");

    if (usuario === "alumno" && contraseña === "2024") {
        // Ocultar el login y mostrar el contenido del curso
        document.getElementById("loginContainer").style.display = "none";
        document.getElementById("cursoContainer").style.display = "block";
        cargarContenidoCurso(); // Función para cargar el contenido del curso
    } else {
        errorMensaje.textContent = "Usuario o contraseña incorrectos.";
    }
}
