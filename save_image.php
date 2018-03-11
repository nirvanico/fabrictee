<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

include_once 'vendor/autoload.php';

if($_POST['form_key'] != $_SESSION['form_key']) {
    die('Sessione non valida');
}

$mail = new PHPMailer(true);
$mail->isSMTP();
$mail->Host = 'in-v3.mailjet.com';
$mail->SMTPAuth = true;
$mail->Username = 'fb845eb73c85fe105374af00436e6269';
$mail->Password = 'd893db3a203023fd814faafc363856f8';
$mail->SMTPSecure = 'tls';
$mail->Port = 587;

$image = $_POST['imgbase64'];
    echo "<img src='$image' alt='image' />";
    $screendir = "saved_img";
    $name = time();

    $image = str_replace('data:image/png;base64,', '', $image);
    $decoded = base64_decode($image);

    file_put_contents($screendir . "/" . $name . ".png", $decoded, LOCK_EX);

    $mail->setFrom('fabdan.service@gmail.com', 'Fabrictee');
    $mail->addAddress('fabiodaniele01@gmail.com', 'Joe User');
    $mail->addAttachment($screendir . "/" . $name . ".png");
    $mail->isHTML(true);
    $mail->Subject = 'Ciaone!';
    $mail->Body = 'This is the HTML message body <b>in bold!</b>';
    $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';
    $mail->send();
    
    echo $image; 


?>
