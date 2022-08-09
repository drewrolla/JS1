//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

// for loop to go through names
// for loop to go through string
// if statement needed(?)
// went back and looked at both Shoha notes and completed class notes
// while loop might be needed(?)

function findWords(names, string){
  for (let x of names) {
    if (string.includes(x)){
      console.log(`Matched dog_name. ${names[x]}`)
    } else {
      console.log('No matches.')
    }
  }
}
// this way is kind of lengthy
//     let strings = string.split(' ') // splits up the string
//     for (let i = 0; i < names.length; i++) {
//         for(let j = 0; j < string.length; j++) {
//             // .search() looks for a value - in this case, it's looking for a name value in a string
//             // currently getting an error with this one: Uncaught TypeError: Cannot read properties of undefined (reading 'toLowerCase')
//             if (strings[j].toLowerCase().search(names[i].toLowerCase())) {
//                 console.log(`Matched dog_name. ${names[i]}`) // JS fstring ``(backticks), `string ${expression}`
//             } else {
//                 console.log("No matches.")
//             }
//         }
//     }
// }

// unsure if they want the words to be exact matches or not with capitalization
// assuming that it is not the case, we should be receiving only 1 match
// otherwise, we should be matching 3
// we currently have 1 exact match, confused as to why the other two names didn't match
//Call method here with parameters
console.log(findWords(dog_names, dog_string));

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

// Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
let arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

// every even index is spliced, so need a % 2 == 0
function replaceEvens(arr){
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 == 0) {
            // splice
            arr.splice(i, 1, 'even index') // thank you w3schools (index, howmany removed, new element to be added)
        } // ^replace 1 item at index i and replace it with 'even index'
    }
    return arr
} // why is 0 considered even in JS?

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]
console.log(replaceEvens(arr));

// Codewars 1
// This might've been too easy, I'll do another one just in case
// Convert Boolean Values to Strings 'Yes' or 'No'
function boolToWord( bool ){
    //...
    if (bool == true) {
      return "Yes";
    } else {
      return "No";
    }
  }

//Codewars 2
// Square(n) Sum
// Complete the square sum function so that it squares each number passed into it and then sums the results together.
function squareSum(numbers){
    let sum = 0;
    for (let i = 0; i < numbers.length; i++){
      sum += numbers[i] ** 2
    }
    return sum
}

//Codewars 3
//Area or Perimeter
/*You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
If it is a square, return its area. If it is a rectangle, return its perimeter. */
const areaOrPerimeter = function(l , w) {
    if (l == w){
      return l * w
    } else {
      return l + l + w + w
    }
  };

// JS syntax is so weird compared to Python