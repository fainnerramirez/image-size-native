const getSizeImageApp = require("../index");

const URL = "https://images.unsplash.com/photo-1735408928209-16a5d6ba8ccf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D"

const getSizeImage = async (image) => {
    const response = await getSizeImageApp(image);
    console.log("Details image: ", response);
}

getSizeImage(URL);