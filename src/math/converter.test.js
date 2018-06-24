import { convertNumberToWords } from "./converter";

describe('Converter functional tests', () =>  {
   test('Should return appropriate message if the input variable is not a number', () =>{
      expect( convertNumberToWords('foo')).toBe('Please enter valid number');
      expect( convertNumberToWords(undefined)).toBe('Please enter valid number');
      expect( convertNumberToWords('')).toBe('Please enter valid number');
      expect( convertNumberToWords()).toBe('Please enter valid number');
   });
   test('Should return appropriate message if the input variable is a decimal value number', () => {
       expect( convertNumberToWords(99.99)).toBe('Please enter a non decimal number');
   });

    test('Should allow only positive numbers', () => {
        expect( convertNumberToWords(-200)).toBe('Please enter a positive number');
    });

    test('Should not allow input value greater than 999999999', () => {
        expect( convertNumberToWords(1000000000)).toBe('Please enter a number less than or equals to 999999999');
    });

    test('Should return word Zero if the input is 0', () => {
        expect( convertNumberToWords(0)).toBe('Zero');
    });

    test('Should return appropriate wording for a given three digit number', () => {
        expect( convertNumberToWords(123)).toBe('one hundred and twenty three');
    });

    test('Should return appropriate wording for a given multiples of 10', () => {
        expect( convertNumberToWords(10)).toBe('ten');
        expect( convertNumberToWords(100)).toBe('one hundred');
        expect( convertNumberToWords(1000)).toBe('one thousand');
        expect( convertNumberToWords(10000)).toBe('ten thousand');
        expect( convertNumberToWords(100000)).toBe('one hundred thousand');
        expect( convertNumberToWords(1000000)).toBe('one million');
        expect( convertNumberToWords(10000000)).toBe('ten million');
        expect( convertNumberToWords(100000000)).toBe('one hundred million');
    });

    test('Should return appropriate wording for a given 9 numbers', () => {
        expect( convertNumberToWords(9)).toBe('nine');
        expect( convertNumberToWords(99)).toBe('ninety nine');
        expect( convertNumberToWords(999)).toBe('nine hundred and ninety nine');
        expect( convertNumberToWords(9999)).toBe('nine thousand, nine hundred and ninety nine');
        expect( convertNumberToWords(99999)).toBe('ninety nine thousand, nine hundred and ninety nine');
        expect( convertNumberToWords(999999)).toBe('nine hundred and ninety nine thousand, nine hundred and ninety nine');
        expect( convertNumberToWords(9999999)).toBe('nine million, nine hundred and ninety nine thousand, nine hundred and ninety nine');
        expect( convertNumberToWords(99999999)).toBe('ninety nine million, nine hundred and ninety nine thousand, nine hundred and ninety nine');
        expect( convertNumberToWords(999999999)).toBe('nine hundred and ninety nine million, nine hundred and ninety nine thousand, nine hundred and ninety nine');
    });
});