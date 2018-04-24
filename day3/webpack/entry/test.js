const plus = (a, b) => {
	return a + b
}

console.log(plus(1, 8))

class People {
	constructor(name, age) {
		this.age = age;
		this.name = name
	}
}

let ly = new People("ly", 18)

console.log(ly)