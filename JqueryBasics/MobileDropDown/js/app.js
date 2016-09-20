//problem: menu wraps in smaller widths
//solution: to hide text links and swap them out with a more appropriate navigation

//create a select and append to menu
var $select = $("<select></select>");
$("#menu").append($select);
//create options for each list item
$("#menu a").each(function(){  
  // create an option
  var $anchor = $(this);
  var $option = $("<option></option>");
  //Show selected options for current page
 if($anchor.parent().hasClass("selected")) {
      $option.prop("selected", true);
  }
  // options value is the href
  $option.val($anchor.attr("href"));
  // options text is text of link
  $option.text($anchor.text());
 //append option to select
  $select.append($option);
  });  

  //bind click to select monitor
$select.change(function(){
 // go to selects location
 window.location = $select.val(); 
 });

//Show selected options for current page