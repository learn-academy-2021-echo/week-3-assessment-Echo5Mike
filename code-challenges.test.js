// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest
// describe("addGranola", () => {
//     let groceryList = ["apples", "carrots", "oatmeal"]
//     let result = ["apples", "carrots", "oatmeal", "granola"]
//     it("adds granola to the end of an array", () => {
//       expect(addGranola(groceryList)).toEqual(result)
//     })
// })


















// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.
//creat a test template
// let it fail
// ReferenceError: fibNum is not defined

describe("fibNum", () => {
    let numInput1 = [6]
    let numInput2 = [10]
    let fibArray1 = [1, 1, 2, 3, 5, 8]
    let fibArray2 = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
    //I don't rember if the numbers array need to be wrapped in "[]"
    it("takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence", () => {
      expect(fibNum(numInput1)).toEqual(fibArray1)
      expect(fibNum(numInput2)).toEqual(fibArray2)
    })
})


//I need a way to make a function that can follow the Fibonacci sequecne and stop at the index of numInput.
//Fibonacci ()=>
    //since my start conditon is for a number greater than 2
    //myStartingArray will begin at [1,1] which have an idex of 0,1 so my input will have to be reduced by -1
    //iterate over an empty array, maybe a forloop, or .fillter using NumInput as my lenght.
//conditions ()=>
    // add both sets of numbers and push new number into array num[i]+num[i+1]
    //but then it needs to add num[1] + new number at num[2]

// const fibNum = (numInput)=>{/// i am strugling to get the forloop to work.
//     let myStartingArray = [1,1]
//     for (let i = 0; i < myStartingArray.length(numInput); i++) {
//         console.log(i);
//     }
// }


//lets try to just add he values together
// let numInput = [10]
// let fibArray = [1, 1, 2, 3, 5, 8]

var fibNum = (numInput)=>{
    startNums = [1,1]
    for (let i = 0; i < (numInput-2); i++) {//I had to hard code -2 to account for the starting nums
        startNums.push(startNums[i+1] + startNums[i])//Figuering this part took me a really long time.  I knew what I needed, but trying to figure out the correct syntex was.
    }
return startNums
}


// console.log(fibNum(numInput));

// a) Create a test with expect statements for each of the variables provided.

// Example input: 6
// Expected output: [1, 1, 2, 3, 5, 8]

// Example input: 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// b) Create the function that makes the test pass.
















// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.
// a) Create a test with expect statements for each of the variables provided.

describe("theSorter", () => {
    var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
    let result1 = [-9, 7, 9, 199]
    var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
    let result2 = [-823, 7, 23]

    it("takes in an array and returns a new array of only odd numbers sorted from least to greatest", () => {
      expect(theSorter(fullArr1)).toEqual(result1)
      expect(theSorter(fullArr2)).toEqual(result2)
    })
})
//setted up the test
//ReferenceError: theSorter is not defined
//--theSorter() => 
    //It will defently need to be the .filiter method.
    //it will need to include negative numbers
    //exclude strings, numbers, boolions(non numbers)
    //maybe the regex method----regex does NOT work on arrays
// const theSorter = (array) =>{
//     array.filter(value =>{
//         value === /0-9/
//     })
// }
////////I managed to git the filiter method to filiter the (typeof value === "number")  I struggled trying to make it work.  I was putting value typeof === "number" and I was trying some very random variations of value,typeof,"number".
// const theSorter = (array)=>{
//     return array.sort((a,b)=> a-b).filter(value =>{
//         return typeof value === "number" && value % 2 !== 0
//         //////Once I was able to get the correct way to filter only "numbers" I added the modulo.  I then stuggled with trying to sort the numbers.  I tried pushing all values into an empty array but was getting boolean values.  Then I did a Hail Mary pass, and I starting thinking that .filiter and .sort are both very alike.  dot notation, I tried adding .sort infront on .filiter but kept getting an error.  Once I got an idea to but it all in a function I got all green lights.
//     })
// }

// var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 7, 9, 199]
// var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]

const theSorter = (array) => {
    return array.sort((a,b) => a-b).filter(value =>{
    return typeof value === "number" && value % 2 !== 0
})}
// this is my refactored, but I need to keep it as a function to have it work or change my test

// b) Create the function that makes the test pass.













// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.


describe("sortAndAdder", () => {
    var numbersToAdd1 = [2, 4, 45, 9]
    var output1 = [2, 6, 51, 60]

    var numbersToAdd2 = [0, 7, -8, 12]
    var output2= [0, 7, -1, 11]

    var numbersToAdd3 = []
    var  output3= []

    it("function that takes in an array and returns an array of the accumulating sum", () => {
      expect(theAdder(numbersToAdd1)).toEqual(output1);
      expect(theAdder(numbersToAdd2)).toEqual(output2);
      expect(theAdder(numbersToAdd3)).toEqual(output3);
    })
})
// I will need a way to sort the array to make sure that all numbers are in order to.
// I will need to add array[0] + array [1] and then push that to an empty array?
// var numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]

// var numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]

// var numbersToAdd3 = []
// Expected output: []


// b) Create the function that makes the test pass.



const theAdder = (array)=>{
    let starting = array.slice(0,1)

    for (let i = 0; i < array.length; i++) {
        starting.push(starting[i] + array[i+1]);
        starting.push(starting[i+1] + array[i+2]);
        starting.push(starting[i+2] + array[i+3]);
        return starting
    }
    return starting
}
//I know that this function is a mess.  I feel that I hard coded this.  I feel that maybe I don't have a grasp on for loops.  I will leave for now and will come back to refactor it, if I have time.

// console.log(theAdder(numbersToAdd2))
