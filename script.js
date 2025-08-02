console.log('5' + 7);      // Answer: 57
console.log(Boolean(0));    // Answer: false
console.log('10' - '2');    // Answer: 8
console.log('5' == 5);      // Answer: true
console.log('5' === 5);     // Answer: false
console.log(Boolean(''));    // Answer: false
console.log('5' + true);    // Answer: 5true
console.log('5' * 2);       // Answer: 10
console.log(0 == false);     // Answer: true
console.log(Boolean(NaN));   // Answer: false

//part 2
//check if a number is positive,negative or zero
let num = 4;
if (num > 0) {
    console.log("the number is positive");
}
else if (num < 0) {
    console.log("The number is negative");
}
else {
    console.log("The number is zero");
}

//check is a person is eligible to vote

let age = 21;
if (age >= 18) {
    console.log("Eligible to vote");
}

else {
    console.log("Not eligible to vote");
}

//Part 3
//fibonacci sequence
let n = [0, 1];
for (let i = 2; i < 12; i++) {
    n[i] = n[i - 1] + n[i - 2];
}

console.log(n);

//find prime numbers in a range
for (let i = 2; i <= 15; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log("The prime numbers are", i);
    }
}

//Part 4
//Calculate average of two numbers

function calcavg(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        throw new Error("Inputs must be numbers to calculate average");
    }
    return (num1 + num2) / 2;
}
console.log(calcavg(15, 25));

//calculate factorial

const factorial = (n) => {
    if (!Number.isInteger(n) || n < 0) {
        throw new Error("Input must be a non-negative integer");
    }
    let result = 1;
    for (let i = 1; i <= n; i++) result *= i;
    return result;
};

console.log(factorial(3));

//find prime numbers

function isPrime(num) {
    if (num < 1) {
        throw new Error("Input must be a positive integer");
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;

}
console.log(isPrime(11));

//Part 5

let nums = [1, 3, 4, 6, 7, 9, 16];

//1
nums.forEach(function (num) {
    console.log(num);
});

//2
let square = nums.map(function (num) {
    return num * num;
});
console.log(square);

//3
let oddNumbers = nums.filter(function (num) {
    return num % 2 !== 0;
});
console.log("Odd Numbers are", oddNumbers);

//4
let sum = nums.reduce(function (acc, val) {
    return acc + val;
}, 0);
console.log("Sum ", sum);

//5
let numbover10 = nums.find(function (num) {
    return num > 10;
});
console.log("First > 10 ", numbover10);

//6
let firstEvenIndex = nums.findIndex(function (num) {
    return num % 2 === 0;
});
console.log("Index of first even is", firstEvenIndex);

//7
console.log("Includes 19 or not?", nums.includes(19));

//8
let first = nums.slice(0, 3);
console.log("First three are", first);

//9
nums.splice(nums.length - 1, 1, 100);
console.log("After splicingg", nums);

//10
let sorted = nums.slice().sort(function (a, b) {
    return a - b;
});
console.log(sorted);

//11
let joined = nums.join(", ");
console.log(joined);