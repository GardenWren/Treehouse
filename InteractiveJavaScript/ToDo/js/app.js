//Problem: lack of interactivity
//Solition: add interactivity

var taskInput = document.getElementById('new-task'); //new task
var addButton = document.getElementsByTagName("button")[0] ;//first button
var incompleteTaskHolder =document.getElementById('incomplete-tasks');//incomplete tasks
var completeTaskHolderdocument.getElementById('complete-tasks'); //complete tasks
// Add a new task
var addTask = function(){
	// When the button is pressed
	// Create new list item from #new-task
		// Check box 
		// Label
		// input text
		// button.edit
		// button.delete
		// each element modified and appended
}
// Edit an existing task
var editTask = function(){
	//when the Edit button is pressed
		// if class of parent is edit mode
			//switch back from edit mode
			// label text become input value
		// else
			//switch to .editMode
			//input value becomes labels text
		//toggle edit mode
}
		
// Delete existing task
var deleteTask = function(){
	// When the delete button is pressed remove the parent list item from the ul
}	

// Mark a task as complete
var taskComplete = function(){
	// when checkbox is checked add #completed-tasks
}
// Mark a task as incomplete
var taskIncomplete = function(){
	// When the checkbox is checked add to #incomplete-tasks
}

