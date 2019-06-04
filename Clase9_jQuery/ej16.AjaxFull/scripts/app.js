const NexoP = "http://localhost:3000/";

window.onload = function(){
    Inicializar();
}

function Inicializar(){
    $("#btnEnviarAjax").on("click", enviarAjax);
    $("#btnEnviarGet").on("click", enviarGet);
    $("#btnEnviarGetMensajes").on("click", EnviarGetMensajes);
    $("#btnEnviarPost").on("click", EnviarPost);
    $("#btnLoad").on("click", UsarLoad);
}

function enviarAjax(e){   
    var legajo = $("#txtLegajo").val();
    var nombre = $("#txtNombre").val();

    
    var parametros = {
        "legajo": legajo,
        "nombre": nombre
    };

    $.ajax({
        url: NexoP+"conectar",
        data: parametros,
        beforeSend: function(){

        },
        success: function(res){

        },
        error: function(xhr, status){
            console.log("Error: "+xhr.status+" "+xhr.statusText);
        },
        complete: function(hr, status){
            console.log("Peticion Completa");
        }
    })
    
}

function enviarGet(e){
    e.preventDefault();

    var legajo = $("#txtLegajo").val();
    var nombre = $("#txtNombre").val();
    var parametros = {
        "legajo": legajo,
        "nombre": nombre
    };

    $.get(NexoP+"concatenar", parametros, function(res){
        $("#info").text(res);
    });
}

function EnviarGetMensajes(e){
    e.preventDefault();

    var legajo = $("#txtLegajo").val();
    var nombre = $("#txtNombre").val();
    var parametros = {
        "legajo": legajo,
        "nombre": nombre
    };

    $.get(NexoP+"concatenar", parametros, function(res){
        $("#info").text(res);
    }).done(function(data){
        console.log("done");
    }).fail(function(data){
        console.log("fail");
    }).always(function(data){
        console.log("always");
    })

    
}

function EnviarPost(e){
    e.preventDefault();

    var legajo = $("#txtLegajo").val();
    var nombre = $("#txtNombre").val();
    var parametros = {
        "legajo": legajo,
        "nombre": nombre
    };

    $.post(NexoP+"loadpost", function(res){
        $("#info").html(res);
    });

    $.post(NexoP+"saludo", parametros,function(res){
        console.log(res);
    });

}

function UsarLoad(e){
    
    $("#info").load(NexoP+"loadhtml");
}