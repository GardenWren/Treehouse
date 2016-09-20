//problem: hints are shown even when form is valid
//solution: hide hints when input is valid

//hide hints
$("form span").hide();
var $password = $("#password");
var $confirmPassword = $("#confirm_password");

function isPasswordValid(){
 return $password.val().length > 8;
}
function arePasswordsMatching(){
  return $confirmPassword.val() === $password.val();
}

function canSubmit(){
	return isPasswordValid()&& arePasswordsMatching();
}

function enableSubmitEvent(){
	$("#submit").prop("disabled",!canSubmit());
}

ArePasswordsMatching = {check: arePasswordsMatching, object: $confirmPassword};
                        
IsPasswordValid = {check: isPasswordValid, object: $password}



function hintEvent(CheckObject){
  //find out if password is valid 
  if(CheckObject.check()) {
      //hide hint if valid
    CheckObject.object.next().hide(); 
  } else {
      //else shown hint
    CheckObject.object.next().show();
  }
}


//what happens on password input
$password.focus(function(){
   hintEvent(IsPasswordValid);
   hintEvent(ArePasswordsMatching)
})
.keyup(function(){
   hintEvent(IsPasswordValid);
   hintEvent(ArePasswordsMatching);
   enableSubmitEvent();
});

// What happens on confirmation input
$confirmPassword.focus(function(){
   hintEvent(ArePasswordsMatching)
}).keyup(function(){
   hintEvent(ArePasswordsMatching);
   enableSubmitEvent();
});

//what happens on submit 
enableSubmitEvent();
