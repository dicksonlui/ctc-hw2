$(document).ready(function(){ 
 //INSERT CODE HERE

 //QUESTION 1

function Dog() {
}

Dog.prototype.bark = function() {
	console.log("woof");
};

function ShibaInu() {
	ShibaInu.prototype.constructor = Dog.prototype.constructor;
}

ShibaInu.prototype.bark = function() {
	console.log("much wow very javascript");
};
 //QUESTION 3

 $(".secondbutton").click(function(){
    $(".secondheading").html("Shiba Inus (yes my favorite animals are Shiba Inus) are the best!!!")
    				   .css('color', '#34DDDD');
 });

 //QUESTION 4

 $("#task4").click(function(){
    $("#hipcat").css('-webkit-filter', 'blur(5px)');
 });

 //QUESTION 5

 $(".button").click(function(){
 	//Why does Chrome start the wheels as running even though the default state in style.css is paused?
 	$(".wheel").css('-webkit-animation-play-state', 'running');
 	$("#wheel1").css('-webkit-animation-play-state', 'running');
 	$("#wheel2").css('-webkit-animation-play-state', 'running');
 });

 //QUESTION 6
 $(".nyancat").click(function() {
 	$(".nyancat").animate({
  	left: "+=1200"
  }, 10000, function() {
  	//Animation complete.
  });

  $(".rainbows").animate({
  	left: "0",
  	width: "+=1200"
  }, 10000, function() {
  	//Animation complete.
  });

 });

});