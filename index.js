let mySubjects = ['Math', 'History', 'English', 'Economics', 'Typing'];

let myGrades = ['A', 'B', 'C', 'D', 'F']

let input = 'Graphic Design'
let shortcut = 'My grade for ' + input

//If & Else statements = Conditions
if (input == mySubjects[0]) {
  console.log('My grade for ' + mySubjects[0] + ' was an ' + myGrades[0])
}

else if (input == mySubjects[1]) {
//  console.log('My grade for History is a B')
  console.log('My grade for ' + mySubjects[1] + ' was a ' + myGrades[1])
}

else if (input == mySubjects[2]) {
//console.log('My grade for History was a C')
console.log('My grade for ' + input + ' was a ' + myGrades[2])
}

else if (input == mySubjects[3]) {
  console.log(shortcut + ' was a ' + myGrades[3])
}

else if (input == mySubjects[4]) {
  console.log(shortcut + ' was an ' + myGrades[4])
}

//CS is not any of my conditions
else {
  //console.log('I would like to learn ' + input)
console.log('Subject not found')
}