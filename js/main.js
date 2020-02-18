//STEP 1: Voglio sapre il prezzo di un singolo biglietto in base a quanti km faccio senza sconti.

// Info: Quanti Km vuoi percorrere?
var numeroKmDaPercorrere = prompt('Quanti km vuoi percorrere?');
document.getElementById('km').innerHTML = numeroKmDaPercorrere;


// Info: Quanti anni hai?
var etàUtente = prompt('Quanti anni hai?');
document.getElementById('età').innerHTML = etàUtente;

//Prezzo di un singolo Km
var prezzoSingoloKm = 0.21;


//Prezzo totale del viaggio
var prezzoBiglietto = prezzoSingoloKm * numeroKmDaPercorrere;
// document.getElementById('biglietto').innerHTML = prezzoBiglietto

// STEP 2: voglio sapere quanto mi costeranno i biglietti scontati:

// Quanto mi costeranno i biglietti se sono minorenne (20%)?
var bigliettoMinorenni = ((prezzoBiglietto * 20) / 100)
var bigliettoMinorenni = prezzoBiglietto - bigliettoMinorenni;


//Quanto mi costeranno i biglietti se sono Over 65 (40%)?
var bigliettoOver65 = ((prezzoBiglietto * 40) / 100)
var bigliettoOver65 = prezzoBiglietto - bigliettoOver65;
// document.getElementById('over65').innerHTML = bigliettoOver65;



//STEP 2: collegare i correlativi prezzi in base al "click" sull'età definita

//Biglietti 20% se si è minorenni
//  0 <------------>= 16
//Biglietti prezzo normale
// 16 <------------> 65
//Biglietti 40% se si è bigliettoOver65
// 65 <= 65 -------------->

if ( etàUtente <= 16) {
    document.getElementById('minorenni').innerHTML = 'Il prezzo di un biglietto sotto i 17 anni è di' + bigliettoMinorenni ;
} else if (etàUtente >= 65){
    document.getElementById('over65').innerHTML = 'Il prezzo di un biglietto sopra i 65 anni è di' + bigliettoOver65 ;
} else {
    document.getElementById('biglietto').innerHTML = 'Il prezzo di un signolo bilgietto è di' + prezzoBiglietto;
}
