//Problem: lack of interactivity
//Solition: add interactivity

var taskInput = document.getElementById('new-task'); //new task
var addButton = document.getElementsByTagName("button")[0] ;//first button
var incompleteTaskHolder =document.getElementById('incomplete-tasks');//incomplete tasks
var completeTaskHolder=document.getElementById('complete-tasks'); //complete tasks
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
	console.log("edit task");
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
	console.log("delete task")
	// When the delete button is pressed remove the parent list item from the ul
}	

// Mark a task as complete
var taskComplete = function(){
	console.log("task complete");
	// when checkbox is checked add to #completed-tasks
}
// Mark a task as incomplete
var taskIncomplete = function(){
	console.log("task incomplete");
	// When the checkbox is checked add to #incomplete-tasks
}
var bindTaskEvent = function(taskListItem,checkBoxEventHandler){ 
console.log('bind list elements');
	//for each list item
	
	//select its children
	var checkBox = taskListItem.querySelector("input[type=checkbox]");
	var editButton = taskListItem.querySelector("button.edit");
	var deleteButton = taskListItem.querySelector('button.delete');
	//bind editTask to edit button
	editButton.onclick = editTask;
	//bind deleteTask to delete button
	deleteButton.onclick = deleteTask;
	// bind checkBoxEventHandler
	checkBox.onchange = checkBoxEventHandler
	
	
}

//Set the click handler to the addTask function
addButton.onclick = addTask;

// cycle over incompleteTaskHolder ul li and bind events to children taskComplete
for(var i = 0; i < incompleteTaskHolder.children.length; i++){
	bindTaskEvent(incompleteTaskHolder.children[i],taskComplete)
	
}

//cycle over completeTaskHolder ul li and bind events to children taskIncomplete

for(var i = 0; i < completeTaskHolder.children.length; i++){
	bindTaskEvent(completeTaskHolder.children[i],taskIncomplete)
	
}


	


