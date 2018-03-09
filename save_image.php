<?php

    $image = $_POST['imgbase64'];
    echo "<img src='$image' alt='image' />";
    $screendir = "saved_img";
    $name = time();



    $image = str_replace('data:image/png;base64,', '', $image);
    $decoded = base64_decode($image);

    file_put_contents($screendir . "/" . $name . ".png", $decoded, LOCK_EX);
    
    echo $image; 


?>
