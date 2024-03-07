
const menu_icon = document.querySelector('.fa-bars');
const h2b = document.querySelector('.h2b');
const foot1c= document.querySelector(".foot1c")
function perform(){
  h2b.classList.toggle('active');
  foot1c.style.visibility="hidden";
}
menu_icon.addEventListener('click', perform);

