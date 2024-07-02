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
