function fizzBuzz(num) {
    if (num % 3 === 0 && num % 5 === 0) {
        return "FizzBuzz";
    } else if (num % 3 === 0) {
        return "Fizz";
    } else if (num % 5 === 0) {
        return "Buzz";
    } else {
        return num;
    }
}
// Example calls
let result1 = fizzBuzz(15); // Should return "FizzBuzz"
Console.log(result1);
let result2 = fizzBuzz(9); // Should return "Fizz"
console.log(result2);
let result3 = fizzBuzz(10);
console.log(result3); // Should return "Buzz"
