<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type, X-Requested-With");
header("Access-Control-Allow-Credentials: true");

// Handle preflight requests (OPTIONS method)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
   header("Access-Control-Allow-Headers: Content-Type, X-Requested-With");
   header("Access-Control-Max-Age: 86400");
   exit();
}

$data = json_decode(file_get_contents('php://input'), true);

$contactName = ($data['name']);
$contactEmail = ($data['email']);
$contactPhone = ($data['phone']);
$contactSubject = ($data['subject']);
$contactMessage = ($data['message']);


// $to = 'info@weamandcompany.com';
$to = 'afuwapesunday12@gmail.com';
$headers = "From: " . strip_tags("noreply@weamandcompany.com") . "\r\n";
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$subject1  = "New Contact on Weam and Company - {$contactSubject}";

$msg1 = <<<EOT
<!DOCTYPE html>
<html>
<head>
  <style>
    .messageContainer {
      width: 90%;
      margin: 20px auto;
      padding: 20px;
      background: #fff;
      box-shadow: 2px 2px 5px #666;
      border-radius: 5px;
    }
  </style>
</head>
<body>
  <div class="messageContainer">
    <div style="text-align: center; background: #c8e6c9; color: #1b5e20; height: 60px; padding: 10px;">
      <h2>WEAM AND COMPANY LTD.</h2>
    </div>
    <p>Hello,</p>
    <p>New Contact Message on Weam and Company Website with subject {$contactSubject}</p>
    <p><strong>Name:</strong> {$contactName} </p>
    <p><strong>Phone Number:</strong> {$contactPhone} </p>
    <p><strong>Email Address:</strong> {$contactEmail} </p>
    <p><strong>Phone Number:</strong> {$contactPhone} </p>
    <p><strong>Message:</strong> {$contactMessage} </p>
    <p>Thank You !!! </p>
  </div>
</body>
</html>
EOT;

$mail = mail($to, $subject1, $msg1, $headers);

echo json_encode([
   'status' => (bool) $mail,
]);
