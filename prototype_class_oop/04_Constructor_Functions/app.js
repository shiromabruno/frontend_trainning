// function makeColor(r,g,b){
// 	let color = {};

// 	color.r = r;
// 	color.g = g;
// 	color.b = b;

// 	return color; // let teste = makeColor(123,070,100)
// }

// AO INVES DO CODIGO ACIMA, DA PRA FAZER IGUAL ABAIXO.


function Color(r, g, b, nome){ // ao fazer let bruno2 = new Color(1,2,3,"BrunoShiroma") , fica explicito que tem o RETURN novo Objeto
	this.r = r;
	this.g = g;
	this.b = b;
	this.atributoNome = nome; // precisa ter o THIS, senao bruno2.atributoNome ---> undefined
	//console.log(this); // esse this ira se referir ao global scope , window object
	this.rgbAtributo = function(){ // Teste com Function no Atributo se for Prototype eh abaixo
		let {r: r1, g: g1, b: b1} = this;  
		return `rgb(${r1}, ${g1}, ${b1})`;
	};
}

//document.body.style.backgroundColor = bruno10.rgbAtributo()

Color.prototype.rgbProto = function(){ // dessa forma essa function fica no PROPTOTYPE
	//let {r: r1, g: g1, b: b1} = this;  // referese ao objeto COLOR, pode ser com essa linha ou a linha de baixo com THIS.atributp
	return `rgb(${this.r}, ${this.g}, ${this.b})`;
};

//document.body.style.backgroundColor = bruno10.rgbProto()

Color.prototype.hex = function() { // dessa forma essa function fica no PROPTOTYPE
	let {r,g,b} = this; // referese ao objeto COLOR. Cria atributos R e G e B
		return (
			'#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
		);
	};

Color.prototype.qualNome = function() { // dessa forma essa function fica no PROPTOTYPE
	let {atributoNome: nomePrototype} = this; // referese ao objeto COLOR. Cria atributos R e G e B
		return (
			`meu nome eh ${nomePrototype}`
		);
	};



// let bruno2 = new Color(1,2,3,"BrunoShiroma")
// bruno2.rgbProto() ---> 'rgb(1, 2, 3)'
//  bruno2.rgbAtributo() ---> 'rgb(1, 2, 3)'
// bruno2.qualNome() ===> 'meu nome eh BrunoShiroma'
// bruno2.hex() ---> '#010203'


let bruno10 = new Color(10,20,30,"bruno 10");
let bruno20 = new Color(123,456,30,"bruno 20");

// bruno10.qualNome() === bruno20.qualNome()
// false
// let bruno30 = new Color(1,2,3,"bruno 10");
// undefined
// bruno10.qualNome() == bruno30.qualNome()
// true
// bruno10.qualNome() === bruno30.qualNome()
// true
// bruno10.qualNome === bruno20.qualNome ----> estao vendo se apontam pro mesmo lugar, e SIM APONTAM PARA PROTOTYPE
//true
//bruno10.b == bruno20.b ---> eh FALSO pois aponta para o atributo do objeto bruno10 e o outro para bruno20
//false
//bruno10.b === bruno20.b ---> eh FALSO pois aponta para o atributo do objeto bruno10 e o outro para bruno20
//false


// let bruno = Color(1,2,3,"BrunoShiroma")
//  bruno.b ---> Uncaught TypeError: Cannot read properties of undefined (reading 'b')
// bruno.atributoNome ---> Uncaught TypeError: Cannot read properties of undefined (reading 'atributoNome')

// let bruno2 = new Color(1,2,3,"BrunoShiroma")
//  bruno2.atributoNome ---> undefined (PRECISA DO THIS.atributoNome = nome;)



// // This is a Constructor Function...
// function Color(r, g, b) {
// 	this.r = r;
// 	this.g = g;
// 	this.b = b;
// }

// //If you call it on its own like a regular function...
// Color(35, 60, 190); //undefined
// //It returns undefined. Seems useless!

// // *****************
// // THE NEW OPERATOR!
// // *****************

// // 1. Creates a blank, plain JavaScript object;
// // 2. Links (sets the constructor of) this object to another object;
// // 3. Passes the newly created object from Step 1 as the this context;
// // 4. Returns this if the function doesn't return its own object.

// Color.prototype.rgb = function() {
// 	const { r, g, b } = this;
// 	return `rgb(${r}, ${g}, ${b})`;
// };

// Color.prototype.hex = function() {
// 	const { r, g, b } = this;
// 	return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// };

// Color.prototype.rgba = function(a = 1.0) {
// 	const { r, g, b } = this;
// 	return `rgba(${r}, ${g}, ${b}, ${a})`;
// };

// const color1 = new Color(40, 255, 60);
// color1.hex();
// const color2 = new Color(0, 0, 0);
// color2.hex();
