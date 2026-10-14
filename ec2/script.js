
const layerInfo = {
    7: {
        title: "7. Aplicación",
        icon: "🌐",
        description: "Proporciona servicios de red utilizados por las aplicaciones del usuario.",
        examples: "HTTP, DNS, SMTP",
        function: "Permitir que las aplicaciones utilicen servicios de comunicación de red."
    },
    6: {
        title: "6. Presentación",
        icon: "🔐",
        description: "Representa y transforma los datos para que los sistemas puedan interpretarlos.",
        examples: "Formatos de datos, codificación y cifrado",
        function: "Gestionar la representación de datos, su codificación y, cuando corresponda, su cifrado o compresión."
    },
    5: {
        title: "5. Sesión",
        icon: "🔗",
        description: "Organiza y administra las sesiones de comunicación entre aplicaciones.",
        examples: "Control de diálogo y sincronización",
        function: "Establecer, mantener y finalizar diálogos entre aplicaciones en el modelo de referencia."
    },
    4: {
        title: "4. Transporte",
        icon: "📦",
        description: "Gestiona la comunicación de extremo a extremo entre procesos.",
        examples: "TCP, UDP",
        function: "Segmentar los datos y utilizar puertos; TCP también proporciona entrega fiable y ordenada."
    },
    3: {
        title: "3. Red",
        icon: "🌍",
        description: "Permite direccionar paquetes y encontrar rutas entre redes.",
        examples: "IP, ICMP, routers",
        function: "Determinar cómo los paquetes viajan desde una red de origen hasta una de destino."
    },
    2: {
        title: "2. Enlace de datos",
        icon: "🔀",
        description: "Organiza los datos en tramas y gestiona la comunicación dentro de un enlace.",
        examples: "Ethernet, direcciones MAC, switches",
        function: "Transmitir tramas dentro del enlace y detectar ciertos errores de transmisión."
    },
    1: {
        title: "1. Física",
        icon: "🔌",
        description: "Transmite bits mediante señales por un medio físico o inalámbrico.",
        examples: "Cables, fibra óptica, señales de radio",
        function: "Transportar señales que representan bits a través del medio de transmisión."
    }
};

// Selección interactiva de las capas OSI
const layerButtons = document.querySelectorAll(".layer");

layerButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const number = button.dataset.layer;
        const info = layerInfo[number];

        if (!info) return;

        layerButtons.forEach((item) => {
            item.classList.remove("active");
        });

        button.classList.add("active");

        document.getElementById("layerIcon").textContent = info.icon;
        document.getElementById("layerTitle").textContent = info.title;
        document.getElementById("layerDescription").textContent =
            info.description;
        document.getElementById("layerExamples").textContent = info.examples;
        document.getElementById("layerFunction").textContent = info.function;
    });
});

// Cambiar entre tema claro y oscuro
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
    const darkEnabled = document.body.classList.toggle("dark");

    themeBtn.textContent = darkEnabled ? "☀" : "☾";
    themeBtn.setAttribute(
        "aria-label",
        darkEnabled ? "Activar tema claro" : "Activar tema oscuro"
    );
});

// Pregunta interactiva
const quizOptions = document.querySelectorAll("#quizOptions button");
const quizFeedback = document.getElementById("quizFeedback");
const resetQuiz = document.getElementById("resetQuiz");

quizOptions.forEach((button) => {
    button.addEventListener("click", () => {
        const correct = button.dataset.answer === "correct";

        quizOptions.forEach((option) => {
            option.disabled = true;

            if (option.dataset.answer === "correct") {
                option.classList.add("correct");
            }
        });

        if (correct) {
            quizFeedback.textContent =
                "¡Correcto! IP trabaja principalmente en la capa de red del modelo OSI.";
        } else {
            button.classList.add("wrong");
            quizFeedback.textContent =
                "No exactamente. La respuesta correcta es la capa de red (capa 3).";
        }
    });
});

// Reiniciar el cuestionario
resetQuiz.addEventListener("click", () => {
    quizOptions.forEach((button) => {
        button.disabled = false;
        button.classList.remove("correct", "wrong");
    });

    quizFeedback.textContent = "";
});
