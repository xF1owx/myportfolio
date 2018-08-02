// Envoi du formulaire Mail à l'API //

$("#submitmail").click(function(e) {
 console.log('caca');

let regexxCourriel = /.+@.+\..+/;
let formulaireElt = document.getElementById("formmail");
messErreur="";


if ( !regexxCourriel.test(formulaireElt.email.value) ) {
    messErreur = "Vous devez entrer un mail valide!";
document.getElementById('errormail').innerHTML= messErreur; 
setTimeout( function(){

    
    document.getElementById('errormail').innerHTML = '';
  
  }, 2000);
  
}else{
    e.preventDefault();
    
    $.ajax({
        type: "POST",
        url: "https://florianr.promo-17.codeur.online/api-portfolio/controllers/contactform.php",
        data: $("#formmail").serialize(),
        success: function(msg){
           
            
        },
        error: function(){
            alert("failure");
        },

       
   })
   
   $("#confirm").html('Message envoyé');
   $("#name").val('');
   $("#email").val('');
   $("#message").val('');
   setTimeout( function(){
   
       $("#confirm").html('');
     
     }, 2000);
   
    }
})

