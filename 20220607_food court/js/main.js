//toggle hiddem menu
function toggleMenu(toggleId, navListId) {
    const toggle = document.getElementById(toggleId);
    const navList = document.getElementById(navListId);

    function clickHandler() {
        navList.classList.toggle('show-menu'); // add: 추가, remove: 제거, toggle: 추가/제거
    }

    if (toggle && navList) {
        toggle.addEventListener("click", clickHandler);
    }
}
toggleMenu('nav-toggle', 'nav-list');

// function say(){
//     console.log('hello wolrd');
// }

// const say = function () {
//     console.log('hello world2');
// }

// const say = () => console.log('hello world3');
// say();