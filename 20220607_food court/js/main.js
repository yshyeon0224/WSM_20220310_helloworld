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
toggleMenu('nav-toggle', 'nav-list');

// function say(){
//     console.log('hello wolrd');
// }

// const say = function () {
//     console.log('hello world2');
// }

// const say = () => console.log('hello world3');
// say();
const addNow = (homeCardId) => {
    //html -> js
    const homeCard = document.getElementById('home-card');

    //시간 -> 몇번째 식사가 선택되어야 하는지 결정
    var now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    console.log(hour, minute);

    minute = hour * 60 + minute;

    if (17 * 60 + 50 <= minute){   //1070
        index = 0;
    }else if(13 * 60 <= minute){  //780
        index = 2;
    }else if(8 * 60 <= minute){
        index = 1;
    }else {
        index = 0;
    }
    //console.log(index);

    //homeCard에서 index번째 card에 now 클래스 추가
    let card = homeCard.getElementsByClassName('card')[index];
    card.classList.add('now');
}
addNow('home-card');