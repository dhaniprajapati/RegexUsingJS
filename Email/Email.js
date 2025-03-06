 //UC04- to handle optional part
function validateEmail(email) {
    const regex = /^abc(\.[a-zA-Z0-9._+-]+)?@bridgelabz\.co(\.[a-zA-Z0-9.-]+)?$/;
    return regex.test(email);
}
const email1 = "abc.xyz@bridgelabz.co.in";
const email2 = "abc_123@bridgelabz.co.in";
const email3 = "abc+test@bridgelabz.co.in";
const email4 = "abc-xyz@bridgelabz.co.in";
const email5 = "abc.invalid@bridgelabz.co.in";

console.log(validateEmail(email1)); 
console.log(validateEmail(email2)); 
console.log(validateEmail(email3)); 
console.log(validateEmail(email4)); 
console.log(validateEmail(email5));
