
# image-size-native

image-size-native es una libreria ligera para Javascript que proporciona una manera eficiente y nativa de obtener dimensiones (ancho y alto) de imágenes. Elimina la necesidad de dependencias externas al aprovechar las capacidades nativas del navegador o entrono de ejecución. Simplifica el proceso de obtener información crucial sobre imagenes, mejorando el rendimiento y facilitando la integración en proyectos web y aplicaciones basadas en Javascript.






## Instalación

Instala la libreria con el siguiente comando

```bash
  npm install image-size-native --save
```
    
## Uso/Ejemplos - Caso formato Blob

```javascript
import { GetSizeOfBlob } from 'image-size-native'

const getDimensionsImage = (contentBlob) => {

    const {img, width, height } = await GetSizeOfBlob(contentBlob);

    const imageObject = {img, width, height};

    return imageObject;
}   
```


## Licencia

Este paquete tiene licencia MIT

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)



## Authors

- [@fainnerramirez](https://github.com/fainnerramirez)


