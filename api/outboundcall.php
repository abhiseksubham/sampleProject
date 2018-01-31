<?php


$request=file_get_contents("php://input");
$json= json_decode($request);

$post_data = array(
    'From' => "08039513123",
    'To' => "0".$json->to_ph,
    'CallerId' => "08039513123",
    'TimeLimit' => "",
    'TimeOut' => "",
    'CallType' => "trans" //Can be "trans" for transactional and "promo" for promotional content
);
 
$exotel_sid = "liveupindia"; // Your Exotel SID - Get it from here: http://my.exotel.in/settings/site#api-settings
$exotel_token = "23b63d0bf721312a71da4b3e07c9a56b4d7bc7d9"; // Your exotel token - Get it from here: http://my.exotel.in/settings/site#api-settings
 
$url = "https://".$exotel_sid.":".$exotel_token."@twilix.exotel.in/v1/Accounts/".$exotel_sid."/Calls/connect";
 
$ch = curl_init();
curl_setopt($ch, CURLOPT_VERBOSE, 1);
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_FAILONERROR, 0);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($post_data));
 
$http_result = curl_exec($ch);
$error = curl_error($ch);
$http_code = curl_getinfo($ch ,CURLINFO_HTTP_CODE);
 
curl_close($ch);
 
print_r($http_result);

?>
