/*** var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    var employees = JSON.parse(xhr.responseText);
    var statusHTML = '<ul class = "bulleted">';
    for(var i = 0; i<employees.length; i++){
		if(employees[i].inoffice === true){
			statusHTML+= '<li class="in">';
		} else {
			statusHTML+= '<li class="in">';
		}
		statusHTML+= employees[i].name;
		statusHTML+= '</li>';
    }
    statusHTML+= '</ul>';
    document.getElementById('employeeList).innerHTML = statusHTML;
   }
};
xhr.open('GET', 'data/rooms.json');
xhr.send();***/

$(document).ready(function(){
	var url = "../data/employees.json;"
	var employeeResponse = function(response){
		var statusHTML = '<ul class="bulleted">';
		$.each(response,function(index,employee){
			if(empolyee.inoffice === true){
				statusHTML += '<li class="in">';
			}else{
				statusHTML += '<li class="out">';
			}
			statusHTML += employee.name;
			statusHTML += '</li>';
		}
	}); // end each
	statusHTML+='</ul>';
	$('#employeeList').html(statusHTML);
	$.getJSON(url,employeeResponse);
}); // end ready