$(document).ready(function() {
	$('#check').click(function() {
		console.log($('#formValue').val());
		isValid($('#formValue').val());
			//confirm("HEY!!!");
	})
});