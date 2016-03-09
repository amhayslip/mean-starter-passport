var users = [];
var firstName = null;

var validateForm = function() {
 var counter = null;
 var f = document.forms["joinus"]["firstname"].value;
 var l = document.forms["joinus"]["lastname"].value;
 var e = document.forms["joinus"]["email"].value;
 var u = document.forms["joinus"]["username"].value;
 var pOne = document.forms["joinus"]["password"].value;
 var pTwo = document.forms["joinus"]["repeatpassword"].value;

 var emailVerificationOne = e.indexOf('@');
 var emailVerificationTwo = e.indexOf('.');

 var specialChar = /^(?=.*[0-9_\W]).+$/;


//First Name validation
 if (f == null || f === "") {
  $(".hidefirst").addClass("show");
  $(".hidefirst").removeClass(".hidefirst");
  counter -= 1;
 } else {
   counter += 1;
 };

 //Last Name Validation
 if (l == null || l === "") {
  $(".hidelast").addClass("show");
  $(".hidelast").removeClass(".hidelast");
  counter -= 1;
 } else {
   counter += 1;
 };

 //Email validation
 if (emailVerificationOne < 0 || emailVerificationTwo < 0 ){
  $(".hideemail").addClass("show");
  $(".hideemail").removeClass(".hideemail");
 counter -= 1;
 } else {
   counter += 1;
 };

 //Username
 if (u.length < 5){
   $(".hideusername").addClass("show");
  $(".hideusername").removeClass(".hideusername");
   counter -= 1;
 } else {
   counter += 1;
 };
 //Password - password must be atleast 8 characters & contain number or special character
 if (pOne == null || pOne.length <= 7 || specialChar.test(pOne) == false){
   $(".hidepassword").addClass("show");
  $(".hidepassword").removeClass(".hidepassword");
   counter -= 1;

 }else {
   counter += 1;
 };

 //Password Match
 if (pTwo == null || pTwo == "" || pOne !== pTwo){
   $(".hiderpassword").addClass("show");
  $(".hiderpassword").removeClass(".hiderpassword");
   counter -= 1;

 }else {
   counter += 1;
 };

 //What form submit does
 if (counter == 6) {
 var user = {
   First: document.forms["joinus"]["firstname"].value,
   Last: document.forms["joinus"]["lastname"].value,
   Email: document.forms["joinus"]["email"].value,
   User: document.forms["joinus"]["username"].value,
   Password: document.forms["joinus"]["password"].value
 };
 users.push(user);

 window.location.assign("congratulations.html");
 }
};

//********** END index.html ***********