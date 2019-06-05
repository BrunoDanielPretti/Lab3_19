const log = console.log;

var vec = [3,4,2,9,6,7,5];

var res = vec.reduce(function(anterior, actual, indice, array){
    log("id: "+indice+" - ant: "+anterior+" - act: "+actual);
    return anterior + actual;   //lo q retorna va a ser el anterior del siguiente
}, 0); //elige en , si no esta se salta el indice 0 y lo toma como anterior

var max = vec.reduce(function(mayor, actual){
    if(actual > mayor)
        return actual;
    return mayor;
});


log("Suma: "+res);
log("Max: "+max);