let list = document .querySelectorAll('.nav li');
function active(){
    list.forEach((i) =>
    i.classList.remove(`active`));
    this.classList.add(`active`);
}
list.forEach((i) =>
i.addEventListener(`click`, active));

let menuToggle = document.querySelector('.menuToggle');
let header = document.querySelector('header');
menuToggle.oncclick = function(){
    header.classList.toggle('active');
};