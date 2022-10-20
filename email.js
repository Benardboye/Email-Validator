function ValidateEmail(input) {

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
    if (input.value.match(validRegex)) {
  
      alert("Valid email address!");
  
      document.form1.text1.focus();
  
      return true;
  
    } else {
  
      alert("Invalid email address!");
  
      document.form1.text1.focus();
  
      return false;
  
    }
  
  }

  dns.resolve(domain, 'MX', function(err, addresses) {    
    if (err) {
       console.log('No MX record exists, so email is invalid.');    
   } else if (addresses && addresses.length > 0) {      
       console.log('This MX records exists So I will accept this email as valid.');
   }