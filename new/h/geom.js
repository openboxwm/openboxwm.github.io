function getElementHeight(Elem) {
    elem = $(Elem);
    if (elem.style.pixelHeight) { 
        xPos = elem.style.pixelHeight;
    } else {
        xPos = elem.offsetHeight;
    }
    return xPos;
}

function getElementWidth(Elem) {
    elem = $(Elem);
    if (elem.style.pixelWidth) {
        xPos = elem.style.pixelWidth;
    } else {
        xPos = elem.offsetWidth;
    }
    return xPos;
}
