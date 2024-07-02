let name="Himanshu"
console.log(name.length)


let friend='prakash'
console.log(friend.length)
console.log(name[0])          


// Template literals

let boy1="pramod"
let boy2="himanshu"
 
//Pramod is a friend of himanshu 
let sentence=`${boy1} is a friend of ${boy2}`  // We can also make a string using backtick
console.log(sentence)

// escape sequence Character

let fruit='Bana\'na'
console.log(fruit)   //  \n use for new line  

let country="Ind\"ia"
console.log(country)


//String Methods


let name1="Radha"
console.log(name1.length)
// Upper and Lowercase methods 

console.log(name1.toUpperCase())
console.log(name1.toLowerCase)

//Slice method

console.log(name1.slice(2,4))
console.log(name1.slice(2))

console.log(name1.replace("anshu","anshi"))


// Concat method is used to add the two strings


console.log(name.concat(" is a friend of ", name1 , " ok "))



// trim method is used for removing the extraspaces in a string   

let friend2="       Meena     "
console.log(friend2.trim())
console.log(friend2)
  

for (a in name){
    console.log(name[a])
}

// we can also concatenate two strings using + operator
