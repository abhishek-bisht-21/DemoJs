const person1 =  {
	name: 'Abhishek',
	age: 22
}

// Both Person1 and Person2 have same reference of the object in the memory
// Therefore on changing the value of name in any one will cause change in both of them.
const person2 = person1;
// Hence alternate way of doing the above task is
const person3 = Object.assign({},person1);
// Method 2 Using spread operator
const person4 = {...person1};
person2.name = 'Vibhu'



console.log(person1);
console.log(person2);
console.log(person3);
console.log(person4);

