//all cards in FAQ 
const card1 = document.querySelector(".card1")
const card2 = document.querySelector(".card2")
const card3 = document.querySelector(".card3")
const card4 = document.querySelector(".card4")
const card5 = document.querySelector(".card5")
const card6 = document.querySelector(".card6")
//=============================================
//all cards Btn to show it in FAQ 
const card1Btn = document.querySelector("#card1Btn")
const card2Btn = document.querySelector("#card2Btn")
const card3Btn = document.querySelector("#card3Btn")
const card4Btn = document.querySelector("#card4Btn")
const card5Btn = document.querySelector("#card5Btn")
const card6Btn = document.querySelector("#card6Btn")
//=============================================
//Btn that go to card 6 in aboutSection table(5)
const toFAQsectionCard6 = document.getElementById("toFAQsectionCard6")
//=============================================

//initializing settings for FAQ cards
$(card6).hide();
$(card5).hide();
$(card4).hide();
$(card3).hide();
$(card2).hide();
//=============================================

//bootstrap collapse animation change
$(document).ready(function(){
    $(".collapse.show").each(function(){
        $(this).prev(".card-header").find(".fas").addClass("fa-minus").removeClass("fa-plus");
    });
    $(".collapse").on('show.bs.collapse', function(){
        $(this).prev(".card-header").addClass("isopen");
        $(this).prev(".card-header").find(".fas").removeClass("fa-plus").addClass("fa-minus");
    }).on('hide.bs.collapse', function(){
        $(this).prev(".card-header").removeClass("isopen");
        $(this).prev(".card-header").find(".fas").removeClass("fa-minus").addClass("fa-plus");
    });
});
//=============================================

//cards btn addEventListener
card1Btn.addEventListener('click',()=>{
    $(card6).hide();
    $(card5).hide();
    $(card4).hide();
    $(card3).hide();
    $(card2).hide();
    $(card1).show();
    card1Btn.classList.add("activebtn")
    card2Btn.classList.remove("activebtn")
    card3Btn.classList.remove("activebtn")
    card4Btn.classList.remove("activebtn")
    card5Btn.classList.remove("activebtn")
    card6Btn.classList.remove("activebtn")
})
card2Btn.addEventListener('click',()=>{
    $(card6).hide();
    $(card5).hide();
    $(card4).hide();
    $(card3).hide();
    $(card2).show();
    $(card1).hide();
    card1Btn.classList.remove("activebtn")
    card2Btn.classList.add("activebtn")
    card3Btn.classList.remove("activebtn")
    card4Btn.classList.remove("activebtn")
    card5Btn.classList.remove("activebtn")
    card6Btn.classList.remove("activebtn")
})
card3Btn.addEventListener('click',()=>{
    $(card6).hide();
    $(card5).hide();
    $(card4).hide();
    $(card3).show();
    $(card2).hide();
    $(card1).hide();
    card1Btn.classList.remove("activebtn")
    card2Btn.classList.remove("activebtn")
    card3Btn.classList.add("activebtn")
    card4Btn.classList.remove("activebtn")
    card5Btn.classList.remove("activebtn")
    card6Btn.classList.remove("activebtn")
})
card4Btn.addEventListener('click',()=>{
    $(card6).hide();
    $(card5).hide();
    $(card4).show();
    $(card3).hide();
    $(card2).hide();
    $(card1).hide();
    card1Btn.classList.remove("activebtn")
    card2Btn.classList.remove("activebtn")
    card3Btn.classList.remove("activebtn")
    card4Btn.classList.add("activebtn")
    card5Btn.classList.remove("activebtn")
    card6Btn.classList.remove("activebtn")
})
card5Btn.addEventListener('click',()=>{
    $(card6).hide();
    $(card5).show();
    $(card4).hide();
    $(card3).hide();
    $(card2).hide();
    $(card1).hide();
    card1Btn.classList.remove("activebtn")
    card2Btn.classList.remove("activebtn")
    card3Btn.classList.remove("activebtn")
    card4Btn.classList.remove("activebtn")
    card5Btn.classList.add("activebtn")
    card6Btn.classList.remove("activebtn")
})
card6Btn.addEventListener('click',()=>{
    $(card6).show();
    $(card5).hide();
    $(card4).hide();
    $(card3).hide();
    $(card2).hide();
    $(card1).hide();
    card1Btn.classList.remove("activebtn")
    card2Btn.classList.remove("activebtn")
    card3Btn.classList.remove("activebtn")
    card4Btn.classList.remove("activebtn")
    card5Btn.classList.remove("activebtn")
    card6Btn.classList.add("activebtn")
})
//=============================================