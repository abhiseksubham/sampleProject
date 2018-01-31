<?php 
header('Access-Control-Allow-Origin: http://localhost/*');
header('Access-Control-Allow-Origin: *');
header('content-type: application/json; charset=utf-8');
include_once "json.php";
include_once "mail/mail.php";


$action=$_REQUEST['action'];
$requestBody = file_get_contents("php://input");

$groupsSvr=new groupsSvr();

switch($action)
 {
	case 'enquiry_feedback': $groupsSvr->enquiry($requestBody);
					break;
    
 }

class groupsSvr{
	
	function __construct()
       {
		
		$this->jsonObj=new Json();
		$this->mail=new Mail();
	   }  
	
	function enquiry($requestBody)
 {

		$json = $this->jsonObj->getJSONObject($requestBody);
		$type=$json->type;
		$name=$json->name;
		$email=$json->email;
		$phone=$json->phone;
		$message=$json->message;
		$fd_issue=$json->fd_issue;
		$property_type =$json->propertyType;
		$bhk_drop_down =$json->bhkDropDown;
		$property_price =$json->propertyPrice;
		$time_to_call=$json->timeToCall;
		$reference=$json->reference;
		$to['email']="enquiry@liveupindia.com";
		//$to['email']="sunilgaja7@gmail.com";
		
		$subject="Enquiry form";
		if($fd_issue=='undefined'){
		$subject="Enquiry form";
		$body="Name: ".$name."<br>Email:".$email."<br>Phone Number: ".$phone."<br>Message: ".$message ; }
		else{
			$subject="Feedback form";
			$body="Name: ".$name."<br>Email:".$email."<br>Phone Number: ".$phone."<br>Property Type: ".$property_type."<br>BHK-Drop down : ".$bhk_drop_down."<br>Property Price: ".$property_price."<br>Good Time to Call : ".$time_to_call."<br>Message: ".$message."<br>Refrence: ".$reference."<br>Feedback Issue: ".$fd_issue; }
		
		$result=$this->mail->sendMail($to,$subject,$body);
		
          if ($result=='1')
    {       
            $json_response=
                   '{
					  "type":"enquiry_feedback",
					  "result":"success",
					  ';
			           if($fd_issue=='undefined'){ $json_response.= ' "result_type":"enquiry", ' ; }
				       else { $json_response.= ' "result_type":"feedback", ' ;}
			
			           $json_response.=' "message":"Thank you for enquiry, will get back to you shortly"
					
					}';

		
    }
    
        else
      {
        $json_response=
        '{ 
			 "type":"enquiry_feedback",
			 "result":"failure",';
			    if($fd_issue=='undefined'){ $json_response.= ' "result_type":"enquiry", ' ; }
				else { $json_response.= ' "result_type":"feedback", ' ;}
			 
			  $json_response.=' "message":"Please try again later."
					
					}';
			 
	     
        
		
		
      }
    echo $json_response;
    
 }
   
}
?>