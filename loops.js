const prompt=require('prompt-sync')();
let n=prompt("Enter the value n")
let sum=0
n=Number.parseInt(n)
for(let i=1;i<n;i++){       // var is globally scoped 
    console.log(i+1)
    i++;
    sum=sum+i;
}
console.log("Sum of even number is ",sum)
let i=8
console.log(i)//Let is block scoped variable 



// For in Loop in javascript   //we use for in loop when objet is not iterative 
let obj={
    harry:34,
    subham:45,
    himanshu:56,
    Ritika:65,
}
    for(let a in obj){
        console.log("marks of  " + a + " are " + obj[a])
    }

//For of loop in javscript ,,for of loop is used when object is iterative if the object is iterative then we should for of loop

for(let b of "Harry"){
    console.log(b)
}

