// menu hambuger
let menuBurger = document.getElementById('menu-burger');
console.log(menuBurger);

menuBurger.addEventListener('click', function (){
    let menu = document.getElementById('menu');
    const style = getComputedStyle(menu);
    console.log('1 entrer event: ' + style.display);
})