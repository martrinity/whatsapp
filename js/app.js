$(document).ready(function() {
	$('#enviar').click(function(event){
		event.preventDefault();
		var msje = $("#ingreso-mensaje").val();

		$("#current-conversation").append("<div><p>" + msje + "</p></div>");
		

	})
	
});