
# image-size-native

image-size-native es una libreria ligera para Javascript que proporciona una manera eficiente y nativa de obtener dimensiones (ancho y alto) de imágenes. Elimina la necesidad de dependencias externas al aprovechar las capacidades nativas del navegador o entrono de ejecución. Simplifica el proceso de obtener información crucial sobre imagenes, mejorando el rendimiento y facilitando la integración en proyectos web y aplicaciones basadas en Javascript.






## Instalación

Instala la libreria con el siguiente comando

```bash
  npm install image-size-native --save
```
    
## Uso/Ejemplos - Caso formato Blob

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>

    <input id="file" type="file">
    <h5>Dimensiones de la imagen: </h5>
    <pre id="ancho"></pre>
    <pre id="alto"></pre>
    <pre id="error"></pre>
    
</body>

</html>
```

```javascript
 import getSizeOfBlob from "https://unpkg.com/image-size-native";

        document.getElementById("file").addEventListener('change', (e) => {
            const file = e.target.files[0];

            if (file) {

                const reader = new FileReader();

                reader.onload = function (e) {
                    const content = e.target.result;
                    const contentUint8Array = new Uint8Array(content);
                    const contentBlob = new Blob([contentUint8Array]);

                    getSizeOfBlob(contentBlob)
                        .then((response) => {
                            document.getElementById("ancho").textContent = "ancho: " + response.width;
                            document.getElementById("alto").textContent = "alto: " +  response.height;
                        })
                        .catch((error) => {
                            document.getElementById("error").textContent = error;
                        })
                }

                reader.readAsArrayBuffer(file);
            }
        })
}   
```


## Licencia

Este paquete tiene licencia MIT

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)



## Authors

- [@fainnerramirez](https://github.com/fainnerramirez)


