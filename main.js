function pencil(){
	$("td").mouseenter(function()
	{
		$(this).css("background-color", "#000000");
	}
		);
    console.log("t");
}

$(document).ready(function(){
   pencil();
});
