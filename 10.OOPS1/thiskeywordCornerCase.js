const obj = {
	name : "Abhishek",
	display : function(){
		console.log(this, "is pointing to the calling side");
	}
}

const obj1 = {
	name : "Abhishek",
	display : () => {
		console.log(this, "is the calling side");
	}
}

obj.display();
obk1.display();

