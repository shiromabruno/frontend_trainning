class Color {
    constructor(r, g, b, construtorQualquer){
        this.r = r;
        this.g = g;
        this.b = b;
        this.colorName = construtorQualquer;
    }

    // EH UM PROTOTYPE !!!
    // Color.prototype.greet = function(){ ... }
    greet(){
        return `Hello from ${this.colorName} !!!`
    }

    innerRGB(){
        let {r, g, b: renomeandoB } = this;
        return `${r}, ${g}, ${renomeandoB}`;
    }

    rgb(){
        //let {r, g, b: renomeandoB } = this;
        //return `rgb(${r}, ${g}, ${renomeandoB})`;
        return `rgb(${this.innerRGB()})`
    }

    // document.body.style.backgroundColor = objeto1.rgba(5)
    rgba(a = 1.0){ // esse a= 1.0 eh so o DEFAULT. Se passar assim [objeto1.rgba(5)] fica com 5 ===> 'rgb(125, 78, 210, 5)'
        return `rgb(${this.innerRGB()}, ${a})`
    }

    //objeto1.hex === objeto2.hex  ----> referencia ao mesmo function no prototype, por isso eh TRUE
    //true
    hex(){
        let {r: renomeandoR, g: renomeandoG ,b} = this; // referese ao objeto COLOR. Cria atributos R e G e B
		return (
			'#' + ((1 << 24) + (renomeandoR << 16) + (renomeandoG << 8) + b).toString(16).slice(1)
		);
	}
}

let objeto1 = new Color(125, 78, 210, "BrunoShiroma");
let objeto2 = new Color(023, 197, 115, "green");

//document.body.style.backgroundColor = objeto1.rgba(5)