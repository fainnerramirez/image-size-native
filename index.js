class ImageProcessingError extends Error {
    constructor(message, type) {
        super(message);
        this.name = this.constructor.name;
        this.type = type;
    }
}

module.exports = function getSizeOfImage(imageData) {
    return new Promise((resolve, reject) => {
        let img;

        // Verificar si estamos en un entorno de navegador o Node.js
        try {
            if (typeof window !== 'undefined' && window.Image) {
                // En el navegador, usamos Image nativo
                img = new Image();
            } else {
                // Si estamos en Node.js, necesitamos usar la librería 'canvas' para crear una imagen
                try {
                    const { Image } = require('canvas');
                    img = new Image();
                } catch (error) {
                    reject(new ImageProcessingError('No se puede procesar la imagen en Node.js. Instala la librería "canvas".', 'NODE_ENV_ERROR'));
                    return;
                }
            }

            // Definir el comportamiento cuando la imagen se carga correctamente
            img.onload = () => {
                const width = img.width;
                const height = img.height;
                resolve({ img, width, height });
            };

            // Manejo de errores al cargar la imagen
            img.onerror = (error) => {
                reject(new ImageProcessingError('Hubo un error al procesar la imagen. Puede que la URL esté incorrecta o la imagen esté dañada.', 'IMAGE_LOAD_ERROR'));
            };

            // Validación del tipo de 'imageData'
            if (typeof imageData === 'string') {
                if (!/^data:image\/(jpeg|png|gif|bmp|webp);base64,/.test(imageData) && !/^https?:\/\/.*/.test(imageData)) {
                    reject(new ImageProcessingError('La URL de la imagen parece estar mal formada. Asegúrate de usar una URL válida.', 'INVALID_URL'));
                    return;
                }
                img.src = imageData; // Asignamos el Data URL o URL de imagen
            } else if (imageData instanceof Blob) {
                if (!imageData.type.startsWith('image/')) {
                    reject(new ImageProcessingError('El Blob proporcionado no parece ser una imagen válida.', 'INVALID_BLOB_TYPE'));
                    return;
                }
                img.src = URL.createObjectURL(imageData); // Convertimos el Blob a una URL
            } else if (imageData instanceof HTMLImageElement) {
                img.src = imageData.src; // Objeto de imagen existente
            } else if (imageData instanceof HTMLCanvasElement) {
                img.src = imageData.toDataURL(); // Convertimos el Canvas a Data URL
            } else {
                reject(new ImageProcessingError('El formato de la imagen no es compatible. Asegúrate de pasar una URL, Blob, HTMLImageElement o HTMLCanvasElement.', 'INVALID_IMAGE_TYPE'));
            }

        } catch (error) {
            reject(new ImageProcessingError('Ocurrió un error desconocido durante el procesamiento de la imagen. Por favor, revisa los datos proporcionados.', 'UNKNOWN_ERROR'));
        }
    });
};
