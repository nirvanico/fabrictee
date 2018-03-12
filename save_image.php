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
$mail->Username = '400cd914dd1a441953ca14ebceb3abfa';
$mail->Password = 'ff6a3890d79c1027c5d8378ecb6429a4';
$mail->SMTPSecure = 'tls';
$mail->Port = 587;

$image = $_POST['imgbase64'];
$email = $_POST['email'];
    
    echo "<img src='$image' alt='image' />";
    $screendir = "saved_img";
    $name = time();

    $image = str_replace('data:image/png;base64,', '', $image);
    $decoded = base64_decode($image);

    file_put_contents($screendir . "/" . $name . ".png", $decoded, LOCK_EX);

    $mail->setFrom('fear.nirva@gmail.com', 'Fabrictee');
    $mail->addAddress('fear.nirva@gmail.com', 'Umberto Bon');
    $mail->AddCC($email);
    $mail->addAttachment($screendir . "/" . $name . ".png");
    $mail->isHTML(true);
    $mail->Subject = 'Richiesta preventivo';
    $mail->Body ='Una richiesta di preventivo a nome di '.$_POST['nome'].' '.$_POST['cognome'].' con e-mail ' .$_POST['email'].' richiede con la grafica allegata, la seguente quantità di t-shirt'.' '.$_POST['quantita'].' del colore '.$_POST['colore'];
    $mail->send();
    
    echo $image; 


?>
