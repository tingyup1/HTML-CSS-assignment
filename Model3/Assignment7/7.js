function mouseOver(event){
       document.getElementById('target').src=hoverImag
}
function mouseOut(event){
    document.getElementById('target').src=originalImag
}

const originalImag='img/picA.jpg';
const hoverImag='img/picB.jpg';

document.getElementById('trigger').addEventListener("mouseover",mouseOver)
document.getElementById('trigger').addEventListener('mouseout',mouseOut)
