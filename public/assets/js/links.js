
//Transformation des boutons et redirection //

var timing = 0;

document.getElementById("githublogo").addEventListener('mousedown',function (e){
    document.getElementById('githublogo').style.width = '35px';
    document.getElementById('githublogo').style.height = '35px';
   
   
    

});
document.getElementById("githublogo").addEventListener('mouseup',function (e){
    document.getElementById('githublogo').style.width = '40px'; 
    document.getElementById('githublogo').style.height = '40px'; 
   
    
   

});
document.getElementById("linkedinlogo").addEventListener('mousedown',function (e){
    document.getElementById('linkedinlogo').style.width = '35px';
    document.getElementById('linkedinlogo').style.height = '35px';
   
    
    

});
document.getElementById("linkedinlogo").addEventListener('mouseup',function (e){
    document.getElementById('linkedinlogo').style.width = '40px'; 
    document.getElementById('linkedinlogo').style.height = '40px'; 
  
  
});
document.getElementById("fblogo").addEventListener('mousedown',function (e){
    document.getElementById('fblogo').style.width = '35px';
    document.getElementById('fblogo').style.height = '35px';
   
    
    

});
document.getElementById("fblogo").addEventListener('mouseup',function (e){
    document.getElementById('fblogo').style.width = '40px'; 
    document.getElementById('fblogo').style.height = '40px'; 

   
   

});
// FIN Transformation boutons //

// Sortie du menu //
document.getElementById("open-menu").addEventListener('click',function (e){
    document.getElementById('menu-layer').style.left = '53%';
    document.getElementById('cv-layer').style.left = '10%';
    document.getElementById('contact-layer').style.left = '19%';
    document.getElementById('projects-layer').style.left = '28%';
    document.getElementById('skills-layer').style.left = '37%'

});

 // ranger le menu //
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
    console.log(timing);
    

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
        console.log(timing);
        
    
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
            console.log(timing);
            
        
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
        console.log(timing);
        
    
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
        console.log(timing);
    });
    
    // FERMETURE CONTACFORM //
    document.getElementById('close-contactform').addEventListener('click',function (e){
        document.getElementById('contact-form-layer').style.top = '100%';
        timing = 1;
    });
    


