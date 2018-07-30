
var listen = 0;

fetch('https://florianr.promo-17.codeur.online/api-portfolio/controllers/description-accueil.php')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    
    document.getElementById('fetchDescriptionAccueil').innerHTML = myJson.description;
    
  });


fetch('https://florianr.promo-17.codeur.online/api-portfolio/controllers/contact.php')
.then(function(response) {
  return response.json();
})
.then(function(contact) {
  
  document.getElementById('fetch-adress-mail').innerHTML = contact.mail;
  document.getElementById('fetch-telephone').innerHTML = contact.phone;
  document.getElementById('fetch-facebook').innerHTML = contact.facebook;
  document.getElementById('fetch-text-contact').innerHTML = contact.text;
});

  fetch('https://florianr.promo-17.codeur.online/api-portfolio/controllers/category.php')
  .then(function(response) {
    return response.json();
  })
  .then(function(categories) {
    
    categories.forEach(element => {
        document.getElementById('inputGroupSelect04').innerHTML += '<option value="'+element.id+'">'+element.name_category+'</option>';
    });
    
    
  });


  fetch('https://florianr.promo-17.codeur.online/api-portfolio/controllers/projects.php')
  .then(function(response) {
    return response.json();
  })
  .then(function(projects) {
    projectlist = projects
    
    projects.forEach(element => {

        document.getElementById('fetch-project-images').innerHTML += '<div id="prjct'+element.id+'" class="zopen col-12" data-cat-hostedlink="'+element.link_project+'" data-cat-gulink="'+element.github_project+'" data-cat-desc="'+element.description_project+'" data-cat-name="'+element.name_project+'" data-cat-imglink="'+element.image_project+'" ><img src="'+element.image_project+'" class="apercu img-thumbnail sp2" width="100%"></div>';
        
      });
      
      lol = document.querySelectorAll('.zopen');
      console.log(lol);
      lol.forEach(element => {
      element.addEventListener('click',function(){
        document.getElementById('emplacements-projets').style.overflow = 'hidden';
        document.getElementById('project-detail-layer').style.top = '0%';
        timing = 4;
        console.log(element.getAttribute('data-cat-name'));
        title = (element.getAttribute('data-cat-name'));
        document.getElementById('project-title').innerHTML = title ;

        image = (element.getAttribute('data-cat-imglink'));
        document.getElementById('fsimage').src = image ;

        desc = (element.getAttribute('data-cat-desc'));
        document.getElementById('full-desc-text').innerHTML = desc ;

        githublink = (element.getAttribute('data-cat-gulink'));
        document.getElementById('github-link').href = githublink ;

        hostedl = (element.getAttribute('data-cat-hostedlink'));
        document.getElementById('hosted-link').href = hostedl ;

      })
    });
    
  });


document.getElementById('close-details').addEventListener('click',function (e){
    document.getElementById('project-detail-layer').style.top = '100%';
    setTimeout(function(){ document.getElementById('emplacements-projets').style.overflow = 'scroll';},1000);
});
 

fetch('https://florianr.promo-17.codeur.online/api-portfolio/controllers/competencies.php')
  .then(function(response) {
    return response.json();
  })
  .then(function(competencies) {
    
    competencies.forEach(element => {
      
        document.getElementById('emplacements-comps').innerHTML += '<div class="row comp-row"><div class="col-4 slotimagecomp">  <img class="img-fluid imagecomp" src="'+element.path_logo_competency+'"></div><div class="col-8 comp-name"><p>'+element.name_competency+'</p></div><div>';
        
      });

    });


