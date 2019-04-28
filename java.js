function IMC () {
    var altura1 = document.getElementById("altura").value;
    var peso1 = document.getElementById("peso").value;
    var altura2 = altura1 * altura1;
    var resultado1 = peso1/altura2;
    if (resultado1 < 18.5) {
        alert("IMC de valor: "+resultado1.toFixed(2)+"\nConsiderado abaixo do peso");
    }
    else if (resultado1 >= 18.5 && resultado1 < 24.9) {
        alert("IMC de valor: "+resultado1.toFixed(2)+"\nConsiderado peso normal");
    }
    else if (resultado1 >= 24.9 && resultado1 < 29.9) {
        alert("IMC de valor: "+resultado1.toFixed(2)+"\nConsiderado sobrepeso");
    }
    else if (resultado1 >= 29.9 && resultado1 < 34.9) {
        alert("IMC de valor: "+resultado1.toFixed(2)+"\nConsiderado obesidade grau 1");
    }
    else if (resultado1 >= 34.9 && resultado1 < 39.9) {
        alert("IMC de valor: "+resultado1.toFixed(2)+"\nConsiderado obesidade grau 2");
    }
    else if (resultado1 >= 40) {
        alert("IMC de valor: "+resultado1.toFixed(2)+"\nConsiderado obesidade grau 3");
    }
  }
