function cargarContenidoCurso() {
    const cursoContainer = document.getElementById("cursoContainer");

    cursoContainer.innerHTML = `
        <h1>Bienvenido al Curso Programación 2</h1>
        <p>Este curso cubre los siguientes temas:</p>
        <ul>
            <li>Programación Orientada a Objetos (POO)
                <p>
                    La Programación Orientada a Objetos (POO) es un paradigma de programación que se basa en la 
                    creación de "objetos", que son representaciones de entidades del mundo real con atributos 
                    (datos) y métodos (comportamientos). Este enfoque facilita la reutilización de código, la 
                    abstracción y el diseño modular. 
                </p>
                <div style="display: flex; justify-content: center;">
                    <img src="https://s3.us-east-2.amazonaws.com/mgpanel/619-poo-mgpanel2.jpg" 
                         alt="Concepto de POO" 
                         class="inline-image">
                </div>
                <p>
                    Los pilares fundamentales de la POO son:
                    <ul>
                        <li><strong>Encapsulación:</strong> Agrupar datos y métodos que operan sobre esos datos dentro de una clase.</li>
                        <li><strong>Herencia:</strong> Crear nuevas clases basadas en clases existentes para reutilizar y extender comportamientos.</li>
                        <li><strong>Polimorfismo:</strong> Permitir que diferentes objetos respondan de manera única al mismo método.</li>
                        <li><strong>Abstracción:</strong> Ocultar detalles de implementación y mostrar solo funcionalidades esenciales.</li>
                    </ul>
                </p>
            </li>
            <li>C++
                <p>
                    C++ es un lenguaje de programación de propósito general que combina las características de 
                    programación de alto nivel y bajo nivel. Fue diseñado para ser eficiente y flexible, lo que 
                    lo convierte en una excelente opción para desarrollar sistemas operativos, motores de videojuegos 
                    y aplicaciones de alto rendimiento.
                </p>
                <div style="display: flex; justify-content: center;">
                    <img src="https://phoenixnap.com/glossary/wp-content/uploads/2022/12/object-oriented-programming-explained.jpg" 
                         alt="Ejemplo de C++" 
                         class="inline-image">
                </div>
                <p>
                    Algunas características clave de C++ son:
                    <ul>
                        <li>Soporte para POO con clases y objetos.</li>
                        <li>Control directo sobre hardware gracias a punteros y memoria dinámica.</li>
                        <li>Gran compatibilidad con bibliotecas y sistemas existentes.</li>
                    </ul>
                </p>
            </li>
            <li>Java (Interfaces Visuales)
                <p>
                    Java es uno de los lenguajes de programación más utilizados en el mundo. Es conocido por su 
                    enfoque en la portabilidad, seguridad y robustez. En el desarrollo de interfaces gráficas, Java 
                    ofrece bibliotecas como AWT, Swing y JavaFX para construir aplicaciones visualmente atractivas.
                </p>
                <div style="display: flex; justify-content: center;">
                    <img src="https://img-c.udemycdn.com/course/750x422/3820290_4cfe.jpg" 
                         alt="Interfaz en Java" 
                         class="inline-image">
                </div>
                <p>
                    Ventajas de usar Java para interfaces visuales:
                    <ul>
                        <li>Independencia de plataforma: "Escribe una vez, ejecuta en cualquier lugar".</li>
                        <li>Amplia comunidad y soporte de bibliotecas.</li>
                        <li>Opciones para diseño moderno con JavaFX.</li>
                    </ul>
                </p>
            </li>
            <li>JavaScript
                <p>
                    JavaScript es un lenguaje de programación de alto nivel, interpretado y orientado a objetos. 
                    Es una de las tecnologías clave para el desarrollo web moderno, permitiendo crear aplicaciones 
                    dinámicas e interactivas directamente en el navegador.
                </p>
                <p>
                    Usos comunes de JavaScript:
                    <ul>
                        <li>Manipulación del DOM para actualizar contenido dinámicamente.</li>
                        <li>Creación de aplicaciones de una sola página (SPA) con frameworks como React o Angular.</li>
                        <li>Conexión con APIs externas para cargar datos en tiempo real.</li>
                    </ul>
                </p>
            </li>
        </ul>
       
        <!-- Información adicional -->
        <h2>Más recursos sobre Programación Orientada a Objetos</h2>
        <p style="text-align: center;">
            Si deseas obtener más información sobre la Programación Orientada a Objetos, visita el siguiente enlace:
            <a href="https://desarrolloweb.com/articulos/499.php" target="_blank">¿Programación Orientada a Objetos?</a>
        </p>
        <p style="text-align: center;">
            También puedes consultar este video para aprender más de manera visual:
        </p>
        <div style="display: flex; justify-content: center;">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/Ikb5NZEtqzU?si=502oJ2u7VU0FgYsr" 
            title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
            </iframe>
        </div>

        <p>Comienza la evaluación a continuación:</p>
        <button onclick="iniciarEvaluacion()">Iniciar Evaluación</button>
    `;
}

function iniciarEvaluacion() {
    mostrarEvaluacion();
}
