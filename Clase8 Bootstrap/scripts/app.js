$(document).ready(Inicializar);

function Inicializar(){
    //alert("Inicializado");

    $("#btnSaludar").mouseover(function(){
        $(this).css("background-color", "red");
    });

    $("#btnSaludar").mouseleave(function () { 
        $(this).css("background-color", "inherit");
    });
}