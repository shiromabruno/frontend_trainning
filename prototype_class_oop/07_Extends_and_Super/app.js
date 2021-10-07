class Pet{
	constructor(name, age){
		this.nome = name;
		this.idade = age;
	}

	eat(){
		return `${this.nome} is eating!`
	}
}


class Cat extends Pet{	 // gato tera 3 atributos

	constructor(name, age, livesLeft = 9){ // se pasar let gato2 =  new Cat('gato1', 5, 123) a idade sera 123, se nao passar nada new Cat('gato1', 5) a vida eh 9
		super(name, age) // usa super ao inves de ficar fazendo this.nome = nome, this.idade = age... (repeticao)
		this.vidas = livesLeft
	}

	meow(){
		return `MEOOOOWWW`
	}
}

class Dog extends Pet{ // let cachorro1 = new Dog('dog1', 3, 123, true, [2,3,4,5]) , ira ignorartudo depos da idade (3)
// cachorro tera 2 atributos
	bark(){
		return `WOOOOFFF`
	}

	eat(){ // quando vc coloca objeto.eat(), o javascript vai procurar o eat() do prototype do Dog, se nao achar 
		  // vai procurar no prototype do PET, se nao achar no PET, vai procurar no prototype doOBJECT
		return `EAT from DOG CLASS!!`
	}
}



// class Pet {
// 	constructor(name, age) {
// 		console.log('IN PET CONSTRUCTOR!');
// 		this.name = name;
// 		this.age = age;
// 	}
// 	eat() {
// 		return `${this.name} is eating!`;
// 	}
// }

// class Cat extends Pet {
// 	constructor(name, age, livesLeft = 9) {
// 		console.log('IN CAT CONSTRUCTOR!');
// 		super(name, age);
// 		this.livesLeft = livesLeft;
// 	}
// 	meow() {
// 		return 'MEOWWWW!!';
// 	}
// }

// class Dog extends Pet {
// 	bark() {
// 		return 'WOOOF!!';
// 	}
// 	eat() {
// 		return `${this.name} scarfs his food!`;
// 	}
// }
