// //Part 1: Fizz-Buzz 

// for (let i = 0; i <= 100; i++){
//     if (i % 15 == 0)
//         console.log("Fizz Buzz")
//     else if ((i % 3==0) && (i % 5 != 0))
//         console.log("Fizz")
//     else if ((i % 3 != 0) && (i % 5 == 0))
//         console.log("Buzz")
// }

//Part 2: Prime Time
// let i = 8;

// for (i = i+1; i < 99; i++)
//     if ((i % 2 != 0) && (i % 3 != 0)){
//         console.log(i)
//         break;
// } 

//Part 3: Feeling Loopy
function CVSscript(CVSValue){
    const rows = CVSValue.split ('\n');
    rows.forEach(row => {
        const cells = row.split(',')
        if(cells.length === 4){
            console.log(cell[0], cell[1], cell[2], cell[4]);
        }
    });
}