//Problem: lack of interactivity
//Solition: add interactivity

var taskInput = document.getElementById('new-task'); //new task
var addButton = document.getElementsByTagName("button")[0] ;//first button
var incompleteTaskHolder =document.getElementById('incomplete-tasks');//incomplete tasks
var completeTaskHolder=document.getElementById('complete-tasks'); //complete tasks

//New Task list item
var createTask = function(taskString){
	//create list item
	var listItem = document.createElement("li");
	// Check box 
	var checkBox = document.createElement("input");
		// Label
		var taskLabel = document.createElement("label");
		// input text
		var editInput = document.createElement("input");
		// button.edit
		var editButton = document.createElement("button");
		// button.delete
		var deleteButton = document.createElement("button");
		// each element modified and appended
		checkBox.type = "checkbox";
		editInput.type = "text";
		editButton.innerText = "Edit";
		editButton.className = "edit";
		deleteButton.innertext = "Delete";
		deleteButton.className = "delete";
		
		taskLabel.innerText = taskString;
	listItem.appendChild(checkBox);
listItem.appendChild(taskLabel);
listItem.appendChild(editInput);
listItem.appendChild(editButton);
listItem.appendChild(deleteButton);

		
		return listItem
}

// Add a new task
var addTask = function(){
	console.log('add task');
	// Create new list item from #new-task
var listItem = createTask(taskInput.value);		
	//append list item
	incompleteTaskHolder.appendChild(listItem)
	taskInput.value = "";
}
// Edit an existing task
var editTask = function(){
	console.log("edit task");
	var listItem = this.parentNode;
	var editInput =listItem.querySelector("input[type=text]");
	var taskLabel =listItem.querySelector("label");
	//when the Edit button is pressed
		// if class of parent is edit mode
		if(listItem.classList.contains("editMode")){
			//switch back from edit mode
	taskLabel.innerText = editInput.value;

		// label text become input value
		}else{
			//switch to .editMode
			//input value becomes labels text
			editInput.value = taskLabel.innerText;
			}
		//toggle edit mode
	listItem.classList.toggle("editMode");		

		
// Delete existing task
var deleteTask = function(){
	console.log("delete task")
	// When the delete button is pressed remove the parent list item from the ul
	var listItem = this.parentNode;
	var ul = listItem.parentNode;
	ul.removeChild(listitem);
}	

// Mark a task as complete
var taskComplete = function(){
	console.log("task complete");
	// when checkbox is checked add to #completed-tasks
	var listItem = this.parentNode;
	completeTaskHolder.appendChild(listItem);
	bindTaskEvent(listItem,taskComplete);
}
// Mark a task as incomplete
var taskIncomplete = function(){
	console.log("task incomplete");
	// When the checkbox is checked add to #incomplete-tasks
	var listItem =this.parentNode;
	incompleteTaskHolder.appendChild(listItem);
bindTaskEvent(listItem, taskIncomplete);

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
var ajaxRequest = function(){
	console.log("AJAX Request")
}

//Set the click handler to the addTask function
addButton.addEventListener("click", addTask);
addButton.addEventListener("click", ajaxRequest);
// cycle over incompleteTaskHolder ul li and bind events to children taskComplete
for(var i = 0; i < incompleteTaskHolder.children.length; i++){
	bindTaskEvent(incompleteTaskHolder.children[i],taskComplete)
	
}

//cycle over completeTaskHolder ul li and bind events to children taskIncomplete

for(var i = 0; i < completeTaskHolder.children.length; i++){
	bindTaskEvent(completeTaskHolder.children[i],taskIncomplete)
	
}


	


