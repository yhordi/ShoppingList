$(document).ready(function () {

	$("#noString").hide();


	$("#add").click(function () {
		var userItem = $("#userInput").val();

		if (userItem === "") {
            $("#noString").show();

        } 

        $('ul').append('<li>'+$('input').val()+'</li>');
    	$('input').val('');
    	$('<input>', {
    		type:"checkbox",
		}).prependTo('li:last-child').addClass(".cb");
		

	});
	$('body').on('click', 'li', function(){
	    $(this).addClass("checked");
	});

});
