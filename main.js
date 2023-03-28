const internsDB = [
    {id:001, name:'fish', userName:'fisher', email:'fish@gmail.com'},
    {id:002, name:'attah', userName:'atta', email:'attah@gmail.com'},
    {id:003, name:'frank', userName:'franky', email:'franky@gmail.com'},
    {id:004, name:'jerry', userName:'jery', email:'jerry@gmail.com'}
]

const length = internsDB.length
console.log({length});

const index2 = internsDB[2]
console.log(index2);

let newIntern =  {id:005, name:'fauziya', userName:'fauzy', email:'franky@gmail.com'}
console.log(internsDB[2]);
internsDB[2] = newIntern
internsDB[2] = 27

for (let i = 5; i >= 5; i--){
     if (i % 2 !==0) console.log(i);
}

 let hour = 20;

 if (hour >= 6 && hour < 12) 
    console.log("Good morning");

 else if (hour >= 12 && hour < 18) 
    console.log("Good afternoon");

 else
    console.log("Good evening");

function sayHi () {
   console.log("Hi", "Jerry", "I");
}
sayHi();

let sayHello = () => {
   console.log("Hi", "Jerry", "I");
}
sayHello();