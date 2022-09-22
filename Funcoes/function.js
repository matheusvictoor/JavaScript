
function atravessar(){
	console.log("A minha função atravessar funcionou");
}

function imprimir(parametro){
	console.log(parametro);
}

function multiplicar(a, b){
	imprimir(a * b);
}

function retorno(nome, sobrenome){
	resultado = nome + " " + sobrenome;
	return resultado;
}


atravessar();

imprimir("A função imprimir funcionou legal");

imprimir(155);

multiplicar(2,5);

console.log(retorno("Matheus", "Victor"));


