angular.module('liveUpIndiaApp.controller', [])
// .controller ('propCntrl', function($scope, urls, $http, $rootScope) {
//
//        	$scope.apiHref = urls.apiHref;
//
// 				var propertyReq = {
//
// 						 "city":"Bangalore",
//
// 						 "type":"fast_selling"
// 						}
//
// 			 console.log(JSON.stringify(propertyReq));
//
// 	$http.post(urls.apiUrl+'property_for_web/', propertyReq).
//            success(function (data, status, headers, config) {
//
//           if(data.resultCode=='SUCCESS'){
//
//                 $scope.searchData = data.Result;
//                console.log($scope.searchData);
//           } else {
//
//            $scope.failureMessage=data.resultData[0].message;
// 			  			console.log($scope.failureMessage);
//
//           		}
//            }).
//            error(function (data, status, headers, config) {
//
//                console.log("error");
//
//            });
//
//
// })
.controller ('featureCntrl', function($scope, urls, $http,cityService,PageTitleService, $window,$state, $rootScope,imageUrl) {
var metadescription="The search for your Dream Home, Apartments, Villas in Bangalore will never be so Easy and Hassle Free - Welcome to LiveUp";



    $('meta[name="description"]').attr('content',metadescription);



                $scope.searchCity=cityService.cityName;
                  $scope.setCity=function(data){
                    console.log(data)
                  localStorage.setItem('city',data);
                  $scope.searchCity=data;



                    $('#myModal').modal('hide');
              $window.location.reload();
                }
			$scope.goto= function (data) {
				console.log(data);
           $scope.activeTab=data;
				 var propertyReq = {

						 "city":$scope.searchCity,

						 "type":data
						}

			 console.log(JSON.stringify(propertyReq));
	console.log(urls.apiUrl+'property_for_web/');
	$http.post(urls.apiUrl+'property_for_web/', propertyReq).
            success(function (data, status, headers, config) {

           if(data.resultCode=='SUCCESS'){

                 $scope.searchinfo = data.Result;

                console.log($scope.searchinfo);
           } else {

            $scope.failureMessage=data.Result[0].message;
			  			console.log($scope.failureMessage);

           		}
            }).
            error(function (data, status, headers, config) {

                console.log("error");

            });
			}

      $scope.activeTab='fast_selling';
		$scope.goto('fast_selling') ;
	//$scope.goto('top_builder') ;

        	$scope.apiHref = urls.apiHref;
			$scope.imageUrl1= imageUrl.imageBaseUrl;

				var featureReq = {

								  "city":$scope.searchCity,
                   "type":'top_builder'

								}


		 console.log(JSON.stringify(featureReq));

	$http.post(urls.apiUrl+'developer_for_web/', featureReq).
            success(function (data, status, headers, config) {
              console.log(data)

           if(data.resultCode=='SUCCESS'){

                $scope.searchData = data.Result;

            console.log($scope.searchData);
  

           } else {

            $scope.failureMessage=data.resultDetails;
			  			console.log($scope.failureMessage);

           		}
            }).
            error(function (data, status, headers, config) {

                console.log("error");

            });
	// 		var topReq = {

	// 					 "city":$scope.searchCity,

	// 					 "type":'top_builder'
	// 					}

	// 		 console.log(JSON.stringify(topReq));

	// $http.post(urls.apiUrl+'property_for_web/', topReq).
 //            success(function (data, status, headers, config) {

 //           if(data.resultCode=='SUCCESS'){

 //                 $scope.topData = data.Result;

 //                console.log($scope.topData);
 //           } else {

 //            $scope.failureMessage=data.Result[0].message;
	// 		  			console.log($scope.failureMessage);

 //           		}
 //            }).
 //            error(function (data, status, headers, config) {

 //                console.log("error");

 //            });


	$http.post('json/popularcity.json').
	success(function (data, status, headers, config) {
console.log("popularcity")
console.log(data)
                 $scope.topcity = data;

                console.log($scope.topcity);

           
           }
            ).
            error(function (data, status, headers, config) {

                console.log("error");

            });

    				// var hotpropertyReq = {
        //               "type":"hot_project"
        //              }

        //     			 console.log(JSON.stringify(hotpropertyReq));
        //            console.log(urls.apiUrl+'propery_gallery/');
        //     	$http.post(urls.apiUrl+'propery_gallery/', hotpropertyReq).
        //                success(function (data, status, headers, config) {

        //               if(data.resultCode=='SUCCESS'){

        //                     $scope.hotpropData = data.Result;
        //                    console.log($scope.hotpropData);
        //               } else {

        //                $scope.failureMessage=data.Result[0].message;
        //     			  			console.log($scope.failureMessage);

        //               		}
        //                }).
        //                error(function (data, status, headers, config) {

        //                    console.log("error");

        //                });

         // var topbuildersReq = {
         //           "type":"top_builders "
         //          }

         // 			 console.log(JSON.stringify(topbuildersReq));
         //        console.log(urls.apiUrl+'propery_gallery/');
         // 	$http.post(urls.apiUrl+'propery_gallery/', topbuildersReq).
         //            success(function (data, status, headers, config) {

         //           if(data.resultCode=='SUCCESS'){

         //                 $scope.topbuildersData = data.Result;
         //                console.log($scope.topbuildersData);
         //           } else {

         //            $scope.failureMessage=data.Result[0].message;
         // 			  			console.log($scope.failureMessage);

         //           		}
         //            }).
         //            error(function (data, status, headers, config) {

         //                console.log("error");

         //            });

         //    var resaleReq = {
         //              "type":"top_builders "
         //             }

         //          console.log(JSON.stringify(resaleReq));
         //           console.log(urls.apiUrl+'propery_gallery/');
         //     $http.post(urls.apiUrl+'propery_gallery/', resaleReq).
         //               success(function (data, status, headers, config) {

         //              if(data.resultCode=='SUCCESS'){

         //                    $scope.resaleData = data.Result;
         //                   console.log($scope.resaleData);
         //              } else {

         //               $scope.failureMessage=data.Result[0].message;
         //                 console.log($scope.failureMessage);

         //                 }
         //               }).
         //               error(function (data, status, headers, config) {

         //                   console.log("error");

         //               });


                      
$scope.getenquiry=function(user){
                    console.log(user);
                

                    // if(user.fd_issue==""){
                    //  var fd_issue="undefined";
                    // }else{
                    //      var fd_issue=user.issue;
                    // }

                    var userenquirydata =
                            {
                              "type":"enquiry_feedback",
                              "name":user.name,
                              "email":user.email,
                              "phone":user.phonenumber,
                              "message":user.msg,
                              
                              "propertyType":user.proptype,
                              "bhkDropDown":user.bhk,
                                "propertyPrice":user.price,
                                "timeToCall":user.time,
                                "reference":user.ref

                            }

                    console.log("============userenquirydata request==========");
                    console.log(JSON.stringify(userenquirydata));
                    console.log("--------------------------------");


                    console.log("============userenquirydata Request link==========");
                    console.log(urls.apiEnquiry + 'enquiry.php?action=enquiry_feedback');
                    console.log("--------------------------------");
                    //localhost/liveupindia/api/enquiry.php?action=enquiry_feedback

                    $rootScope.myApp.showPleaseWait();

                    $http.post(urls.apiEnquiry + 'enquiry.php?action=enquiry_feedback', userenquirydata, {
                            headers: {
                                'Content-Type': 'application/json'
                            }
                        })
                        .success(function (data, status, headers, config) {

                 
                            console.log("============userenquirydata Success response==========");
                            console.log(JSON.stringify(data));
                            console.log("--------------------------------");
                            $scope.userenquiryData = data;


       $('#myfeedback').modal('hide');
                            if(data.result_type=="feedback"){
                                if(data.result=='success'){
                                    $scope.resultMsg='Thank you for Your Feedback.';
                                $state.go('enquiryresult',{
                                    resultcode:1
                                });
                                    }else{
                                        $scope.resultMsg='Please Try Again Later';
                                    }
                                // $('#modalResultFeedback').modal('show');
                            }else{

                                if(data.result=='success'){
                                    var resultCode='1';
                                    }else{
                                        var resultCode='0';
                                    }

                                $state.go('enquiryresult',{
                                    resultcode:resultCode
                                });
                            }


                       $rootScope.myApp.hidePleaseWait();

                        }).error(function (data, status, headers, config) {
                        console.log("error");
                        $state.go('enquiryresult',{
                                    resultcode:0
                                });
                        $scope.resFail="Please try again";
                        $rootScope.myApp.hidePleaseWait();
                         // $('#modalResultEnquiry').modal('show');


                    });


                }



})
.controller ('listdetailCntrl', function($scope, urls, $http,cityService, $window,$state,$stateParams, $rootScope,imageUrl) {

console.log("listdetailCntrl")
  $scope.apiHref = urls.apiHref;
      $scope.imageUrl1= imageUrl.imageBaseUrl;
     $scope.searchCity=cityService.cityName;
     var data=$stateParams.type;
    if(data=='ready_to_move')
        $scope.textShow="Ready to Move";
    if(data=='fast_selling')
        $scope.textShow="Fast Selling Properties";
    if(data=='upcoming')
        $scope.textShow="Launch";
   
        console.log(data);
     
         var propertyReq = {

             "city":$scope.searchCity,

             "type":data
            }

$rootScope.myApp.showPleaseWait();
       console.log(JSON.stringify(propertyReq));
  console.log(urls.apiUrl+'property_for_web/');
  $http.post(urls.apiUrl+'property_for_web/', propertyReq).
            success(function (data, status, headers, config) {
$rootScope.myApp.hidePleaseWait();
           if(data.resultCode=='SUCCESS'){

                 $scope.searchinfo = data.Result;

                console.log($scope.searchinfo);
           } else {

            $scope.failureMessage=data.Result[0].message;
              console.log($scope.failureMessage);

              }
            }).
            error(function (data, status, headers, config) {
$rootScope.myApp.hidePleaseWait();
                console.log("error");

            });
    


        

})
