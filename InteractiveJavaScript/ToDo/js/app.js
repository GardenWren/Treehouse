//Problem: lack of interactivity
//Solition: add interactivity

var taskInput = document.getElementById('new-task'); //new task
var addButton = document.getElementsByTagName("button")[0] ;//first button
var incompleteTaskHolder =document.getElementById('incomplete-tasks');//incomplete tasks
var completeTaskHolderdocument.getElementById('complete-tasks'); //complete tasks
// Add a new task
var addTask = function(){
	console.log('add task');
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
	// when checkbox is checked add to #completed-tasks
}
// Mark a task as incomplete
var taskIncomplete = function(){
	// When the checkbox is checked add to #incomplete-tasks
}
var bindTaskEvent = function(taskListItem,checkBoxEventHandler){ 
console.log('bind list elements');
	//for each list item
	
	//select its children
	//bind editTask to edit button
	//bind deleteTask to delete button
	// bind checkBoxEventHandler
	
	
}

//Set the click handler to the addTask function
addbutton.onclick = addTask;

// cycle over incompleteTaskHolder ul li and bind events to children taskComplete
for(var i = 0, i<incompleteTaskHolder, i++){
	bindTaskEvents(incompleteTaskHolder.children[i],taskComplete)
	
}

//cycle over completeTaskHolder ul li and bind events to children taskIncomplete

for(var i = 0, i<incompleteTaskHolder, i++){
	bindTaskEvents(completeTaskHolder.children[i],taskIncomplete)
	
}


	


