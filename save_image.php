<?php 
$imagedata = base64_decode($_POST['imgdata']);
$filename = md5(uniqid(rand(), true));
//path where you want to upload image
$file = $_SERVER['DOCUMENT_ROOT'] . 'uploader/uploads/'.$filename.'.png';
$imageurl  = 'uploader/uploads/'.$filename.'.png';
file_put_contents($file,$imagedata);
echo $imageurl;

?>
