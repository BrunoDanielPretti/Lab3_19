var vec = [3,4,2,6,7,5];

//vec.sort()  //ordena de menor a mayor

var pares = vec.filter(function(valor, indice, array){  //devuelve true o false, pasa o no pasa
    // if(valor % 2 == 0){
    //     return true;
    // }else{
    //     return false;
    // }
    //return (valor % 2 == 0)  //devuelve true o false
    return !(valor % 2);
});

var hombres = empleados.filter(function(empleado){
    return empleado.genero === "Male";
})

console.log(pares);
console.log(hombres);