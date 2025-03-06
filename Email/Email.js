 //UC02- regex to ensure @ and bridgelabz
function validateEmail(email) {
    const regex = /^abc\.[a-zA-Z0-9._%+-]+@bridgelabz\.co(\.[a-zA-Z0-9.-]+)?$/;
    return regex.test(email);
}
const email = "abc.xyz@bridgelabz.co.in";
console.log(validateEmail(email));
