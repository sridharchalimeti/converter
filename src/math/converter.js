import { constants } from "../util/constants";
import { numberNames} from "../staticdata/number-names";
import { tenNames } from "../staticdata/ten-names";

const ZERO = 0;
const MAX_NUM = 999999999;
export function convertNumberToWords(number) {
    if(number === constants.ZERO){
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

    if(number > constants.MAX_NUM){
        return 'Please enter a number less than or equals to 999999999';
    }

    return wordifyNumber(number);
}

function wordifyNumber(number){
    const numberString = formatToString(number);
    const millionPart = Number(numberString.substring(0,3));
    const thousandPart = Number(numberString.substring(3,6));
    const hundredPart = Number(numberString.substring(6,9));
    let finalString = '';
    if(millionPart > 0){
        finalString = wordifyThreeDigitNumber(millionPart)+ ' million';
        if(thousandPart > 0 || hundredPart >0){
            finalString = finalString + ', '
        }
    }

    if(thousandPart > 0){
        finalString = finalString + wordifyThreeDigitNumber(thousandPart)+ ' thousand'
        if(hundredPart >0){
            finalString = finalString + ', '
        }
    }

    if(hundredPart > 0){
        finalString = finalString + wordifyThreeDigitNumber(hundredPart);
    }

    if(finalString.endsWith(' and')){
        finalString = finalString.substring(0, finalString.length-4);
    }

    return finalString.trim();
}

function wordifyThreeDigitNumber(number){
    let numberWord = '';
    const hundred = Math.floor(number/100);
    if(hundred>0){
        numberWord = numberNames[hundred]+' hundred';
    }
    const twoDigitNumber = number%100;
    if(hundred>0 && twoDigitNumber > 0){
        numberWord = numberWord+' and'
    }
    if(twoDigitNumber<20){
        numberWord = numberWord + numberNames[twoDigitNumber];
    }else{
        const tens = Math.floor(twoDigitNumber/10);
        const ones = Math.floor(twoDigitNumber%10);
        numberWord = numberWord + tenNames[tens] + numberNames[ones];
    }
    return numberWord.trim();
}

function formatToString(number){
    const lengthDiff = constants.MAX_DIGITS - number.toString().length;
    let leadingZeros = '';
    for(let i=0;i<lengthDiff;i++){
        leadingZeros = leadingZeros.toString()+'0';
    }
    return leadingZeros.toString()+number.toString();
}