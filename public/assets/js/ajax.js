var nbProject = 0;
var listen = 0;

// fetch de la description de l'accueil //
fetch('https://florianr.promo-17.codeur.online/api-portfolio/controllers/description-accueil.php')
  .then(function (response) {
    return response.json();
  })
  .then(function (myJson) {

    document.getElementById('fetchDescriptionAccueil').innerHTML = myJson.description;

  });

// fetch du contenu de contact Layer //
fetch('https://florianr.promo-17.codeur.online/api-portfolio/controllers/contact.php')
  .then(function (response) {
    return response.json();
  })
  .then(function (contact) {

    document.getElementById('fetch-adress-mail').innerHTML = contact.mail;
    document.getElementById('fetch-telephone').innerHTML = contact.phone;
    document.getElementById('fetch-facebook').innerHTML = contact.facebook;
    document.getElementById('fetch-text-contact').innerHTML = contact.text;
  });
// fetch du contenu de la balise select sur l'api //
fetch('https://florianr.promo-17.codeur.online/api-portfolio/controllers/category.php')
  .then(function (response) {
    return response.json();
  })
  .then(function (categories) {

    categories.forEach(element => {
      document.getElementById('inputGroupSelect04').innerHTML += '<option value="' + element.id + '">' + element.name_category + '</option>';
    });


  });

// fetch de la liste des projets sur l'api //
fetch('https://florianr.promo-17.codeur.online/api-portfolio/controllers/projects.php')
  .then(function (response) {
    return response.json();
  })
  .then(function (projects) {
    projectlist = projects
    nbProject = 0;
    projects.forEach(element => {

      document.getElementById('fetch-project-images').innerHTML += '<div id="prjct' + element.id + '" class="zopen col-12" data-cat-hostedlink="' + element.link_project + '" data-cat-gulink="' + element.github_project + '" data-cat-desc="' + element.description_project + '" data-cat-name="' + element.name_project + '" data-cat-imglink="' + element.image_project + '" ><img src="' + element.image_project + '" class="apercu img-thumbnail sp2" width="100%"></div>';
      nbProject += 1;
    });

    if (nbProject <= 2) {

      document.getElementById("scrollalert").style.display = 'none';
    } else {
      document.getElementById("scrollalert").style.display = 'block';
    }

    // insertion des données fetch de l'api dans les data cat des divs //
    lol = document.querySelectorAll('.zopen');

    lol.forEach(element => {
      element.addEventListener('click', function () {
        document.getElementById('emplacements-projets').style.overflow = 'hidden';
        document.getElementById('project-detail-layer').style.top = '0%';
        timing = 4;
        console.log(element.getAttribute('data-cat-name'));
        title = (element.getAttribute('data-cat-name'));
        document.getElementById('project-title').innerHTML = title;

        image = (element.getAttribute('data-cat-imglink'));
        document.getElementById('fsimage').src = image;

        desc = (element.getAttribute('data-cat-desc'));
        document.getElementById('full-desc-text').innerHTML = desc;

        githublink = (element.getAttribute('data-cat-gulink'));
        document.getElementById('github-link').href = githublink;

        hostedl = (element.getAttribute('data-cat-hostedlink'));
        document.getElementById('hosted-link').href = hostedl;

      })
    });

  });

// Ajout du listener pour fermer le detail layer //
document.getElementById('close-details').addEventListener('click', function (e) {
  document.getElementById('project-detail-layer').style.top = '100%';
  setTimeout(function () {
    document.getElementById('emplacements-projets').style.overflow = 'scroll';
  }, 1000);
});

// fetch du contenu de l'onglet compmétences //
fetch('https://florianr.promo-17.codeur.online/api-portfolio/controllers/competencies.php')
  .then(function (response) {
    return response.json();
  })
  .then(function (competencies) {

    competencies.forEach(element => {

      document.getElementById('emplacements-comps').innerHTML += '<div class="row comp-row"><div class="col-4 slotimagecomp">  <img class="img-fluid imagecomp" src="' + element.path_logo_competency + '"></div><div class="col-8 comp-name"><p>' + element.name_competency + '</p></div><div>';

    });

  });

