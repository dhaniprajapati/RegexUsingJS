//UC_1- regex pattern to validate PIN code 
function isValidPin(pin){
    const regex= /^[1-9][0-9]{2}\s?[0-9]{3}$/;
    return regex.test(pin);
}
const ValidPin="400088";
console.log(isValidPin(ValidPin));
//UC_2- restrict the pin for taking alphabates
const pin = 'A400088';
console.log(isValidPin(pin));
//UC_3- restrict the pin for taking alphabates or special characters at the end
const InValid= '400088B';
console.log(isValidPin(InValid));
//UC_4- valid pin with space
const PinWithSpace= '400 088';
console.log(isValidPin(PinWithSpace));