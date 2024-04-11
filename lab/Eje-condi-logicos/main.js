let edad= parseInt(prompt(" Entra una edad"));
edad = edad.toLowerCase();

let pais = prompt("Dónde resides?  -(Si o NO)");
pais = pais.toLowerCase();

let familia = prompt("Eres familia numerosa?  -(Si o NO)");
fam = fam.toLowerCase();

let skill = prompt("Eres familia numerosa?  -(Si o NO)");
skill = skill.toLowerCase();

if ((edad >= 18  &&  pais == "barcelona") || (edad >= 30  &&  fam == "si") || ((edad >= 12 &&  edad <= 18)  &&  skill == "si")){
  document.write(" Optas a  la beca.");
} else {
  document.write(" No optas a  la beca.");
}