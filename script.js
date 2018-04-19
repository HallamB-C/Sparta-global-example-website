$(document).ready(function(){
  console.log("We connected in heah");



});


function skyBtnPress (){
    var skyBtn = document.getElementById("skyCarousel");
    var landBtn = document.getElementById("landCarousel");
    var seaBtn = document.getElementById("seaCarousel");



        skyBtn.style.display = "block";
        landBtn.style.display = "none";
        seaBtn.style.display = "none";
}
function landBtnPress (){
    var skyBtn = document.getElementById("skyCarousel");
    var landBtn = document.getElementById("landCarousel");
    var seaBtn = document.getElementById("seaCarousel");

    skyBtn.style.display = "none";
    landBtn.style.display = "block";
    seaBtn.style.display = "none";
}
function seaBtnPress (){
    var skyBtn = document.getElementById("skyCarousel");
    var landBtn = document.getElementById("landCarousel");
    var seaBtn = document.getElementById("seaCarousel");

    skyBtn.style.display = "none";
    landBtn.style.display = "none";
    seaBtn.style.display = "block";
}
