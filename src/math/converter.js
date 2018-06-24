const ZERO = 0;
const MAX_NUM = 999999999;
export function convertNumberToWords(number) {
    if(number === ZERO){
        return 'Zero'
    }

    if(!number || isNaN(number)){
        return 'Please enter valid number';
    }

    if(number.toString().includes('.')){
        return 'Please enter a non decimal number'
    }

    if(number.toString().startsWith('-')){
        return 'Please enter a positive number'
    }

    if(number > MAX_NUM){
        return 'Please enter a number less than or equals to 999999999';
    }

    return wordifyNumber(number);
}

function wordifyNumber(number){

}