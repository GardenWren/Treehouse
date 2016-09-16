//problem: no user interactivity
//solution: when user interacts page reacts appropriatly

var color = $(".selected").css("background-color");
var $canvas = $("canvas")
var context = $canvas[0].getContext("2d");
var lastEvent;
var mouseDown = false;

//when clicking on control list items
$(".controls").on("click", "li", function(){
  //Deselect sibling elements
  $(this).siblings().removeClass("selected");
 //select clicked
  $(this).addClass("selected");
  //cache current color
  color = $(this).css("background-color");
});


//when new color clicked show color selector
$("#revealColorSelect").click(function(){
   // show or hide color selector 
  changeColor()
  $("#colorSelect").toggle();
});
 
//update the new color span when color sliders change 
function changeColor(){
  var r = $("#red").val();
  var g = $("#green").val();
  var b = $("#blue").val();
  $("#newColor").css("background-color", "rgb(" + r + "," + g + "," + b + ")");
}

$("input[type=range]").change(changeColor);


//when add color is pressed 
$("#addNewColor").click(function(){
  //append color to list
  var $newColor = $("<li></li>");
  $newColor.css("background-color", $("#newColor").css("background-color"));
  $(".controls ul").append($newColor);
  // select new color
  $newColor.click();
});


//on mouse events on the canvas
$canvas.mousedown(function(e){
  lastEvent = e;
  mouseDown = true;
}).mousemove(function(e){
  if(mouseDown){
    context.beginPath();
    context.moveTo(lastEvent.offsetX, lastEvent.offsetY);
    context.lineTo(e.offsetX,e.offsetY);
    context.strokeStyle = color;
    context.stroke();
    lastEvent = e;
  }
}).mouseup(function(){
  mouseDown = false;
}).mouseleave(function(){
  $canvas.mouseup();
});



  //Draw lines