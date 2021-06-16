document.write("<h1>Hello World</h1>");
alert("¡Me llamo Sergio!")
var nameuser = "Sergio";
var lastname = "Alegre";

 console.log(nameuser, lastname);

 let numberOne = 34;
 let numberTwo = 56;

 let resultado = numberOne + numberTwo;

 console.log("La suma entre", numberOne, "y",  numberTwo, "es", resultado);

 let nota_examen = 4.6;

 

 if (nota_examen >= 5) {
     alert("Has aprobado el examen con un " + nota_examen);
    }
 else {
     alert("Oh has suspendido el examen con un " + nota_examen);
    }

    var frase = "Tinc un cotxe de color verd";
frase = frase.replace("verd","blau");
console.log(frase);
frase = frase.replace(/o/gi,'u');
console.log(frase);

let cosas = ['taula', 'cadira', 'ordinador', 'libreta'];

for(let i = 0; i < cosas.length; i++) {
    console.log("L'objecte", cosas[i], "está a la posició", [i])
}

function calculadora(operador, valor1, valor2){
    if (operador == 'suma') {
        total = valor1 + valor2;
        } else if (operador == 'resta') {
        total = valor1 - valor2;
        } else if (operador == 'multiplicacion') {
        total = valor1 * valor2;
        }
         document.write(total);
}

var resultat = calculadora('suma', 40, 20);
    



