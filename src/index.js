import { createInterface } from 'readline';
import { convertNumberToWords } from "./math/converter";

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Please enter a number: ', (answer) => {
    // TODO: Log the answer in a database
    console.log(`Number in British English : ${convertNumberToWords(answer)}`);

    rl.close();
});