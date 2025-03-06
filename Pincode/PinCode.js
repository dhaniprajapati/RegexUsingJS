//UC_1- regex pattern to validate PIN code 
function isValidPin(pin){
    const regex= /^[1-9][0-9]{5}$/;
    return regex.test(pin);
}
const ValidPin="400088";
console.log(isValidPin(ValidPin));
//UC_2- restrict the pin for taking alphabates
const pin = 'A400088';
console.log(isValidPin(pin));