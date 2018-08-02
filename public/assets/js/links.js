var timing = 0; // Variable de gestion ouverture fermeture des onglets //

// Sortie du menu //
document.getElementById("open-menu").addEventListener('click',function (e){
    document.getElementById('menu-layer').style.left = '53%';
    document.getElementById('cv-layer').style.left = '10%';
    document.getElementById('contact-layer').style.left = '19%';
    document.getElementById('projects-layer').style.left = '28%';
    document.getElementById('skills-layer').style.left = '37%'

});

// Ranger le menu //
document.getElementById("close-menu").addEventListener('click',function (e){
    document.getElementById('menu-layer').style.left = '100%';
});

// FERMETURE onglet cv
document.getElementById('onglet-cv').addEventListener('click',function (e){
if (timing == 1 ) {
    console.log("coucou");
    document.getElementById('cv-layer').style.left = '10%';
    document.getElementById('open-cv-2').style.visibility = 'visible';
    document.getElementById('open-cv').style.visibility = 'visible';
    document.getElementById('close-cv-2').style.visibility = 'hidden';
    document.getElementById('close-cv').style.visibility = 'hidden';
    document.getElementById('contact-layer').style.left = '19%';
    document.getElementById('projects-layer').style.left = '28%';
    document.getElementById('skills-layer').style.left = '37%';
    timing = 0;  
}
 //OUVERTURE  onlet cv//
else if (timing == 0 ) {

    document.getElementById('cv-layer').style.left= '-53%';
    document.getElementById('open-cv-2').style.visibility = 'hidden';
    document.getElementById('open-cv').style.visibility = 'hidden';
    document.getElementById('close-cv-2').style.visibility = 'visible';
    document.getElementById('close-cv').style.visibility = 'visible';
    document.getElementById('contact-layer').style.left = '100%';
    document.getElementById('projects-layer').style.left = '100%';
    document.getElementById('skills-layer').style.left = '100%';
    
    timing = 1;
    console.log(timing);

}


});

// FERMETURE onglet contact
document.getElementById('onglet-contact').addEventListener('click',function (e){
    if (timing == 1 ) {
        console.log("coucou");
        document.getElementById('contact-layer').style.left = '19%';
        document.getElementById('open-contact-2').style.visibility = 'visible';
        document.getElementById('open-contact').style.visibility = 'visible';
        document.getElementById('close-contact-2').style.visibility = 'hidden';
        document.getElementById('close-contact').style.visibility = 'hidden';
        document.getElementById('cv-layer').style.left = '10%';
        document.getElementById('projects-layer').style.left = '28%';
        document.getElementById('skills-layer').style.left = '37%';
        timing = 0;
    }
     //OUVERTURE  onlet contact//
    else if (timing == 0 ) {
    
        document.getElementById('contact-layer').style.left= '-53%';
        document.getElementById('open-contact-2').style.visibility = 'hidden';
        document.getElementById('open-contact').style.visibility = 'hidden';
        document.getElementById('close-contact-2').style.visibility = 'visible';
        document.getElementById('close-contact').style.visibility = 'visible';
        document.getElementById('cv-layer').style.left = '100%';
        document.getElementById('projects-layer').style.left = '100%';
        document.getElementById('skills-layer').style.left = '100%';
        
        timing = 1;
        console.log(timing);
    
    }
    else if (timing == 8 ) {
        document.getElementById('contact-form-layer').style.top = '100%';
        document.getElementById('contact-layer').style.left = '19%';
        document.getElementById('open-contact-2').style.visibility = 'visible';
        document.getElementById('open-contact').style.visibility = 'visible';
        document.getElementById('close-contact-2').style.visibility = 'hidden';
        document.getElementById('close-contact').style.visibility = 'hidden';
        document.getElementById('cv-layer').style.left = '10%';
        document.getElementById('projects-layer').style.left = '28%';
        document.getElementById('skills-layer').style.left = '37%';
        timing = 0;
        
        
        console.log(timing);
    
    }
    
    
});

