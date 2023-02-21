let image = document.querySelector('#imageOne');
let elementImage =  getComputedStyle(image);
let sizeWidth = elementImage.width;
let sizeHeigth = elementImage.height;

mode = sizeWidth > sizeHeigth ? 'landscape' : 'portrait'

document.querySelector('#mode').innerHTML += `This image is a: ${mode}`;