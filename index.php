<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $query = $_POST["query"];
    
    // Send an email with the form data (you need to configure your email settings)
    $to = "jameskurmalaulmajhok@gmail.com";
    $subject = "New Query from $name";
    $message = "Name: $name\nEmail: $email\nQuery: $query";
    
    mail($to, $subject, $message);

    // Optionally, you can redirect the user to a thank-you page
    header("Location: thank_you.html");
}

