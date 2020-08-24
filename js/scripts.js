//index.js  
function sendEmail() {
	Email.send({
	Host: "smtp.gmail.com",
	Username : "rbngarcia60@gmail.com",
	Password : "NN5gZbfLB4jsFxBKGE3E",
	To : 'rubengarciarbngrc@gmail.com',
	From : "rbngarcia60@gmail.com",
	Subject : "WEB FORM",
	Body : "<email body>",
	}).then(
		message => alert("mail sent successfully")
	);
}