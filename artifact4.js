function ValidateForm()
{
 var validFirstname = false;
 var validLastname = false;
 var validEmail = false;
 var validPhone = false;
 var validUsername = false;
 var validPassword = false;
 var validAddress = false;
 var validCity = false;
 var validZip = false;

 var letters = /^[A-Za-z]+$/;
 var numbers = /^[0-9]+$/;

 var errorMessages ="";  // All the error messages are going to stay in this variable
 /*********** VALIDATES USERNAME ******** */
 //Required field
//This syntax is using name-of-form.name-of-field.value
// You can also use document.getElementById("id-of-field").value


/*********** VALIDATES FIRSTNAME ******** 
 * required and max 20 char */
 if (myContact.firstname.value.length > 20 || !myContact.firstname.value.match(letters) || myContact.firstname.value==null || myContact.firstname.value=="")
 errorMessages += "<p>The first name is required and must be letters only and up to 20 characters</p>";
 else 
 validFirstname =true;
 console.log(validFirstname);  

 /*********** VALIDATES LASTNAME ******** 
 * required and max 50 char */
 if (myContact.lastname.value.length > 50 || !myContact.lastname.value.match(letters) || myContact.lastname.value==null || myContact.lastname.value=="")
 errorMessages += "<p>The last name is required and must be letters only and up to 50 characters</p>";
 else 
 validLastname =true;
 console.log(validLastname);  

//  /*********** VALIDATES EMAIL ******** 
//  * required and max 15 char */
//  if (myContact.email.value==null || myContact.email.value=="")
//  errorMessages += "<p>The email address is required and must be a valid email</p>";
//  else 
//  validEmail =true;
//  console.log(validEmail);  

     var x = document.getElementById("email").value;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=x.length) 
        errorMessages += "<p>Email is required and must be a valid e-mail address</p>";
    else
    validEmail = true;
    
    console.log(validEmail);

/*********** VALIDATES PHONE ******** 
 * required and max 15 char */
 if (myContact.phone.value.length > 15 ||!myContact.phone.value.match(numbers) || myContact.phone.value==null || myContact.phone.value=="")
 errorMessages += "<p>The phone number is required and must be all numbers and up to 15 characters</p>";
 else 
 validPhone =true;
 console.log(validPhone);  


/*********** VALIDATES USERNAME ******** 
 * required and max 12 char */
 if (myContact.username.value.length > 12 || myContact.username.value==null || myContact.username.value=="")
 errorMessages += "<p>The username is required and must be up to 12 characters</p>";
 else 
 validUsername =true;

 console.log(validUsername);  

 /*********** VALIDATES PASSWORD ******** */
 if (myContact.password.value==null ||
 myContact.password.value== "" ||
 myContact.password.value.length >7)
 errorMessages += "<p>The password is required and must be up to 7 characters</p>";
 else
 validUserPassword = true; 

console.log(validPassword);

/*********** VALIDATES ADDRESS ******** 
 * required  */
 if (myContact.address.value==null || myContact.address.value=="")
 errorMessages += "<p>The address is required</p>";
 else 
 validAddress =true;

 console.log(validAddress);  

/*********** VALIDATES CITY ******** 
 * required  */
 if (myContact.city.value==null || myContact.city.value=="")
 errorMessages += "<p>The city is required</p>";
 else 
 validCity =true;

 console.log(validCity);  

 /*********** VALIDATES ZIP CODE ******** 
 * required if in USA */
 if (myContact.countries.value=="United States" && myContact.zipcode.value=="")
 errorMessages += "<p>The zip code is required for addresses in the United States and is 5 numbers</p>";
 else 
 validZip =true;

 console.log(validAddress);  

 document.getElementById("errorMessages").innerHTML = errorMessages;
// Make sure you return all the boolean variables that are checking each field
 return (validFirstname && validLastname && validEmail && validPhone && validUsername 
 && validUserPassword && validEmail && validAddress && validCity && validZip);

}0");