//nav tags var
const home = document.querySelectorAll("#home")
const AboutCorona = document.querySelectorAll("#AboutCorona")
const Symptoms = document.querySelectorAll("#Symptoms")
const Prevention = document.querySelectorAll("#Prevention")
const Treatment = document.querySelectorAll("#Treatment")
const FAQ = document.querySelectorAll("#FAQ")
const News = document.querySelectorAll("#News")
//====================================
//toggle div var
const toggleBtn = document.querySelector("#toggleBtn")
const toggleDiv = document.querySelector("#toggleDiv")
const closeToggleDiv = document.querySelector("#closeToggleDiv");
//====================================
const nav = document.querySelector("nav");
//btn go up
const GOBTN = document.getElementById("GOBTN")
//====================================
//initializing settings for toggle div
$(toggleDiv).hide();
//====================================
//all function 
let hidetoggle = ()=>{
    $(toggleDiv).fadeToggle()
    $(toggleBtn).toggle();
}
let navLocation =()=>{
  
}
let goUp=()=>{
    window.location.href='#'
}
let onscroll=()=>{
    if($(document).scrollTop()==0){
        nav.classList.toggle("trans")
    }else if(nav.classList.contains("trans")){
        nav.classList.toggle("trans")          
    } 
    if($(document).scrollTop()==0){
        GOBTN.classList.toggle("disblayNone")
    }else if(GOBTN.classList.contains("disblayNone")){
        GOBTN.classList.toggle("disblayNone")             
    }
  //nav tags active class add  
    if($(document).scrollTop() <=1){
        home[0].classList.add("active")
        home[1].classList.add("active")
    }else{
        home[0].classList.remove("active")
        home[1].classList.remove("active")
    }
    
    if($(document).scrollTop() >=587 && $(document).scrollTop() <1160){
        AboutCorona[0].classList.add("active")
        AboutCorona[1].classList.add("active")
    }else{
        AboutCorona[0].classList.remove("active")
        AboutCorona[1].classList.remove("active")
    }
    
    if($(document).scrollTop() >=1963 && $(document).scrollTop() <2617){
        Symptoms[0].classList.add("active")
        Symptoms[1].classList.add("active")
    }else{
        Symptoms[0].classList.remove("active")
        Symptoms[1].classList.remove("active")
    }
    
    if($(document).scrollTop() >=2614 && $(document).scrollTop() <3944){
        Prevention[0].classList.add("active")
        Prevention[1].classList.add("active")
    }else{
        Prevention[0].classList.remove("active")
        Prevention[1].classList.remove("active")
    }
    
    if($(document).scrollTop() >=4412 && $(document).scrollTop() <5000){
        Treatment[0].classList.add("active")
        Treatment[1].classList.add("active")
    }else{
        Treatment[0].classList.remove("active")
        Treatment[1].classList.remove("active")
    }
    
    if($(document).scrollTop() >=5784 && $(document).scrollTop() <6384){
        FAQ[0].classList.add("active")
        FAQ[1].classList.add("active")
    }else{
        FAQ[0].classList.remove("active")
        FAQ[1].classList.remove("active")
    }
    
    if($(document).scrollTop() >=6436 && $(document).scrollTop() <7000){
        News[0].classList.add("active")
        News[1].classList.add("active")
    }else{
        News[0].classList.remove("active")
        News[1].classList.remove("active")
    }
}
//====================================
//const addEventListener
GOBTN.addEventListener('click',goUp)
toggleBtn.addEventListener('click',hidetoggle)
closeToggleDiv.addEventListener('click',hidetoggle)
document.addEventListener('scroll',onscroll)
//====================================





