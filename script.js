var menuIcon=document.querySelector(".menu-icon");
var sidebar=document.querySelector(".sidebar");
var continer=document.querySelector(".container");

menuIcon.onclick=function(){
    sidebar.classList.toggle("small-sidebar");
    continer.classList.toggle("large-container")
}