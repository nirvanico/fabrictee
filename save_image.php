<?php
$data = $_POST['data'];
$data = substr($data,strpos($data,",")+1);
$data = base64_decode($data);
$file = 'output.png';
file_put_contents($file, $data);
echo "Success!"
/*
	// requires php5
	define('UPLOAD_DIR', 'saved_img/');
	$img = $_POST['imgdata'];
	$img = str_replace('data:image/png;base64,', '', $img);
	$img = str_replace(' ', '+', $img);
	$data = base64_decode($img);
	$file = UPLOAD_DIR . uniqid() . '.png';
	$success = file_put_contents($file, $data);
	print $success ? $file : 'Unable to save the file.'; */
?>
