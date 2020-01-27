<?php
if (isset($_POST['g-recaptcha-response']) && $_POST['g-recaptcha-response']!='') {
    $captcha=$_POST['g-recaptcha-response'];
	  $key = '6LfSzskUAAAAAJum4wD5_1vVmvDCGwLPG2H-czT0';
    $ip=$_SERVER['REMOTE_ADDR'];
	  $rsp=file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=$key&response=$captcha&remoteip=$ip");
    $arrCaptcha = json_decode($rsp);
    if ($arrCaptcha->success) {
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
            echo "ok";
        } else {
            echo "Error";
        }
        }
    else {
        echo('Вы не прошли валидацию reCaptcha');
    }
}
else {
echo('error');
die();
}
?>
