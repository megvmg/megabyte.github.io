document.addEventListener("DOMContentLoaded", function() {
    mostrarEvaluacion();
});

function mostrarEvaluacion() {
    const cursoContainer = document.getElementById("cursoContainer");

    cursoContainer.innerHTML += `
        <h2>Evaluación: Programación Orientada a Objetos</h2>
        <form id="evaluacionForm">
            <p>1. ¿Qué es la Programación Orientada a Objetos?</p>
            <label>
                <input type="radio" name="pregunta1" value="correcto"> Enfoque de programación basado en objetos
            </label><br>
            <label>
                <input type="radio" name="pregunta1" value="incorrecto"> Enfoque de programación basado en funciones
            </label><br>

            <p>2. ¿Cuáles son los pilares fundamentales de la POO?</p>
            <select name="pregunta2">
                <option value="correcto">Encapsulación, herencia, polimorfismo y abstracción</option>
                <option value="incorrecto">Bucle, condición, función y variable</option>
                <option value="incorrecto">Entrada, salida, proceso y almacenamiento</option>
            </select><br>

            <p>3. ¿Qué es un objeto en POO?</p>
            <label>
                <input type="checkbox" name="pregunta3" value="correcto"> Un conjunto de atributos y métodos
            </label><br>
            <label>
                <input type="checkbox" name="pregunta3" value="incorrecto"> Solo una función
            </label><br>

            <p>4. ¿Qué es un constructor en POO?</p>
            <label>
                <input type="radio" name="pregunta4" value="correcto"> Es un método especial para inicializar objetos
            </label><br>
            <label>
                <input type="radio" name="pregunta4" value="incorrecto"> Es una función para imprimir el estado de un objeto
            </label><br>

            <p>5. ¿Qué hace un método en POO?</p>
            <label>
                <input type="radio" name="pregunta5" value="correcto"> Define el comportamiento de un objeto
            </label><br>
            <label>
                <input type="radio" name="pregunta5" value="incorrecto"> Es una variable que almacena datos del objeto
            </label><br>

            <button type="button" onclick="calificarEvaluacion()">Calificar</button>
        </form>
    `;
}

function calificarEvaluacion() {
    const form = document.getElementById("evaluacionForm");
    let puntuacion = 0;

    // Verificar la pregunta 1 (radio button)
    if (form.pregunta1.value === "correcto") puntuacion++;

    // Verificar la pregunta 2 (select)
    if (form.pregunta2.value === "correcto") puntuacion++;

    // Verificar la pregunta 3 (checkbox)
    const respuesta3Correcta = form.pregunta3[0].checked; // Un conjunto de atributos y métodos
    const respuesta3Incorrecta = form.pregunta3[1].checked; // Solo una función
    if (respuesta3Correcta && !respuesta3Incorrecta) puntuacion++;

    // Verificar la pregunta 4 (radio button)
    if (form.pregunta4.value === "correcto") puntuacion++;

    // Verificar la pregunta 5 (radio button)
    if (form.pregunta5.value === "correcto") puntuacion++;

    // Mostrar el resultado final
    alert("Tu calificación es: " + puntuacion + " de 5.");
}
