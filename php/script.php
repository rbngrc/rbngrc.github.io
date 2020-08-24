<?php
    $name = $_POST['firstname'];
    $lastName = $_POST['lastname'];
    $email = $_POST['email'];
    $message = $_POST['subject'];


    $email_from = 'rbngarcia60@gmail.com';
    $email_subject = "FORMULARIO WEB";
    $email_body = "De: $name - $lastName \n" "Email de contacto: $email \n" "MENSAJE: $message \n" ;

    $to = "rubengarciarbngrc@gmail.com";
    $headers = "From: $email_from \r\n";
    // $headers = "Reply-To: $email \r\n";

    mail($to, $email_subject, $email_body, $headers);
    header("Location: form.html");

?>
