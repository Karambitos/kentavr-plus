<?php

$method = $_SERVER['REQUEST_METHOD'];
//Script Foreach
	$project_name = 'KentavrPlus';
	$admin_email  = 'V.Pasechnik@kharkov-himprom.com';
	$form_subject = 'Заявка с сайта';

$c = true;
	foreach ( $_POST as $key => $value ) {
		if ( $value != "" && $key != "project_name" && $key != "admin_email" && $key != "form_subject" ) {
			$message .= "
			" . ( ($c = !$c) ? '<tr>':'<tr style="background-color: #f8f8f8;">' ) . "
				<td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$key</b></td>
				<td style='padding: 10px; border: #e9e9e9 1px solid;'>$value</td>
			</tr>
			";
		}
	}

$message = "<table style='width: 100%;'>$message</table>";
function adopt($text) {
	return '=?UTF-8?B?'.Base64_encode($text).'?=';
}
$headers = 'From: pase4nikdv@gmail.com' . "\r\n" .
		   "MIME-Version: 1.0" . PHP_EOL .
		   "Content-Type: text/html; charset=utf-8" . PHP_EOL .
		   'Reply-To: '.$admin_email.'' . PHP_EOL;

mail($admin_email, adopt($form_subject), $message, $headers );


