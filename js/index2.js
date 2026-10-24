function fn_suma(num1, num2){
    const suma = num1 + num2;
    return suma;
}

function fn_resta(num1=0, num2=0){
    return num1 - num2;
}

console.log(fn_resta(15,10));
console.log(fn_resta());


// FUNCION ANONIMA
const suma = function(numero1, numero2){
    return numero1 + numero2;
}
// FUNCION FLECHA 1
const suma2 = (numero1, numero2)=>{
    return numero1 + numero2;
}
// FUNCION FLECHA 2
const suma3 = (numero1, numero2)=> numero1 + numero2

console.log("La suma es: ", fn_suma(15, 20));
console.log("FA - Suma : ", suma(15, 20));
console.log("FF1 - Suma : ", suma2(15, 20));
console.log("FF2 - Suma : ", suma3(15, 20));