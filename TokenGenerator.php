<?php

$incoming_json = file_get_contents('php://input');
$incoming_json_parsed = json_decode($incoming_json);
$command = $incoming_json_parsed->command;
$raw_payload = $incoming_json_parsed->payload;
$payload = json_decode($raw_payload);
    


switch  ($command) {
  case "CreatePortrait":

    $targ_w = $payload->destinationWidth;
    $targ_h = $payload->destinationHeight;
    $jpeg_quality = 90;

    $src = $payload->sourceUrl;
    $img_r = imagecreatefromjpeg($src);
    $dst_r = ImageCreateTrueColor($targ_w, $targ_h);

    // set background to white
    imagecopyresampled($dst_r,$img_r,0,0,$payload->sourceXStart,$payload->sourceYStart,
    $targ_w,$targ_h,$payload->sourceCropWidth,$payload->sourceCropHeight);

    //block and collect output into buffer
    ob_start();
    imagejpeg($dst_r, null, $jpeg_quality);
    //grab image from output buffer
    $imageData = ob_get_contents();
    ob_clean();

    //return base64 encoded image data for use by front end
    echo base64_encode($imageData);
    break;
  case "CreateToken":

    $targ_w = $payload->destinationWidth;
    $targ_h = $payload->destinationHeight;
    $jpeg_quality = 90;

    $src = $payload->sourceUrl;
    $img_r = imagecreatefromjpeg($src);
    $dst_r = ImageCreateTrueColor( ($targ_w*2)+22, $targ_h+2);

    // set background to white
    $white = imagecolorallocate($dst_r, 255, 255, 255);
    $grey = imagecolorallocate($dst_r,200,200,200);
    imagefill($dst_r, 0, 0, $white);
    imagerectangle($dst_r,0,0,($targ_w*2)+21, $targ_h+1,$grey);

    imagecopyresampled($dst_r,$img_r,11,1,$payload->sourceXStart,$payload->sourceYStart,
    $targ_w,$targ_h,$payload->sourceCropWidth,$payload->sourceCropHeight);
    imagecopyresampled($dst_r,$img_r,11+$targ_w,1,$payload->sourceXStart,$payload->sourceYStart,
    $targ_w,$targ_h,$payload->sourceCropWidth,$payload->sourceCropHeight);

    //block and collect output into buffer
    ob_start();
    imagejpeg($dst_r, null, $jpeg_quality);
    //grab image from output buffer
    $imageData = ob_get_contents();
    ob_clean();

    //return base64 encoded image data for use by front end
    echo base64_encode($imageData);
    break;
}



?>