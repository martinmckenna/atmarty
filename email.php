<?php

//Load Composer's autoloader
require './vendor/autoload.php';

// ini_set('display_errors', 1);
// ini_set('display_startup_errors', 1);
// error_reporting(E_ALL);

$origin = $_SERVER['HTTP_ORIGIN'];
$allowed_domains = [
    'http://localhost:3000',
    'https://www.atmarty.com',
    'http://www.barcart.net',
];

if (in_array($origin, $allowed_domains)) {
    header('Access-Control-Allow-Origin: ' . $origin);
}

// Allow from any origin
if (isset($_SERVER['HTTP_ORIGIN'])) {
  header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
  header('Access-Control-Allow-Credentials: true');
  header('Access-Control-Max-Age: 86400');    // cache for 1 day
}

  // Access-Control headers are received during OPTIONS requests
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
  if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
      header("Access-Control-Allow-Methods: GET, POST, OPTIONS");         

  if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
      header("Access-Control-Allow-Headers:        {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

  exit(0);
}

$content = trim(file_get_contents("php://input"));
$content = json_decode($content);

$email = $content->email;
$name = $content->name;
$message = $content->desc;

$mail = new PHPMailer(true); // Passing `true` enables exceptions
try {
    if (!$email) {
        throw new Exception('missing "email" field');
    }
    if (!$name) {
        throw new Exception('missing "name" field');
    }
    if (!$message) {
        throw new Exception('missing "desc" field');
    }

    //Recipients
    $mail->setFrom('mmckenna.phila@gmail.com', 'Mailer');
    $mail->addAddress('mmckenna.phila@gmail.com', 'Marty');

    //Content
    $mail->isHTML(true);
    $mail->Subject = 'ATMARTY Email';
    $mail->Body = '<h3>Name: ' . $name . '</h3><h3>Email: ' . $email . '</h3><p>' . $message . '</p>' . '<p>' . $_SERVER['HTTP_REFERER'] . '</p>';
    $mail->send();
    $response = array('status' => 'success', 'message' => 'Email sent successfully');
    echo json_encode($response); // return json response to client
} catch (Exception $e) {
    file_put_contents('logs.txt', print_r($mail->ErrorInfo, true)."\n\n", FILE_APPEND); // put error in logs.txt
    $err_response = array('status' => 'error', 'message' => $e->getMessage());
    echo json_encode($err_response); // send error json
    http_response_code(400); // send 400 response
}