<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <h1>Registro de Jugadores</h1>
    <input type="text" placeholder="ingrese el jugador" id="jugador" ><br>
    <input type="text" placeholder="ingrese el equipo" id="equipo" >
    <input type="button" value="Grabar" id="btnGrabar"><br>
    <input type="button" value="Mostrar" id="btnMostrar">
    <div id="tabla">
    <table border="1">

        <h1>Tabla</h1>
            <tr>
            <td>Jugador
            </td>
            <td> Equipo</td>
        </tr>
        <tbody id="tbody">

        </tbody>

    </table>
</div>
</body>
<script>
var tabladeJugadores=document.getElementById("tbody")
var divta= document.getElementById("tabla")
divta.style.display="none"

var jugadores=[];

function Jugador (nombre,equipo){
this.nombre=nombre,
this.equipo=equipo
}

// grabar
document.getElementById("btnGrabar").addEventListener("click", function () {
   var nuevoJugador= new Jugador (
       document.getElementById("jugador").value,
       document.getElementById("equipo").value
      
   );
   
   jugadores.push(nuevoJugador);
   var limpiar = function(){
    document.getElementById("tbody").innerHTML=""
   
   }
limpiar ("tbody")
   
})

// mostrar
document.getElementById("btnMostrar").addEventListener("click", function () {
   divta.style.display="block" 
  
   for (var i = 0; i < jugadores.length; i++) {
       var tr=document.createElement("tr")
       var td=document.createElement ("td")
       var td1=document.createElement ("td")
       td.appendChild(document.createTextNode(jugadores[i].nombre));
       td1.appendChild(document.createTextNode(jugadores[i].equipo));
       tr.appendChild(td);
       tr.appendChild(td1);
       tabladeJugadores.appendChild(tr)
       
   }
  
})





</script>

</html>
