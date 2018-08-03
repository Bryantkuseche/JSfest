//Piedra papel y tijera
function piedra_papel_tijera (piedra,papel,tijera){
	if(piedra == true && papel == true && tijera == false){
		return 'Papel gana';
	}
	else if (piedra == true && papel == true && tijera == true){
		return 'empate';
	}
}
const piedra = true;
const papel = true;
const tijera = true;
console.log(piedra_papel_tijera(piedra,papel,tijera));