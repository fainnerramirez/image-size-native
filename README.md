
# image-size-native

image-size-native es un paquete ligera para Javascript que proporciona una manera eficiente y nativa de obtener dimensiones (ancho y alto) de imágenes. Elimina la necesidad de dependencias externas al aprovechar las capacidades nativas del navegador o entrono de ejecución. Simplifica el proceso de obtener información crucial sobre imagenes en diferentes formatos, mejorando el rendimiento y facilitando la integración en proyectos web y aplicaciones basadas en Javascript.

## Instalación

Importa el paquete de la siguiente manera:

```javascript
  const getSizeOfImage = require("image-size-native");
```
    
## Ejemplo de uso con diferentes formatos de imagen

```javascript

    const getSizeOfImage = require("image-size-native");

    const blob = new Blob([/* datos binarios de la imagen */]);
    const dataURL = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/...";
    const imageObject = new Image();
    imageObject.src = "imagen.jpg";
    const canvas = document.createElement('canvas');

    getSizeOfImage(blob)
            .then(({ img, width, height }) => {
                console.log("Ancho:", width);
                console.log("Alto:", height);
            })
            .catch(error => console.error(error));

    getSizeOfImage(dataURL) // También puedes pasar una URL de datos
            .then(({ img, width, height }) => {
                console.log("Ancho:", width);
                console.log("Alto:", height);
            })
            .catch(error => console.error(error));

    getSizeOfImage(imageObject) // También puedes pasar un objeto de imagen
            .then(({ img, width, height }) => {
                console.log("Ancho:", width);
                console.log("Alto:", height);
            })
            .catch(error => console.error(error));

    getSizeOfImage(canvas) // También puedes pasar un canvas
            .then(({ img, width, height }) => {
                console.log("Ancho:", width);
                console.log("Alto:", height);
            })
            .catch(error => console.error(error));

    //si pasas un formato desconocido o no soportado; saldrá un error con el mensaje:
    // Formato de imagen no compatible
```

## Error en Formatos no soportados

si pasas un formato desconocido o no soportado; saldrá un error con el mensaje:

`Error: Formato de imagen no compatible`

## Licencia

Este paquete tiene licencia MIT

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)


## Authors

- [@fainnerramirez](https://github.com/fainnerramirez)


