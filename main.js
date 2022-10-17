const alto = screen.availHeight/4,
ancho = screen.availWidth/4;

window.onload = e =>{
    window.scrollTo(ancho, alto);
}

window.onmousemove = e =>{
    const mouseX = e.clientX,
    mouseY = e.clientY;
    
    const calcX = mouseX / (ancho * 2),
    calcY = mouseY / (alto * 2);

    const panX = ancho * calcX,
    panY = alto * calcY;
    
    window.scrollTo(panX , panY);
}