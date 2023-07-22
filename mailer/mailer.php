<?php

$contactName=($_POST['name']);
$contactEmail=($_POST['email']);
$contactPhone=($_POST['phone']);
$contactAddress=($_POST['address']);
$contactSubject=($_POST['subject']);
$contactMessage=($_POST['message']);


$to = 'info@weamandcompany.com';
$headers = "From: " . strip_tags("noreply@weamandcompany.com") . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
$subject1  = "New Contact on Weam and Company - '.$contactSubject.'";

$msg1 = '<htm><head><style>';
$msg1 .= '.messageContainer {width:70%; margin:20px auto; padding:20px; background:#fff; box-shadow:2px 2px 5px #666; border-radius:5px;}';
$msg1 .= '</style></head>';
$msg1 .= '<body>';
$msg1 .= '<div class="messageContainer">';
$msg1 .= '<div style="text-align:center; background:#c8e6c9; color:#1b5e20; height:50px; padding:								10px;">';
$msg1 .= '<h2>WEAM AND COMPANY LTD.</h2>';
$msg1 .= '</div>';
$msg1 .= '<p>Hello,</p>';
$msg1 .= '<p>New Contact Message on Weam and Company Website with subject "'.$contactSubject.'"</p>';
$msg1 .= '<p><strong>Name:</strong>  '.$contactName.' </p>';
$msg1 .= '<p><strong>Phone Number:</strong>  '.$contactPhone.' </p>';
$msg1 .= '<p><strong>Email Address: </strong>  '.$contactEmail.' </p>';
$msg1 .= '<p><strong>Phone Number: </strong>  '.$contactPhone.' </p>';
$msg1 .= '<p><strong>Address: </strong>  '.$contactAddress.' </p>';
$msg1 .= '<p><strong>Message: </strong>  '.$contactMessage.' </p>';
$msg1 .= '<p>Thank You !!! </p>';
$msg1 .= '</div>';
$msg1 .= '</body></html>';


$mail = mail($to, $subject1, $msg1, $headers);

echo 'success';
?>
