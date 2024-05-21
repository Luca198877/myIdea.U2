const open=document.querySelector('.hamburger');

const menu=document.querySelector('.menu');

const menuOpen=document.querySelector('.menu-open');

open.onclick=(()=>{
    menu.classList.toggle('menu-open')
});