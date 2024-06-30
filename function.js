//function is a block of code that is used to do the repeated task,,It makes our program easy and and short the code
let a=1;
let b=2;
let c=3;
function onePlusAvg(x,y){
    console.log("Done")
    return Math.round(1+(x+y)/2)
}



console.log("one plus average of a and b is",onePlusAvg(a,b))
console.log("one plus average of b and c is",onePlusAvg(b,c))
console.log("one plus Average of a and c is",onePlusAvg(c,a))


//function using arrow operator

const hello=()=>{
    console.log("Hey how are you.I am fine and what about you")
    return "hii"

}
let v=hello();
console.log(v)
