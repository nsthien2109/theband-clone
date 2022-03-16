var header = document.getElementById('header');
var nav = document.getElementById('nav-mobile');
var height = header.clientHeight;

nav.onclick = () => {
    var isClosed = header.clientHeight === height;
    if (isClosed) {
        header.style.height = 'auto'
    } else {
        header.style.height = null
    }
}

var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
for (item of menuItems) {
    item.onclick = function() {
        header.style.height = null
    }
}