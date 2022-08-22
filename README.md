# TARJETA DE BIENVENIDA - THESE

Proyecto que crea una tarjeta de bienvendia.

Contiene un formulario donde se podrá ingresar la foto de la persona, nombre, cargo laboral e intereses.

Hay dos botones: el botón que dice "Descargar Tarjeta" descarga la vista principal de la tarjeta que contiene la información del a persona. El segundo botón que dice "Descargar contra tarjeta" descarga el lado posterior de la tarjeta.

El proyecto cuenta con una pieza de interacción sensible al mouse que hace girar la tarjeta.

## LIBRERIAS UTILIZADAS

Utilice canvas2HTML y downloadjs para este proyecto. Canvas2HTML hace una captura de pantalla de un elemento del DOM y downloadjs hace la descarga de ese elemento.

Para el traspaso de la información utilice Redux. Podría haber utilizado Context para este proyecto, ya que es mas simple su implementación, pero al ser una prueba laboral me enfoque en demostrar mis habilidades en un proyecto a gran escala.

### RESPONSIVE

El sitio fue realizado de forma mobile-first hasta un tamaño minimo de 450px aproximadamente. Por debajo de ese tamaño el sitio no es funcional ya que la tarjeta se achica. 

# COMENTARIOS PERSONALES

Se podrían haber realizado validaciones del formulario checkeando que el formulario no esta vacío o que no contenga la información por defecto para que solo se descarguen tarjetas con información válida que por razones de tiempo me pareció innecesario.

A su vez aun no se como hacer test unitarios por lo tanto carece de tests el proyecto. Trate de aprender a testear mis componentes, lo quise hacer una vez creado todo el proyecto y con el ruteo de redux se me hizo complejo testear las unidades.

Estoy totalmente abierto a aprender a realizar test o diseños Test-driven Development en caso de ser necesario.

# INICIAR EL PROYECTO

### `yarn install`

Para instalar todas las dependencias del proyecto.

### `yarn start`

Para iniciar el proyecto, se inicializará en https://localhost:3000


