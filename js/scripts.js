const init = function() {
	document.getElementById('btn-form-text').addEventListener('click', send)
}

const send = function(ev){

	ev.preventDefault();

	const fname = document.getElementById("fname").value
	const lname = document.getElementById("lname").value
	const email = document.getElementById("email").value
	const subject = document.getElementById("subject").value

	if (fname === '' || lname === '' || email === '' || subject === '') {
		alert("Please fill the form")
	} else {
		Email.send({
			Host: "smtp.elasticemail.com",
			Username: "rbngrcdzwebpage@gmail.com",
			Password: "66A6D510C31C0CAC7C08DF5F6B6CC27898C4",
			From: "rbngrcdzwebpage@gmail.com",
			To: 'rubengarciarbngrc@gmail.com',
			Subject: "EMAIL DE LA WEB",
			Body: `${fname} ${lname} con correo ${email} te ha escrito a la web para decirte: ${subject}`
		})
		.then(function (message) {
			alert("Successfully sent. I will get in touch as soon as possible :)")
		});
	}

	document.getElementById('contact-form').reset();
}

document.addEventListener('DOMContentLoaded', init);