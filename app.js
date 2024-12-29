// 1. Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).

// let userinp = prompt("Enter A Single Character or Number")

// if(userinp.length === 1){
//     let checkinp = userinp.charCodeAt(0)
//     if(checkinp >= 48 && checkinp <= 57){
//         document.write(`User Input ${userinp} is a number`)
//     }else if(checkinp >=65 && checkinp <= 90){
//         document.write(`User Input ${userinp} is a uppercase letter`)
//     }else if(checkinp >= 97 && checkinp <= 122){
//         document.write(`User Input ${userinp} is a lowercase letter`)
//     }else{
//         document.write(`The input is not a number or alphabet`)
//     }

// }else{
//     document.write("The input must be single Number or Alphabet")
// }

// ------------------------------------------------------------------------------------------

// 2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.

// let fnum = +prompt("Enter the First Number")
// let snum = +prompt("Enter the Second Number")

// if(fnum > snum){
//     document.write(`${fnum} is Greater than ${snum}`)
// }else if(snum > fnum){
//     document.write(`${snum} is Greater than ${fnum}`)
// }
// else{
//     document.write('input 1 & input 2 are Same')
// }

//-----------------------------------------------------------------------------------------------

// 3. Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.

// let input = +prompt("Enter Number")

// if(input > 0){
//     document.write(`${input} is Positive Number`)
// }else if(input < 0){
//     document.write(`${input} is Negative Number`)
// }else{
//     document.write(`input is zero`)
// }

// ------------------------------------------------------------------------------------------------

// 4. Write a program that takes a character (i.e. string of
//     length 1) and returns true if it is a vowel, false otherwise

// let vowels = ["a","e","i","o","u"]
// let userAsk = prompt("Enter a single character")
// let inp1 = userAsk.toLowerCase()
//  if(vowels.includes(inp1)){
//     document.write(`${userAsk} is a Vowels`)
//  }else{
//     document.write(`${userAsk} is not a Vowels`)
//  }

// --------------------------------------------------------------------------------------------------------

// 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise.

// const password = 12345;
// let userenter = +prompt("Enter Your Password")

// if(!userenter){
//     document.write("Please Enter Your Password")
// }else if(userenter === password){
//     document.write("Your Password is Correct!")
// }else{
//     document.write("Invalid Password!!!")
// }

// -----------------------------------------------------------------------------------

// 6. This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }

// let greetings;
// let hour = 13

// if (hour < 18){
//     greetings = "Good Day"
// }else{
//     greetings = "Good Evening"
// }
//  document.write(greetings)

// ------------------------------------------------------------------------------------

// 7. Write a program that takes time as input from user in 24
// hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements

// let time = +prompt("Enter time in 24-hour format (like: 1900 = 7pm.):");

// if (time >= 0 && time < 1200) {
//     document.write("Good Morning");
// } else if (time >= 1200 && time < 1700) {
//     document.write("Good Afternoon");
// } else if (time >= 1700 && time < 2100) {
//     document.write("Good Evening");
// } else if (time >= 2100 && time <= 2359) {
//     document.write("Good Night");
// } else {
//     document.write("Invalid time!!! Please Enter a Time between 0000 and 2359.");
// }
