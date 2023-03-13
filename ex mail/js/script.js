// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

// lista mail che possono accedere
const mailList = ['giorgia@gmail.com', 'giulia@gmail.com', 'roberto@gmail.com', 'simone@gmail.com'];
console.log(mailList);




const inputMail = document .getElementById('user-email');
const inputSubmit =document .getElementById('invia');

// prelevo email dell utente
inputSubmit.addEventListener('click',function(){
    const userMail = inputMail.value;
    console.log(userMail);
    // se l email dell utente appartiene alla lista puo accedere

    //    ho bisogno della lista
    let match= false;
    for (let i=0;i<mailList.length;i++){
        const userAllowed= mailList[i]
        console.log(userAllowed);
        if(userMail === userAllowed){
            match=true;
        }
    }
    if(match===true){
        console.log('login effettuato con successo');
    }else{
        console.log('non puoi accedere');
    }


})




