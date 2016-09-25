/**var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if(xhr.readyState === 4 && xhr.status === 200) {
    var employees = JSON.parse(xhr.responseText);
    var statusHTML = '<ul class="bulleted">';
    for (var i=0; i<employees.length; i += 1) {
      if (employees[i].inoffice === true) {
        statusHTML += '<li class="in">';
      } else {
        statusHTML += '<li class="out">';
      }
      statusHTML += employees[i].name;
      statusHTML += '</li>';
    }
    statusHTML += '</ul>';
    document.getElementById('employeeList').innerHTML = statusHTML;
  }
};
xhr.open('GET', '../data/employees.json');
xhr.send();

var roomsxhr = new XMLHttpRequest();
roomsxhr.onreadystatechange = function () {
  if(roomsxhr.readyState === 4 && roomsxhr.status === 200) {
    var rooms= JSON.parse(roomsxhr.responseText);
    var statusHTML = '<ul class="rooms">';
    for (var i=0; i<rooms.length; i += 1) {
      if (rooms[i].available === true) {
        statusHTML += '<li class="empty">';
      } else {
        statusHTML += '<li class="full">';
      }
      statusHTML += rooms[i].room;
      statusHTML += '</li>';
    }
    statusHTML += '</ul>';
    document.getElementById('roomList').innerHTML = statusHTML;
  }
};
roomsxhr.open('GET', '../data/rooms.json');
roomsxhr.send();**/

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

	var roomsurl = "../data/rooms.json;"
	var roomsResponse = function(response){
		var roomStatusHTML = '<ul class="bulleted">';
		$.each(response,function(index, room){
			if(room.available === true){
				roomStatusHTML += '<li class="empty">';
			}else{
				roomStatusHTML += '<li class="full">';
			}
			roomStatusHTML += room.name;
			roomStatusHTML += '</li>';
		}
	}); // end each
	roomStatusHTML+='</ul>';
	$('#roomList').html(roomStatusHTML);
	$.getJSON(roomsurl,roomsResponse);
}); // end ready