<?php

//Load Composer's autoloader
require './vendor/autoload.php';

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

$content = trim(file_get_contents("php://input"));
$content = json_decode($content);

$email = $content->email;
$name = $content->name;
$message = $content->desc;

$mail = new PHPMailer(true); // Passing `true` enables exceptions
try {
    //Recipients
    $mail->setFrom('mmckenna.phila@gmail.com', 'Mailer');
    $mail->addAddress('mmckenna.phila@gmail.com', 'Marty');

    //Content
    $mail->isHTML(true);
    $mail->Subject = 'ATMARTY Email';
    $mail->Body = '<h3>Name: ' . $name . '</h3><h3>Email: ' . $email . '</h3><p>' . $message . '</p>';
    $mail->send();
    $response = array('status' => 'success', 'message' => 'Email sent successfully');
    echo json_encode($response); // return json response to client
} catch (Exception $e) {
    file_put_contents('logs.txt', print_r($mail->ErrorInfo, true)."\n\n", FILE_APPEND); // put error in logs.txt
    $err_response = array('status' => 'error', 'message' => $e->getMessage());
    echo json_encode($err_response); // send error json
    http_response_code(400); // send 400 response
}
