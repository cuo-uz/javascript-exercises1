// alert("Hello World")
// Ejercicio 1


// document.write("Hello World");
// Ejercicio 2


// alert(`El resultado de la suma es: ${3 + 5}`);
// Ejercicio 3


// var nombre = prompt("Ingrese su usuario", "")
// alert(`Hola usuario ${nombre}`)
// Ejercicio 4


// var num1 = parseInt(prompt("Ingrese un numero", ""), 10);
// var num2 = parseInt(prompt("Ingrese otro numero", ""), 10);
// alert(`El resultado de la suma es: ${num1 + num2}`);
// Ejercicio 5


// var num3 = parseInt(prompt("Ingrese otro otro numero", ""), 10);
// var num4 = parseInt(prompt("Ingrese otro mas jeje", ""), 10);
// Ejercicio 6


// if (num3 > num4) {
//     alert(`El numero mayor es: ${num3}`);
// }else {
//     alert(`El numero mayor es: ${num4}`);
// }
// Ejercicio 7


// if (num1 > num2 && num1 > num3) {
//     alert(`El numero mas grande es el numero 1`)
// }else if (num2 > num1 && num2 > num3){
//     alert(`El numero mas grande es el numero 2`)
// }else {
//     alert(`El numero mas grande es el numero 3`)
// }
// Ejercicio 8


// if (num1 % 2 == 0) {
//     alert("El numero es divisible por 2")
// }else {
//     alert("El numero no es divisible por 2")
// }
// Ejercicio 9


// var oracion = prompt("Escriba una oracion");
// var contador = 0;
// for (i = 0; i < oracion.length; i++){
//     if (oracion[i] == 'a' || oracion[i] == 'A') {
//         contador = contador + 1
//     }
// }
// alert(`En la frase "${oracion}" la palabra 'A' esta ${contador} veces`);
// Ejercicio 10


// var numeroVocales = oracion.match(/[aeiou]/gi)
// alert(`Las vocales que hay en ${oracion} son ${numeroVocales}`);
// Ejercicio 10


// var numeroVocales = oracion.match(/[aeiou]/gi).length;
// alert(`La cantidad de vocales que hay en ${oracion} son ${numeroVocales}`);
// Ejercicio 11


// var numeroDivisible = parseInt(prompt("Ingrese un numeritoooo", ""), 10);
// if (numeroDivisible % 2 == 0 || numeroDivisible % 3 == 0 || numeroDivisible % 5 == 0 || numeroDivisible % 7 == 0) {
//     alert("Tu numero, es divisible ;)");
// }else {
//     alert("keeeeeeeeeep trying");
// }
//Ejercicio 12


// var divisores = [2,3,5,7]
// for (i = 0; i < divisores.length; i++) {
//     if (numeroDivisible % divisores[i] == 0) {
//         alert(`Tu numero es divisible por ${divisores[i]}`)
//     }else {
//         alert(`Tu numero no es divisible por ${divisores[i]}`)
//     }
// }
//Ejercicio 13


// var divisores_2 = []
// for (i = 2; i < numeroDivisible; i++) {
//     if (numeroDivisible % i == 0) {
//         divisores_2.push(i);
//     }
// }
// alert(`Los divisores de ${numeroDivisible} son ${divisores_2}`)
//Ejercicio 14


// var numero_1 = parseInt(prompt("Ingrese un numero porfa", ""), 10)
// var numero_2 = parseInt(prompt("Ingrese otro numero porfa", ""), 10)
// var divisores_comunes = []
// if (numero_1 > numero_2){
//     for (i = 2; i < numero_1; i++){
//         if(numero_1 % i == 0 && numero_2 % i == 0){
//             divisores_comunes.push(i);
//         }
//     }
// }else if (numero_2 > numero_1) {
//     for (i = 2; i < numero_2; i++){
//         if(numero_1 % i == 0 && numero_2 % i == 0){
//             divisores_comunes.push(i);
//         }
//     }
// }
// console.log(divisores_comunes)
//Ejercicio 15


// var numero_primo = parseInt(prompt("Ingrese un numero, si ya se, re pesado estoy"), 10)
// var estado = false;
// if (numero_primo == 2){
//     alert("Tu numero es primo")
// }else {
//     for (i = 2; i < numero_primo; i++){
//         if (numero_primo % i == 0){
//             estado = false;
//             break
//         }else {
//             estado = true;
//         }
//     }
// }
// if (estado == true){
//     alert("Tu numero es primo")
// }else {
//     alert("Tu numero no es primo")
// }
//Ejercicio 16


// var edad = parseInt(prompt("Ingresa tu edad", ""), 10);
// if (edad >= 18){
//     alert("Ya podes manejar");
// }
//Ejercicio 17


// var nota = parseInt(prompt("Ingresa tu nota", ""), 10);
// switch (nota) {
//     case 0:
//     case 1:
//     case 2:
//         alert("Tu calificacion es deficiente")
//         break;
//     case 3:
//     case 4:
//         alert("Tu calificacion es insuficiente")
//         break;
//     case 5:
//         alert("Tu calificacion es suficiente")
//         break;
//     case 6:
//     case 7:
//         alert("Tu calificacion esta bien")
//         break;
//     case 8:
//         alert("Tu calificacion es notable")
//         break;
//     case 9:
//     case 10:
//         alert("Tu calificacion es sobresaliente")
//         break;
// }
//Ejercicio 18


// var texto = prompt("Ingrese una oracion", "");
// var guardaTexto = texto
// while (texto != null  && texto != "") {
//     texto = prompt("Ingrese una oracion mas", "");
//     guardaTexto = guardaTexto + "-" + texto;
// }
// alert(`Tu texto es: ${guardaTexto}`);
// Ejercicio 19


// var numero = Number(prompt("Ingrese un numero", ""));
// var guardaNumero = numero
// while (numero != null && numero > 0) {
//     numero = Number(prompt("Ingrese otro numero", ""));
//     guardaNumero = guardaNumero + numero;
// }
// alert(`Tu numero es ${guardaNumero}`);
// Ejercicio 20


// for(i = 1; i <= 30; i++){
//     for(x = 0; x < i; x++){
//         console.log(i);
//     }
// }
// Ejercicio 21


// for (i = 1; i <= 30; i++){
//     for (j = 0; j < i; j++){
//         console.log(i)
//     }
// }
// Ejercicio 22


// for (i = 6; i <= 6; i--){
//     if (i != 0){
//         for(j = 0; j < i; j++){
//             console.log(i)
//         }
//     }else{
//         console.log('3 2 1 game over')
//         break
//     }
// }
// Ejercicio 23


// for(i = 1; i <= 500; i++){
//     if (i % 4 == 0){
//         console.log(`${i} es multiplo de 4`)
//     }else if (i % 9 == 0) {
//         console.log(`${i} es multiplo de 9`)
//     }else {
//         console.log(i)
//     }
//     if (i % 5 == 0) {   
//         console.log('-------------')
//     }
// }
// Ejercicio 24