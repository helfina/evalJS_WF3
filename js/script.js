// menu hambuger
let menuBurger = document.getElementById('menu-burger');
console.log(menuBurger);

menuBurger.addEventListener('click', function () {
    let menu = document.getElementById('menu');
    let icon = document.querySelector('i');
    console.log(icon);
    const style = getComputedStyle(menu);
    console.log('1 entrer event: ' + style.display);
    if (style.display == 'none') {
        menu.style.display = 'block';
        menu.style.top = '10px';
        menuBurger.style.backgroundColor = 'white';
        icon.style.color = 'black';
        console.log('2 entrer if: ' + style.display);
    } else {
        menu.style.display = 'none';
        menuBurger.style.removeProperty("background-color");
        icon.style.color = 'white';
        console.log('3 entrer else : ' + style.display);
    }
});