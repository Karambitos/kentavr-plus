<?php

/* https://api.telegram.org/bot1043795482:AAH7PT1JjjLUMQvkkFcHmODfriO3P14Y72s
/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$email = $_POST['user_email'];
$message = $_POST['user_message'];

$token = "1043795482:AAH7PT1JjjLUMQvkkFcHmODfriO3P14Y72s";
$chat_id = "-355048322";
$arr = array(
  'Имя: ' => $name,
  'Телефон: ' => $phone,
  'Email:' => $email,
  'Сообщение:' => $message,
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: index.html');
} else {
  echo "Error";
}
?>