declare module 'image-size-native' {
    export class ImageProcessingError extends Error {
      name: string;
      type: string;
  
      constructor(message: string, type: string);
    }
  
    export interface ImageSize {
      img: HTMLImageElement | any;
      width: number;
      height: number;
    }
  
    export default function getSizeOfImage(imageData: string | Blob | HTMLImageElement | HTMLCanvasElement): Promise<ImageSize>;
  }
  