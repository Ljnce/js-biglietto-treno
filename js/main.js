//STEP 1: Voglio sapre il prezzo di un singolo biglietto in base a quanti km faccio senza sconti.

// Info: Quanti Km vuoi percorrere?
var numeroKmDaPercorrere = prompt('Quanti km vuoi percorrere?');
document.getElementById('km').innerHTML = 'Il tuo viaggio sarà di: ' + numeroKmDaPercorrere + ' km;';


// Info: Quanti anni hai?
var etàUtente = prompt('Quanti anni hai?');
document.getElementById('età').innerHTML = 'Età passeggero: ' + etàUtente + ' anni;';

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
var bigliettoOver65 = ((prezzoBiglietto * 40) / 100);
var bigliettoOver65 = prezzoBiglietto - bigliettoOver65;
// document.getElementById('over65').innerHTML = bigliettoOver65;



//STEP 3: collegare i correlativi prezzi in base al "click" sull'età definita

//Biglietti 20% se si è minorenni
//  0 <------------>= 16
//Biglietti prezzo normale
// 16 <------------> 65
//Biglietti 40% se si è bigliettoOver65
// 65 <= 65 -------------->

if ( etàUtente <= 18) {
    document.getElementById('minorenni').innerHTML = 'Il tuo prezzo è scontato del 20%; pagherai: ' + bigliettoMinorenni + '€;';
} else if (etàUtente >= 65){
    document.getElementById('over65').innerHTML = 'Il tuo prezzo è scontato del 40%; pagherai: ' + bigliettoOver65 + '€;';
} else {
    document.getElementById('biglietto').innerHTML = 'Il prezzo di un singolo biglietto è di: ' + prezzoBiglietto + '€;';
}

//EXTRA Aggiungi un codice sconto per aver un ulteriore sconto del 10%:
var inserisciSconto = prompt('Affrettati, solo per oggi potrai usufruire di uno sconto del 10% extra! 😵 \n \r ------> Codice 10 se hai tra i 18 e i 65 anni. ☝🏻 \n \r ------> Codice 18 se sei sotto i 18 anni. ☝🏻 \n \r ------> Codice 65 se sei sopra i 65 anni. ☝🏻')

//Sconto del 10% sul totale "prezzo intero"
var prezzoIntero = (prezzoBiglietto * 10) / 100;
var prezzoIntero = prezzoBiglietto - prezzoIntero;
// document.getElementById('sconto').innerHTML = 'Complimenti, hai un ulteriore sconto di ' + codice + ' € sul prezzo base';

//Sconto del 10% sul totale "prezzo minorenne"
var prezzoMinorenne = (bigliettoMinorenni * 10) / 100;
var prezzoMinorenne = bigliettoMinorenni - prezzoMinorenne;

//Sconto del 10% sul totale "prezzo over65"
var prezzoOver65 = (bigliettoOver65 * 10) / 100;
var prezzoOver65 = bigliettoOver65 - prezzoOver65;


if (inserisciSconto == 10){
     document.getElementById('scontointero').innerHTML = '--> Complimenti, il tuo nuovo prezzo scontato da codice è ora di ' + prezzoIntero + '€; <--';
} else if (inserisciSconto == 18) {
     document.getElementById('scontominorenni').innerHTML = '--> Complimenti, il tuo nuovo prezzo scontato da codice è ora di ' + prezzoMinorenne + '€; <--';
} else if (inserisciSconto == 65) {
     document.getElementById('scontoover65').innerHTML = '--> Complimenti, il tuo nuovo prezzo scontato da codice è ora di ' + prezzoOver65 + '€; <--';
} else {

}
