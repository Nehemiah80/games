//Rest params
function log(...message) {
    for (let x of message) {
        console.log(x);
    }
    console.log(message.join('-'));
}

log('Jerry', 823, false, 'omg', 'lol');

//closure
let important = 20;

function needImportant1() {
     console.log(important * important);
}

function needImportant2() {
    important += 17;
    console.log(important);
}

needImportant1();
console.log("important after first function: ", important);

needImportant2();
console.log("important after second function: ", important);

//Return
function add(a,b) {
    return a + b;
}

let sum = add(790440, 303344);
console.log(sum);

// HOF
function product (a,b,c,d, sumFunction) {
    sumFunction(a,b) * sumFunction(c,d);
}

let  = product(1,2,3,4,add);
console.log(result);