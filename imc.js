function imc() {
	var nome = document.getElementById('nome').value;
	var peso = parseFloat(document.getElementById('peso').value);
	var altura = parseFloat(document.getElementById('altura').value);


	var imc = peso/(altura*altura);

	document.getElementById("thNome").innerHTML = nome;
	document.getElementById("thAltura").innerHTML = altura;
	document.getElementById("thPeso").innerHTML = peso;
	document.getElementById("thIMC").innerHTML = imc.toFixed(2);

	var elements = document.getElementsByTagName('input');
	for (var i = 0; i < elements.length; i++) {
		if (elements[i].type == "text"){
			elements[i].value = "";
		}
	}

}
