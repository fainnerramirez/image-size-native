const GetSizeOfBlob = (blob) => {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
            const width = img.width;
            const height = img.height;
            resolve({ img, width, height });
        };
        img.onerror = (error) => reject(error);
        img.src = URL.createObjectURL(blob);
    });
}

export { GetSizeOfBlob };