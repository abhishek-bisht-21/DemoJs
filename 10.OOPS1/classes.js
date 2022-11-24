class Product{

	discount = 30;

	constructor(n,p){
		this.price = p; // data member
		this.name = n;  // data member
	}

	displayProduct(){ // member function
		console.log(this.name, this.price,this.discount);
	}

	buyProduct(){  // member function

	}
}

let iphone = new Product("iphone 11", 50000);
let macbook = new Product("macbook air", 150000);
iphone.displayProduct();

