//UC_1- regex pattern to validate PIN code 
function isValidPin(pin){
    const regex= /^[1-9][0-9]{5}$/;
    return regex.test(pin);
}
const pin="400088";
console.log(isValidPin(pin));