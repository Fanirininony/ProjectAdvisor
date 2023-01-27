document.getElementById('but').onsubmit = function(e){
    var Titre = document.getElementById('project-title');
    var Lien = document.getElementById('project-img-link');
    var Texte = document.getElementById('project-text');

    
    e.preventDefault();
    return false;
}