$(document).ready(function() {
	var $scope = {};
  $scope.date = new Date();
	$scope.moment = moment($scope.date);

	$('#date2').html($scope.moment.format('DD-MM-YYYY hh:mm:ss'));

});


var todoInput = document.querySelector(".todo-text");
var todoForm = document.querySelector(".todo-form");

var task = []
	
var text = document.createElement("text")
text.textContent = task
todoForm.appendChild(text)

todoForm.addEventListener("submit", function(event) {
	$('form').keypress(function(event) { 
    return event.keyCode != 13;
}); 
	event.preventDefault();
	
	console.log(todoInput.value);

	task.push(todoInput.value)

	localStorage.setItem('tasks', JSON.stringify(task))
});
	var data = JSON.parse(localStorage.getItem('tasks'))

// tasksArray.push(input.value)
localStorage.setItem('tasks', JSON.stringify(task));

// data.forEach(task => {
// 	text(text)
// })

// button.addEventListener('click', function(){
// 	localStorage.clear()
// 	while (todoForm.firstChild) {
// 		todoForm.removeChild(todoForm.firstChild)
// 	}
// })
var items

if (localStorage.getItem('tasks')){
	tasks = JSON.parse(localStorage.getItem('tasks'))
} else {
	tasks = []
}