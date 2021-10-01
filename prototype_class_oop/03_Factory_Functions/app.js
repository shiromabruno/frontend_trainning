function makeColor(r,g,b){
	let color = {};

	color.r = r;
	color.g = g;
	color.b = b;
	color.rgb = function(){ // o objetivo eh so chamar objetoX.rgb() que ja voltaria o rgb (nao precisa passa r,g,b)
		let {r: r1, g: g1, b: b1} = this;  // referese ao objeto COLOR
		//return `rgb(${this.r}, ${this.g}, ${this.b})`; ==:> ao inves de usar essa linha, usar o destruct da linha de cima
		return `rgb(${r1}, ${g1}, ${b1})`;
	};
	color.hex = function() { // o objetivo eh so chamar objetoX.hex() que ja voltaria o hex (nao precisa passa r,g,b)
		let {r,g,b} = this; // referese ao objeto COLOR. Cria atributos R e G e B
			return (
				'#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
			);
		};

	return color; // let teste = makeColor(123,070,100)
}



//This functions makes and returns an object every time it is called.
// The resulting objects all follow the same "recipe"
// function makeColor(r, g, b) {
// 	const color = {};
// 	color.r = r;
// 	color.g = g;
// 	color.b = b;
// 	color.rgb = function() {
// 		const { r, g, b } = this;
// 		return `rgb(${r}, ${g}, ${b})`;
// 	};
// 	color.hex = function() {
// 		const { r, g, b } = this;
// 		return (
// 			'#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
// 		);
// 	};
// 	return color;
// }

// const firstColor = makeColor(35, 255, 150);
// firstColor.hex(); //firstColor.hex();
// firstColor.rgb(); //"rgb(35, 255, 150)"

// const black = makeColor(0, 0, 0);
// black.rgb(); //"rgb(0, 0, 0)"
// black.hex(); //"#0000s00"
