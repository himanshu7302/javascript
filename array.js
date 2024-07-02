let marks_class_12=[91,75,87,81,null,false,"not present"]
console.log(marks_class_12[0])
console.log(marks_class_12[1])
console.log(marks_class_12[2])
console.log(marks_class_12[3])
console.log(marks_class_12.length)
console.log(typeof marks_class_12)

//Arrays are Mutable it can be changed And Strings are immutable it can not be changed 
// Print all the elements in the array

for (a in marks_class_12){
    console.log(marks_class_12[a])
}

// Array Methods

let num=[1,2,3,4,5]
let b=num.toString()   // B is now a String
console.log(b)
console.log(typeof b)
console.log(typeof num)

let c = num.join("_")  // Join method is used to join different array elements by a underscore // fprmating the array elements
console.log(c,typeof c,typeof b) 
  

// Pop method is used to remove the last element from the array and return that element update the orginal array and return the popped value


let r=num.pop()
console.log(num,r)

//Push method is used to add some value at the last of the array

let p=num.push(4)
console.log(num)

// shift method remove the first element from the array
// shift method remove the first element from the array
let q=num.shift()
console.log(q)
console.log(num)
let n=num.unshift(78)// Unshift method is used to add something at starting from the array
console.log(num)
console.log(num.length)


let num_more=[1,2,3,4,54,34,32,21]
let num_evenmore=[2,4,6,8,10,12,14]
console.log(num_more.length)
delete num_more[0]       // Delete method is used to delete  the first number but length of the array is  
console.log(num_more)
console.log(num_more.length)

let newArray=num.concat(num_more,num_evenmore) // Concat method is used to add two strings
console.log(newArray)
console.log(num,num_more)
 
// Sort method 
let compare=(a,b)=>{
    return a-b
}
// Compare function is used to Sort the Array in assending and decending order 

let num7=[551,22,3,14,5,6,7,8,229]
num7.sort(compare)
num7.reverse()
console.log(num7)




//Splice and Slice Method 

let num1=[551,45,56,78,98,76,65]
// Splice function is used to return the deleted value and modifies the existing array
num1.splice(2,4,1021,1022,1023,1024)
console.log(num1)

//Slice method 

let num2=[34,36,38,40,42,44]
let del=num2.slice(3,5)
console.log(num2)
console.log(del)

//loop in an Array

let arr=[2,4,7,8,9]
for(let i=0;i<arr.length;i++){
    console.log(arr[i])
} 
//For each loop
arr.forEach((element)=>{
    console.log(element*element)
})
//Array .from 
let name="Himanshu"
let arr1=Array.from(name)
console.log(arr1)
console.log(typeof arr1)

//For of loop

for(let i of arr){
    console.log(i)
}

//for in loop

for(let i in arr){
    console.log(arr[i])

}



