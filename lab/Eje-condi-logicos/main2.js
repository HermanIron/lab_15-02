let lugar = prompt("vives cerca?");
lugar = lugar.toLowerCase();
let caminar =prompt("Quieres caminar?");
caminar = caminar.toLowerCase();

if ( lugar == "si" && caminar == "si") {
  document.write(" te vas andando y ya lo arreglarás mañana. ")
} else {
    let gasolina =  prompt(" Tienes gasolina?");
    gasolina = gasolina.toLowerCase();
      if (gasolina == "no"){
        let dinero = prompt( "Tienes dinero?");
        dinero = dinero.toLowerCase();
          if (dinero == "si"){
          document.write(" Ve a poner gasolina.");
          } else{
            document.write(" Te toca ir en metro")
          }
      } else {
        let bateria = prompt("Tiene batería?");
        bateria = bateria.toLowerCase();
          if (bateria== "si"){
            document.write("Pásate por el mecánico.");
          } else {
            document.write(" Recarga la batería.");
         }
      }
}
