window.addEventListener('load', inicializarEventos);

function inicializarEventos(){
    document.getElementById("btn_tabla").addEventListener('click', Tabla_Cargar);
}






function Tabla_Cargar(){
    console.log("Tabla_Cargar");
    var parametro = personas;

    var tabla = document.createElement('table');    
    
    //tabla.setAttribute('class', 'tabla');
    //tabla.className = 'tabla';
    //tabla.setAttribute('border', '1px solid red') ;
    //tabla.setAttribute('style', 'border-collapse:collapse')

    var cabecera = document.createElement('tr');

    for( var atributo in parametro[0] ){  //si recorres uno solo te da los nombres de los atributos
        var th = document.createElement('th');
        //var texto = document.createTextNode(atributo);
        //th.appendChild(texto);
        th.textContent = atributo
        cabecera.appendChild(th);
    }
    tabla.appendChild(cabecera);

    for (var i in parametro) {
        var fila = document.createElement('tr');

        for ( var j in parametro[i] ){
            //console.log(j);  mostraria los nombres de los atributos
            var celda = document.createElement('td');
            //celda.setAttribute('style', 'text-align:center');
            var dato  = document.createTextNode( parametro[i][j] );
            celda.appendChild(dato);
            fila.appendChild(celda);

            
        }

        tabla.appendChild(fila);
    }

    document.getElementById('info').appendChild(tabla);

    console.log(tabla);
}




//------------------------------------------------------------------------------------------------------------
function cosa1(){
    //console.log(personas);

    // var h1 = document.createElement('h1');
    // var texto = document.createTextNode("Hola mundo UTN");
    // document.getElementById('info').appendChild(texto);
}