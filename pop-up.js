$(document).ready(function() {
    if(localStorage.getItem('popState') != 'shown'){
        		setTimeout(function(){
			      $('#pop-up').show();
		        },17000);
        localStorage.setItem('popState','shown')
    }

    $('.exit-cont, #pop-up').click(function(e) // You are clicking the close button
    {
        $('#pop-up').hide(); // Now the pop up is hiden.
    });
});