// 1. Write a function that multiplies a number by 2 and divides it by 3
console.log("Question:1")
function multiplyAndDivide(number) {
    const result  = (number * 2) / 3;
    return result
}

console.log (multiplyAndDivide(10))

// 2. Write the function from 1. as a fat arrow function
console.log("Question:2")
const mAndD = (number) => {
    return (number * 2) / 3;
  } 
  console.log(mAndD(10));

// 3. Write a function that takes a name, age, and height and writes a console log using all of them
console.log("Question:3")
function personalInfo(name, age, height) {
    console.log(`Name: ${name}, Age: ${age}, Height: ${height}`);
}
personalInfo("Brandon", 32, 67);


// 4. Write two functions, add(a, b) and multiply(a, b) that each take two variables and returns the summed or multiplied value
console.log("Question:4")
function addNumbers(one, two) {
    const product1 = one + two
    return product1
}

console.log(addNumbers(4,8))

function multiplyNumbers(one, two) {
    const product2 = one * two
    return product2
}

console.log(multiplyNumbers(4,8))


// BONUS:  Write a function that USES functions from 4. (add and multiply) to take a value and adds 2 and multiplies by 4.
// So addTwoMultiplyByFour(2) would return 16 ((2 + 2) x 4)
console.log("Bonus:")

function addTwoMultiplyByFour(number) {
    const product3 = (number + 2) * 4
    return product3
}

console.log(addTwoMultiplyByFour(6))