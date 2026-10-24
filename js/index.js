
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

function fn_operaciones(numero1, numero2, operacion){
    console.log("Numero 1: ", numero1)
    console.log("Numero 2: ", numero2)
    console.log("Operacion Solicitada : ", operacion)
    let resultado = 0;
    if (operacion == "+"){
        resultado = numero1 + numero2;
    }else if(operacion == "-"){
        resultado = numero1 - numero2;
    }else if(operacion == "*"){
        resultado = numero1 * numero2;
    }else if(operacion == "/"){
        resultado = numero1 / numero2;
    }else{
        throw new Error("La operacion ingresada no existe");
    }
    return resultado;
}

function fn_procesar_operacion(){
    try{
        const numero1 = prompt("Ingrese numero 1 : ");
        const numero2 = prompt("Ingrese numero 2 : ");
        const operacion = prompt("Ingrese la operacion : [* Multiplicar,/ dividir, + suma, -resta] :")
        const resultado = fn_operaciones(parseInt(numero1), parseInt(numero2), operacion);
        console.log("Termino del calculo de la operacion solicitada");
    }catch(error){
        console.log(error);
        console.error("Error : ", error.message);
    }finally{
        console.log("el proceso de operaciones termino.");
    }
} // fin fn_procesar_operacion()

fn_saludar();
fn_saludar();
fn_bienvenida("Alex", "Portilla");
fn_bienvenida("Ana", "De Armas");
const suma = fn_sumar(10,20);
console.log("La suma es:", suma)
fn_procesar_operacion();


