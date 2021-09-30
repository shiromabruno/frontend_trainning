let vetor = [1,2,3];
vetor.sing = function(){ // adicionando um elemento funciton no vetor
	console.log('lalalal')
}
vetor.push('bom dia')
vetor.push(true)

//()()())()())()())()())()())()())()())()())()())()())()())()())()())()())()())()())()())()())()())()())()())()())()())()()

String.prototype.teste = function(){
	alert('prototype TESTE para String ok')
}

let nome = "brunoshiroma"
// nome.teste(); // retorna o alerta prototype TESTE para String ok

String.prototype.yell = function() {
	//console.log(this); // retorna String {'asdasd'}0: "a"1: "s"2: "d"3: "a"4: "s"5: "d"length: 6[[Prototype]]: String[[PrimitiveValue]]: "asdasd"
	return `OMG !!! ${this.toUpperCase()} !!!`
}
// "teste".yell()
//  'OMG !!! TESTE !!!'

//()()())()())()())()())()())()())()())()())()())()())()())()())()())()())()())()())()())()())()())()())()())()())()())()()

Array.prototype.pop = function (){
	return "Nao tem mais a function POP..."
}

//[1,2,3].pop() 
//'Nao tem mais a function POP...'



//String.prototype is a "template object" for every single string.
//We could go crazy and add our own method called yell...
// String.prototype.yell = function() {
// 	return `OMG!!! ${this.toUpperCase()}!!!!! AGHGHGHG!`;
// };

// 'bees'.yell(); //"OMG!!! BEES!!!!! AGHGHGHG!"

// //We can overwrite an existing Array method like pop (not a good idea):
// Array.prototype.pop = function() {
// 	return 'SORRY I WANT THAT ELEMENT, I WILL NEVER POP IT OFF!';
// };
// const nums = [ 6, 7, 8, 9 ];
// nums.pop(); // "SORRY I WANT THAT ELEMENT, I WILL NEVER POP IT OFF!"
