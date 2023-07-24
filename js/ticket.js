let numeroKilometri;
let età;
let prezzoBiglietto;
const scontoMinorenni=20;
const scontoPenzionati=40;
const prezzoKilometri=0.21;
do
    {
    alert("inserisci il valore a numero")
    numeroKilometri= prompt("inserisci il numero di kilometri");
    età= prompt("inserisci la tua età");
    
    } 
while(isNaN(numeroKilometri)|| isNaN(età) )
prezzoBiglietto=parseFloat(numeroKilometri*prezzoKilometri,2);
if(età>18 && età<65)
    {
    alert(prezzoBiglietto)
    }
else if(età>65)
    {
    prezzoBiglietto=parseFloat((prezzoBiglietto*scontoPenzionati)/100,2);
    alert("pensionati",prezzoBiglietto)
    }
else
    {
    prezzoBiglietto=parseFloat((prezzoBiglietto*scontoMinorenni)/100,2);
    alert("minorenni",prezzoBiglietto)
    }