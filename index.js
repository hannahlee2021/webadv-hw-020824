/*problem 1: Create a condition to check if it's the morning, evening, afternoon or night. Use console.log to output an appropriate message.*/

let current_time = new Date();
let current_hr = current_time.getHours();

if (current_hr >= 7 && current_hr< 12) {
    console.log(`it is ${current_time}, so it is the morning`)
} else if (current_hr >= 12 && current_hr <18) {
    console.log(`it is ${current_time}, so it is the afternoon`)
} else if (current_hr >= 6 && current_hr <22) {
    console.log(`it is ${current_time}, so it is the evening`)
} else {
    console.log(`it is ${current_time}, so it is night`)
}

/*problem 2: Use the same random dice generator as used in class to generate a number between 1 and 6. 
Now create a loop that keep rolling until the number generated is more than 3. As soon as you get a number
more than three, the loop should end. Output how many times the loop ran before it reached this number. 
Be careful with this - if you create a loop that has no way to end (due to a faulty check), it will easily 
crash your browser!*/ 


let i = 0;
while (true) {
    let diceNum=Math.floor(Math.random()*6)+1;
    i++;
    console.log(`roll ${i}, value = ${diceNum}` )

    if (diceNum > 3) {
        break;
    }
    
}
console.log(`It took ${i} rolls to get a number greater than 3.`);

/*problem 3: Using loops , create a triangular pattern (using console.log statements only for now) like this:
#
##
###
####
*/

let num = "";
for (let i = 0; i < 4; i++) {
    
    num = num + "#"
    console.log(num)
}

/*Using more loops and conditions, create a chess board using # and space ' ' using console.log statements. 
You could consider using a loop inside a loop to create the alternative pattern. A chess board has 8 x 8 = 64 squares.*/

// let rowCol = 8;

// for (let i=0;i<rowCol;i++) {
//     // let row = '';
//     for (let j=0;j<rowCol;j++) {
//         if((i+j) % 2==0) {
//            console.log("#")
//         } else {
//             console.log('')
//         }
//     }
   
// }

let rowCol = 8;

for (let i=0;i<rowCol;i++) {
    let row = '';
    for (let j=0;j<rowCol;j++) {
        if((i+j) % 2==0) {
           row += "##"
        } else {
            row += ''
        }
    }
   console.log(row)
}
