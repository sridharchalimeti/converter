import { createInterface } from 'readline';
import { convertNumberToWords } from "./math/converter";

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Please enter a number: ', (number) => {
    console.log(`Number in British English : ${convertNumberToWords(number)}`);
    rl.close();
});