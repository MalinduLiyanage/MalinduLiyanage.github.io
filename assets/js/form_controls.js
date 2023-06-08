function validate() {
	name_text = document.getElementById('name_input').value;
	email_text = document.getElementById('email_input').value;
	msg_text = document.getElementById('msg_input').value;

	if(name_text.length < 5){
		Swal.fire({
	    	title: 'Error!',
	    	text: 'Please enter a valid name!',
	    	icon: 'error'
	  	});
	}
	else if (!email_text.includes("@")) {
		Swal.fire({
	    	title: 'Error!',
	    	text: 'Please Enter a valid Email!',
	    	icon: 'error'
	  	});
	}
	else if(msg_text.length < 20){
		Swal.fire({
	    	title: 'Error!',
	    	text: 'Please Enter a valid Message!',
	    	icon: 'error'
	  	});
	}else{
		Swal.fire({
	    	title: 'Done!',
	    	text: 'Your message recorded successfully!',
	    	icon: 'success'
	  	});
	}
}