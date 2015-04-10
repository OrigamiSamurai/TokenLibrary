<?php
$target_dir = "/home3/orisam/public_html/kreutzlandry/images/tokenlibraryuploads/";
$target_fileName = basename($_FILES["imageFile"]["name"]);
$target_filePath = $target_dir . $target_fileName;

$uploadOk = 1;
$imageFileType = pathinfo($target_filePath,PATHINFO_EXTENSION);
$json = array('Status' => '','Message' => '','ImageUrl' =>'');
// Check if image file is a actual image or fake image
if(isset($_POST["submit"])) {
    $check = getimagesize($_FILES["imageFile"]["tmp_name"]);
    if($check !== false) {
        $json["Message"] = "File is an image - " . $check["mime"] . ".";
        $uploadOk = 1;
    } else {
        $json["Status"] = "Fail";
        $json["Message"] = "File is not an image.";
        $uploadOk = 0;
    }
}
// Check if file already exists
if (file_exists($target_filePath)) {
    //$json["Status"] = "Fail";
    //$json["Message"] = "Sorry, file already exists.";
    //$uploadOk = 0;
	  $target_fileName = date_timestamp_get(date_create()) . $target_fileName;
	  $target_filePath = $target_dir . $target_fileName;
}
 // Check file size
if ($_FILES["imageFile"]["size"] > 500000) {
    $json["Status"] = "Fail";
    $json["Message"] = "Sorry, your file is too large.";
    $uploadOk = 0;
}
// Allow certain file formats
if($imageFileType != "jpg" && $imageFileType != "jpeg") {
    $json["Status"] = "Fail";
    $json["Message"] = "Sorry, only JPG & JPEG files are allowed.";
    $uploadOk = 0;
}

// Check if $uploadOk is set to 0 by an error
if ($uploadOk == 0) {
    $json["Status"] = "Fail";
    $json["Message"] .= " Sorry, your file was not uploaded.";
// if everything is ok, try to upload file
} else {
    if (move_uploaded_file($_FILES["imageFile"]["tmp_name"], $target_filePath)) {
        $json["Status"] = "Success";
        $json["Message"] = "The file ". basename( $_FILES["imageFile"]["name"]). " has been uploaded.";
        $json["ImageUrl"] = "http://www.kreutzlandry.com/images/tokenlibraryuploads/" . basename($_FILES["imageFile"]["name"]);
    } else {
        $json["Status"] = "Fail";
        $json["Message"] = "Sorry, there was an error uploading your file.";
    }
}

echo json_encode($json);

?>