//toggle hiddem menu
const toggleMenu = (toggleId, navListId) => {
    const toggle = document.getElementById(toggleId);
    const navList = document.getElementById(navListId);
    const toggleIcon = document.getElementsByTagName('i')[0];

    if (toggle && navList) {
        // add: 추가, remove: 제거, toggle: 추가/제거
        toggle.addEventListener("click", () => {
            //toggle menu
            navList.classList.toggle("show-menu");
            //change toggle icon: bx-menu <-> bx bx-x-circle
            toggleIcon.classList.toggle("bx-menu");
            toggleIcon.classList.toggle("bx-bx-x-circle");
        });
    }
};
toggleMenu("nav-toggle", "nav-list");

// function say(){
//     console.log('hello wolrd');
// }

// const say = function () {
//     console.log('hello world2');
// }

// const say = () => console.log('hello world3');
// say();