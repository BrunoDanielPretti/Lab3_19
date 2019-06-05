window.onload = function(){
    var vec = [3,4,2,6,7,5];
    
    //var dobles = vec.map()

    var dobles =vec.map( (valor, indice, array)=>{
        console.log(array);
        return valor * 10;
    });

    console.log(dobles);    

    dobles = vec.map(val=>val*2);
    console.log(dobles);    

    //---------------------------------------------------------------

    var x = empleados.map(function(e){
        return {id: e.id, email: e.email}
    });
    console.log(x);
    
}


/*
function CargarSelect(){
    var select = document.getElementsByTagName('select')[0];
    if(select.hasChildNodes() ){
        return;
    }
    var nombres = empleados.map(function(empleado){
        return empleado.nombre;
    })

    nombres.forEach(nombre => {
        var opcion = document.createElement('option');
        opcion.textContent = nombre;
        select.appendChild(opcion);
    });
}
*/


/*
vec.forEach(function(i){
        dobles.push(i * 2);
    });
*/