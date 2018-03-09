<?php
/*
	// requires php5
	define('UPLOAD_DIR', 'saved_img/');
	$img = $_POST['imgbase64'];
	$img = str_replace('data:image/png;base64,', '', $img);
	$img = str_replace(' ', '+', $img);
	$data = base64_decode($img);
	$file = UPLOAD_DIR . uniqid() . '.png';
	$success = file_put_contents($file, $data);
	print $success ? $file : 'Unable to save the file.'; */


    $image = $_POST['imgbase64'];
    $filedir = $_POST['saved_img'];
    $name = time();



    $image = str_replace('data:image/png;base64,', '', $image);
    $decoded = base64_decode($image);

    file_put_contents($filedir . "/" . $name . ".png", $decoded, LOCK_EX);


   
?>
