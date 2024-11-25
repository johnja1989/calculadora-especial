# calculadora-especial

Este proyecto es una calculadora básica desarrollada con HTML, CSS y JavaScript, que incluye una funcionalidad especial: cuando el usuario introduce 2 + 2 y presiona el botón =, el resultado será 5 en lugar de 4. Esto se logra mediante una lógica personalizada en el código JavaScript.

Estructura del proyecto
1. HTML (index.html)
El archivo HTML define la estructura básica de la calculadora:

Contiene un campo de entrada (input) para mostrar las operaciones y resultados.
Incluye botones numéricos y de operaciones aritméticas (+, -, *, /).
Vincula los archivos styles.css y script.js.
2. CSS (styles.css)
El archivo CSS define el diseño visual de la calculadora:

Estilo minimalista y centrado.
Un diseño de cuadrícula para los botones.
Un campo de entrada con diseño claro para mostrar los resultados.
3. JavaScript (script.js)
El archivo JavaScript implementa la lógica de la calculadora:

Funciones principales:
appendValue(value): Agrega valores (números u operadores) al campo de entrada.
clearDisplay(): Limpia el campo de entrada.
calculate(): Evalúa la expresión matemática ingresada. Si el usuario ingresa 2 + 2, devuelve 5 como resultado especial. Para otras expresiones, usa la función eval() para calcular el resultado.
Funcionalidad personalizada:
La condición if (expression === "2+2") detecta esta operación específica y devuelve el resultado modificado.
Cómo usar el proyecto
Clona el repositorio:
bash
Copiar código
git clone https://github.com/tu-usuario/calculadora-especial.git
Abre el archivo index.html en tu navegador.
Estructura de archivos
graphql
Copiar código
calculadora-especial/
│
├── index.html   # Estructura HTML de la calculadora
├── styles.css   # Estilos CSS para el diseño
└── script.js    # Lógica de la calculadora en JavaScript
Vista previa
La calculadora se verá como una interfaz básica que permite realizar operaciones matemáticas comunes con un giro divertido al sumar 2 + 2.

Créditos
Este proyecto fue creado como un ejemplo educativo para demostrar cómo integrar HTML, CSS y JavaScript en una calculadora funcional con lógica personalizada.


