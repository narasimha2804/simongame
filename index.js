var buttonColors = ["red", "blue", "green", "yellow"];
var gameSequence = [];
var userClickedPattern = [];

function nextSequence() {
  var randomChoosenColor = Math.random() * 4;
  randomChoosenColor = Math.floor(randomChoosenColor);
  gameSequence.push(buttonColors[randomChoosenColor]);
  $("."+buttonColors[randomChoosenColor]).fadeOut(100).fadeIn(100);
  var audio = new Audio("sounds/" + buttonColors[randomChoosenColor]+".mp3");
  audio.play();
}
var Level = 0;
var start = 0;
document.addEventListener("keydown",function(){
    if(start === 0){
        nextSequence();
        $("#level-title").text("Level 0");
        start = 1;
    }
});
  



$(".red").click(function(){
   $(".red").fadeOut(100).fadeIn(100);
   var audio = new Audio("sounds/red.mp3");
   audio.play();
   handler("red");
  
});

$(".blue").click(function(){
    $(".blue").fadeOut(100).fadeIn(100);
    var audio = new Audio("sounds/blue.mp3");
   audio.play();
   handler("blue");
  
 });

 $(".green").click(function(){
    $(".green").fadeOut(100).fadeIn(100);
    var audio = new Audio("sounds/green.mp3");
   audio.play();
   handler("green");
   
 });

 $(".yellow").click(function(){
    $(".yellow").fadeOut(100).fadeIn(100);
    var audio = new Audio("sounds/yellow.mp3");
   audio.play();
   handler("yellow");
   
 });


 function handler(r){
     userClickedPattern.push(r);
     if(userClickedPattern.length > gameSequence.length){
         $("h1").text("Game over press any key to restart the game.");
         wrongpress();

         userClickedPattern = [];
         gameSequence = [];
         start = 0;
         Level = 0;
     }
    else if(userClickedPattern.length == gameSequence.length){
         if(r === gameSequence[userClickedPattern.length-1]){
             Level++;
             $("h1").text("Level " +Level +".");
             userClickedPattern = [];
             setTimeout(function(){
                nextSequence();
             },1000);
             
         }else{
            $("h1").text("Game over press any key to restart the game.");
            wrongpress();
            userClickedPattern = [];
            gameSequence = [];
            start = 0;
            Level = 0;
         }
     }
     else {
         if(r === gameSequence[userClickedPattern.length-1]){
                   
         }else{
            $("h1").text("Game over press any key to restart the game.");
            wrongpress();
            userClickedPattern = [];
            gameSequence = [];
            start = 0;
            Level = 0;
         }
     }
 }


 function wrongpress(){
       document.querySelector("body").classList.add("game-over");
       var audio = new Audio("sounds/wrong.mp3");
       audio.play();
       setTimeout(function(){
           document.querySelector("body").classList.remove("game-over");
       },100);
 }

 