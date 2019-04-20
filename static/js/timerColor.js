function getRandomColor() {
    return Math.floor(Math.random()*16777215).toString(16);
}
function changeColorOfClass(x) {
    var elements = window.document.getElementsByClassName(x);
    console.log('elements', elements);
    for (var i = 0; i < elements.length; i++) {
        var hex = getRandomColor();
        elements[i].style.backgroundColor= `#${hex}`;
        console.log('hex', hex);
    }
}

class ColorChanger {
    init() {
        setInterval(function() {
            console.log('im changing');
            changeColorOfClass('wrapper');
        }, 1000);
    }
}
