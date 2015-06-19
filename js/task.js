var tasks=[
	{
		"name":"Test Task #1",
		"date": "12/01/2012",
		"assigned":"John Doe"
	},
	{
		"name":"Test Task #2",
		"date": "12/02/2012",
		"assigned":"John Doe"
	},
	{
		"name":"Test Task #3",
		"date": "12/03/2012",
		"assigned":"John Doe"
	},
	{
		"name":"Test Task #4",
		"date": "12/04/2012",
		"assigned":"John Doe"
	},
	{
		"name":"Test Task #5",
		"date": "12/05/2012",
		"assigned":"John Doe"
	},
	{
		"name":"Test Task #6",
		"date": "12/06/2012",
		"assigned":"John Doe"
	},
	{
		"name":"Test Task #7",
		"date": "12/07/2012",
		"assigned":"John Doe"
	}
];
$( document ).ready(function() {
	var tableContent = "";
    for(var i=0;i<tasks.length;i++){
    	tableContent += "<tr><td>"+tasks[i].name+"</td><td>"+tasks[i].date+"</td><td>"+tasks[i].assigned+"</td></tr>";
    }
    $("#tasks-table").append(tableContent);
});
$("#task-submit").click(function(){
	var task = $("#task").val();
	var date = $("#date").val();
	var assignedTo = $("#assignedTo").val();
	if(task != "" && date != "" && assignedTo != ""){
		var dateArray = date.split("-");
		var tableContent = "<tr><td>"+task+"</td><td>"+dateArray[1]+"/"+dateArray[2]+"/"+dateArray[0]+"</td><td>"+assignedTo+"</td></tr>";
		$("#tasks-table").append(tableContent);
		$('.task-form-section').find('form')[0].reset();
	}else{
		$(".alert").removeClass("hide");
	}
});
$("button.close").click(function(){
	$(".alert").addClass("hide");
});