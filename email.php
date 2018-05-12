<?php
// Import PHPMailer classes into the global namespace
// These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
require 'vendor/autoload.php';

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$content = trim(file_get_contents("php://input"));
$content = json_decode($content);

$email = $content->email;
$name = $content->name;
$message = $content->desc;

$mail = new PHPMailer(true);           // Passing `true` enables exceptions
try {                                  // TCP port to connect to

    //Recipients
    $mail->setFrom($email, 'Mailer');
    $mail->addAddress('mmckenna.phila@gmail.com', 'Marty');     // Add a recipient

    //Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'ATMARTY Email';
    $mail->Body    = 'Name: ' . $name . '
    
    ' . 'Email: ' . $email . '
    
    ' . $message;
    $mail->send();
} catch (Exception $e) {
    file_put_contents('logs.txt', print_r($mail->ErrorInfo, true)."\n\n", FILE_APPEND);
}
