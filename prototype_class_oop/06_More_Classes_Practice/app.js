class Color {
	constructor(r, g, b, name) {
		this.r = r;
		this.g = g;
		this.b = b;
		this.name = name;
		this.calcHSL();
	}
	innerRGB() {
		const { r, g, b } = this;
		return `${r}, ${g}, ${b}`;
	}
	rgb() {
		return `rgb(${this.innerRGB()})`;
	}
	rgba(a = 1.0) {
		return `rgba(${this.innerRGB()}, ${a})`;
	}
	hex() {
		const { r, g, b } = this;
		return (
			'#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
		);
	}
	hsl() {
		const { h, s, l } = this;
		return `hsl(${h},${s}%, ${l}%)`;
	}
	fulllySaturated() {
		const { h, l } = this;
		return `hsl(${h},100%, ${l}%)`;
	}
	opposite() {
		const { h, s, l } = this;
		const newHue = (h + 180) % 360;
		return `hsl(${newHue},${s}%, ${l}%)`;
	}
	calcHSL() {
		let { r, g, b } = this;
		// Make r, g, and b fractions of 1
		r /= 255;
		g /= 255;
		b /= 255;

		// Find greatest and smallest channel values
		let cmin = Math.min(r, g, b),
			cmax = Math.max(r, g, b),
			delta = cmax - cmin,
			h = 0,
			s = 0,
			l = 0;
		if (delta == 0) h = 0;
		else if (cmax == r)
			// Red is max
			h = ((g - b) / delta) % 6;
		else if (cmax == g)
			// Green is max
			h = (b - r) / delta + 2;
		else
			// Blue is max
			h = (r - g) / delta + 4;

		h = Math.round(h * 60);

		// Make negative hues positive behind 360°
		if (h < 0) h += 360;
		// Calculate lightness
		l = (cmax + cmin) / 2;

		// Calculate saturation
		s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

		// Multiply l and s by 100
		s = +(s * 100).toFixed(1);
		l = +(l * 100).toFixed(1);
		this.h = h; // criando um novo atributo aqui
		this.s = s; // criando um novo atributo aqui
		this.l = l; // criando um novo atributo aqui
	}
}
const red = new Color(255, 67, 89, 'tomato');
red.hsl(); // 'hsl(353,100%, 63.1%)'
red.opposite(); // 'hsl(173,100%, 63.1%)'
red.rgba(0.3); // 'rgba(255, 67, 89, 0.3)'
const white = new Color(255, 255, 255, 'white');
/*Color {r: 255, g: 255, b: 255, name: 'white', h: 0, …}
b: 255
g: 255
h: 0
l: 100
name: "white"
r: 255
s: 0*/
