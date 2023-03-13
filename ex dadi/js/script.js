// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
// numeri generati
 const userNumber =Math.floor(Math.random() * (6- 1 + 1)) + 1;
 console.log(userNumber,'utente');
 const computerNumber =Math.floor(Math.random() * (6- 1 + 1)) + 1;
 console.log(computerNumber ,'computer');
// confrontare i numeri
if(userNumber>computerNumber){
    console.log('vince utente');
}else if(userNumber<computerNumber){
    console.log('vince computer');
}else{
    console.log('pareggio');
}