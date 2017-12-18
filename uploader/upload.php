<?php
if(isset($_POST) == true){
    //generate unique file name
    $fileName = time().'_'.basename($_FILES["file"]["name"]);
    
    //file upload path
    $targetDir = "uploads/";
    $targetFilePath = $targetDir . $fileName;
    
    //allow certain file formats
    $fileType = pathinfo($targetFilePath,PATHINFO_EXTENSION);
    $allowTypes = array('jpg','png','jpeg','gif');
    
    if(in_array($fileType, $allowTypes)){
        //upload file to server
        if(move_uploaded_file($_FILES["file"]["tmp_name"], $targetFilePath)){
            //insert file data into the database if needed
            //........
            $response['status'] = 'ok';
            // @FabDan
            $response['url'] = 'uploader/'.$targetFilePath;
            // fine @FabDan
        }else{
            $response['status'] = 'err';
        }
    }else{
        $response['status'] = 'type_err';
    }
    
    //render response data in JSON format
    echo json_encode($response);
}
