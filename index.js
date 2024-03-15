export default function getSizeOfImage(imageData) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
            const width = img.width;
            const height = img.height;
            resolve({ img, width, height });
        };
        img.onerror = (error) => reject(error);

        if (typeof imageData === 'string') { // Si es una URL de datos (Data URL)
            img.src = imageData;
        } else if (imageData instanceof Blob) { // Si es un Blob
            img.src = URL.createObjectURL(imageData);
        } else if (imageData instanceof HTMLImageElement) { // Si es un objeto de imagen
            img.src = imageData.src;
        } else if (imageData instanceof HTMLCanvasElement) { // Si es un canvas
            img.src = imageData.toDataURL();
        } else {
            reject(new Error('Formato de imagen no compatible'));
        }
    });
}