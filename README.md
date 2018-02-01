# Filter: plugin para imágenes

## Descripción del módulo

Filter es un plugin que permitirá aplicar filtros en imágenes, estos filtros estan definidos como:

+ Gray scale: cambiará la imagen a una escala de grises.
+ Hue-rotate: rotará los colores de la imágen.
+ Sepia: cambiará la imagen al estilo Sepia, imitando las fotografías antiguas
+ Inverso: convertirá la fotografía a negativo.
+ Saturar: intensificará los colores de la imágen.

![Filter](assets/img/filter_muestra.jpg)

## Instrucciones de instalación



## Uso y documentación del API

Para poder utilizar este plugin, deberá crear una `section` con `<div>` con la `clase="container"` y un `id="mainContainer"`, este será quien contenga  a la imágen en la que utilizaremos los filtros, esta imágen debe tener un `id="img"`

![Ejemplo de section, clases e id](assets/img/container.jpg)

A través de DOM se crearán los botones con los filtros respectivos
![Ejemplo de creacion de botones de filtros](assets/img/buttonsFilter.jpg)