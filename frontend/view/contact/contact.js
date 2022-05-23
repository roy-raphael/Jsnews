/**
 * Gère l'affichage et les interactions de la page de contact
 */

let sendButton = document.getElementsByClassName("btn")[0];
sendButton.addEventListener('click', function(event) {
    var valid = true;
    for(let input of document.querySelectorAll(".form input,.form textarea")){
        valid &= input.reportValidity();
        if(! valid){
            break;
        }
    }
    if(valid){
        alert("Votre message a bien été envoyé.");
    }
});
