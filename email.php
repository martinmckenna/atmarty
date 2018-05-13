<?php

//Load Composer's autoloader
require './vendor/autoload.php';

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$content = trim(file_get_contents("php://input"));
$content = json_decode($content);

$email = $content->email;
$name = $content->name;
$message = $content->desc;

$mail = new PHPMailer(true); // Passing `true` enables exceptions
try {

    //Recipients
    $mail->setFrom('marty@atmarty.com', 'Mailer');
    $mail->addAddress('mmckenna.phila@gmail.com', 'Marty');

    //Content
    $mail->isHTML(true);
    $mail->Subject = 'ATMARTY Email';
    $mail->Body = '<h3>Name: ' . $name . '</h3><h3>Email: ' . $email . '</h3><p>' . $message . '</p>';
    $mail->send();
    file_put_contents('logs.txt', print_r($mail, true)."\n\n", FILE_APPEND);
    echo "mail sent!";
} catch (Exception $e) {
    file_put_contents('logs.txt', print_r($mail->ErrorInfo, true)."\n\n", FILE_APPEND);
    echo $mail->ErrorInfo;
}