// FERMETURE onglet projects //
document.getElementById('onglet-projects').addEventListener('click',function (e){
        if (timing == 1 ) {
            console.log("coucou");
            document.getElementById('projects-layer').style.left = '28%';
            document.getElementById('open-projects-2').style.visibility = 'visible';
            document.getElementById('open-projects').style.visibility = 'visible';
            document.getElementById('close-projects-2').style.visibility = 'hidden';
            document.getElementById('close-projects').style.visibility = 'hidden';
            document.getElementById('cv-layer').style.left = '10%';
            document.getElementById('contact-layer').style.left = '19%';
            document.getElementById('skills-layer').style.left = '37%';
            timing = 0;
        }
        else if (timing == 4) {
            document.getElementById('project-detail-layer').style.top = '100%';
            document.getElementById('projects-layer').style.left = '28%';
           
            document.getElementById('open-projects-2').style.visibility = 'visible';
            document.getElementById('open-projects').style.visibility = 'visible';
            document.getElementById('close-projects-2').style.visibility = 'hidden';
            document.getElementById('close-projects').style.visibility = 'hidden';
            document.getElementById('cv-layer').style.left = '10%';
            document.getElementById('contact-layer').style.left = '19%';
            document.getElementById('skills-layer').style.left = '37%';
            timing = 0;
        }
         //OUVERTURE  onglet projects//
        else if (timing == 0 ) {
        
            document.getElementById('projects-layer').style.left= '-53%';
            document.getElementById('open-projects-2').style.visibility = 'hidden';
            document.getElementById('open-projects').style.visibility = 'hidden';
            document.getElementById('close-projects-2').style.visibility = 'visible';
            document.getElementById('close-projects').style.visibility = 'visible';
            document.getElementById('cv-layer').style.left = '100%';
            document.getElementById('contact-layer').style.left = '100%';
            document.getElementById('skills-layer').style.left = '100%';
            
            timing = 1;
            console.log(timing);
        
        }
        
        
        
});

//FERMETURE onglet skills //
document.getElementById('onglet-skills').addEventListener('click',function (e){
    if (timing == 1 ) {
        console.log("coucou");
        document.getElementById('projects-layer').style.left = '28%';
        document.getElementById('open-skills-2').style.visibility = 'visible';
        document.getElementById('open-skills').style.visibility = 'visible';
        document.getElementById('close-skills-2').style.visibility = 'hidden';
        document.getElementById('close-skills').style.visibility = 'hidden';
        document.getElementById('cv-layer').style.left = '10%';
        document.getElementById('contact-layer').style.left = '19%';
        document.getElementById('skills-layer').style.left = '37%';
        timing = 0;
    }
     //OUVERTURE  onglet skills//
    else if (timing == 0 ) {
    
        document.getElementById('skills-layer').style.left= '-53%';
        document.getElementById('open-skills-2').style.visibility = 'hidden';
        document.getElementById('open-skills').style.visibility = 'hidden';
        document.getElementById('close-skills-2').style.visibility = 'visible';
        document.getElementById('close-skills').style.visibility = 'visible';
        document.getElementById('cv-layer').style.left = '100%';
        document.getElementById('contact-layer').style.left = '100%';
        document.getElementById('projects-layer').style.left = '100%';
        
        timing = 1;
        console.log(timing);
    
    }
    
    
});

 //OUVERTURE CONTACTFORM //
 document.getElementById('showcontactform').addEventListener('click',function (e){
document.getElementById('contact-form-layer').style.top = '0%';
timing = 8;
});
    
// FERMETURE CONTACFORM //
document.getElementById('close-contactform').addEventListener('click',function (e){
document.getElementById('contact-form-layer').style.top = '100%';
timing = 1;
});
    

// Gestion de l'affichage ou non de l'indicateur de scroll sur project Layer //
position = 0;
var scrollBottom = $("#emplacements-projets").scrollTop() + $("#emplacements-projets").height();
$("#emplacements-projets").scroll(function() {
  var scroll = $("#emplacements-projets").scrollTop();
  if (scroll > position) {
      document.getElementById("scrollalert").style.display = 'none';
    console.log("scrolling downwards");
  } else {
    console.log("scrolling upwards");
    document.getElementById("scrollalert").style.display= 'block';
  }
  position = scroll;
});

// Gestion de l'affichage ou non de l'indicateur de scroll sur skills Layer //
fl = 0;
$("#emplacements-comps").scroll(function() {
var scroll = $("#emplacements-comps").scrollTop();
if (scroll > fl) {
  document.getElementById("scrollalert2").style.display = 'none';
console.log("scrolling downwards");
} else {
console.log("scrolling upwards");
document.getElementById("scrollalert2").style.display= 'block';
}
position = scroll;
});