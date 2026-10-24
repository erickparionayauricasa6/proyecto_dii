
function fn_saludar(){
    console.log("hola que tal !!!");
}

function fn_bienvenida(nombre, apellido){
    console.log("Bienvenido : "+ nombre + " " + apellido)
}

function fn_sumar(numero1, numero2){
    return numero1 + numero2;
}

function fn_restar(numero1, numero2){
    return numero1-numero2;
}

function fn_multiplicar(numero1, numero2){
    return numero1* numero2;
}

fn_saludar();
fn_saludar();

fn_bienvenida("Alex", "Portilla");
fn_bienvenida("Ana", "De Armas");

const suma = fn_sumar(10,20);
console.log("La suma es:", suma)
// Crear 2 funciones para dividir y multiplicar
// crear 1 funcion llamada fn_operaciones donde se pueda realizar las 4 operaciones

const numero1 = prompt("Ingrese numero 1 : ");
const numero2 = prompt("Ingrese numero 2 : ");
const operacion = prompt("Ingrese la operacion : [* Multiplicar,/ dividir, + suma, -resta] :")

