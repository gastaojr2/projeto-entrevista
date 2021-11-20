//script de saudação.  
let hora = new Date();
let horaAtual = hora.getHours();
function saudacao() {
	if(horaAtual < 5) {
   return document.write("Boa Noite!");
} else if(horaAtual < 8) {
   return document.write("Bom Dia!");
} else if(horaAtual < 12) {
   return document.write("Bom Dia!");
} else if(horaAtual < 18) {
   return document.write("Boa tarde!");
} else {
   return document.write("Boa noite!");
}
}   