// ecoute du bouton FILTRER , si catégotie = tout, fetch de la totalité des projets du l'api //
$("#buttonfilter").click(function (e) {
  nbProject = 0;
  choice = document.getElementById('inputGroupSelect04').value;


  if (choice == "a") {

    fetch('https://florianr.promo-17.codeur.online/api-portfolio/controllers/projects.php')
      .then(function (response) {
        return response.json();
      })
      .then(function (projects) {
        projectlist = projects

        document.getElementById('fetch-project-images').innerHTML = '';
        projects.forEach(element => {

          document.getElementById('fetch-project-images').innerHTML += '<div id="prjct' + element.id + '" class="zopen col-12" data-cat-hostedlink="' + element.link_project + '" data-cat-gulink="' + element.github_project + '" data-cat-desc="' + element.description_project + '" data-cat-name="' + element.name_project + '" data-cat-imglink="' + element.image_project + '" ><img src="' + element.image_project + '" class="apercu img-thumbnail sp2" width="100%"></div>';
          nbProject += 1;
        });


        if (nbProject <= 2) {
          document.getElementById("scrollalert").style.display = 'none';
        } else {
          document.getElementById("scrollalert").style.display = 'block';
        }
        lol = document.querySelectorAll('.zopen');

        lol.forEach(element => {
          element.addEventListener('click', function () {
            document.getElementById('emplacements-projets').style.overflow = 'hidden';
            document.getElementById('project-detail-layer').style.top = '0%';
            timing = 4;
            console.log(element.getAttribute('data-cat-name'));
            title = (element.getAttribute('data-cat-name'));
            document.getElementById('project-title').innerHTML = title;

            image = (element.getAttribute('data-cat-imglink'));
            document.getElementById('fsimage').src = image;

            desc = (element.getAttribute('data-cat-desc'));
            document.getElementById('full-desc-text').innerHTML = desc;

            githublink = (element.getAttribute('data-cat-gulink'));
            document.getElementById('github-link').href = githublink;

            hostedl = (element.getAttribute('data-cat-hostedlink'));
            document.getElementById('hosted-link').href = hostedl;

          })
        })
      })
  } else {
    nbProject = 0;

    $.ajax({
      type: "POST",
      url: "https://florianr.promo-17.codeur.online/api-portfolio/controllers/filter.php",
      data: {
        "choice": choice
      },
      dataType: "json",
      success: function (data) {

        document.getElementById('fetch-project-images').innerHTML = '';
        data.forEach(element => {

          document.getElementById('fetch-project-images').innerHTML += '<div id="prjct' + element.id + '" class="zopen col-12" data-cat-hostedlink="' + element.link_project + '" data-cat-gulink="' + element.github_project + '" data-cat-desc="' + element.description_project + '" data-cat-name="' + element.name_project + '" data-cat-imglink="' + element.image_project + '" ><img src="' + element.image_project + '" class="apercu img-thumbnail sp2" width="100%"></div>';
          nbProject += 1;
        });

        if (nbProject <= 2) {
          document.getElementById("scrollalert").style.display = 'none';
        } else {
          document.getElementById("scrollalert").style.display = 'block';
        }
        lol = document.querySelectorAll('.zopen');

        lol.forEach(element => {
          element.addEventListener('click', function () {
            document.getElementById('emplacements-projets').style.overflow = 'hidden';
            document.getElementById('project-detail-layer').style.top = '0%';
            timing = 4;

            title = (element.getAttribute('data-cat-name'));
            document.getElementById('project-title').innerHTML = title;

            image = (element.getAttribute('data-cat-imglink'));
            document.getElementById('fsimage').src = image;

            desc = (element.getAttribute('data-cat-desc'));
            document.getElementById('full-desc-text').innerHTML = desc;

            githublink = (element.getAttribute('data-cat-gulink'));
            document.getElementById('github-link').href = githublink;

            hostedl = (element.getAttribute('data-cat-hostedlink'));
            document.getElementById('hosted-link').href = hostedl;

          })
        })

      },

    })


  }
})