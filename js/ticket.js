let numeroKilometri;
let eta;
let prezzoBiglietto;
const scontoMinorenni=20;
const scontoPenzionati=40;
const prezzoKilometri=0.21;
do
    {
    alert("inserisci il valore a numero")
    numeroKilometri= prompt("inserisci il numero di kilometri");
    eta= prompt("inserisci la tua età");
    
    } 
while(isNaN(numeroKilometri)|| isNaN(eta) )
prezzoBiglietto=numeroKilometri*prezzoKilometri;
if(eta>18 && eta<65)
    {
    alert(prezzoBiglietto.toFixed(2))
    }
else if(eta>65)
    {
    prezzoBiglietto=(prezzoBiglietto*scontoPenzionati)/100;
    alert("pensionati" + prezzoBiglietto.toFixed(2))
    }
else
    {
    prezzoBiglietto=(prezzoBiglietto*scontoMinorenni)/100,2;
    alert("minorenni " + prezzoBiglietto.toFixed(2))
    }