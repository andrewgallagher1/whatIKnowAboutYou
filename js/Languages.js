(function(){

    var languages = document.getElementById("languages");
    var preferred = document.getElementById("preferred");

    var languagesList = navigator.languages;
    var pretty = "";
    languagesList.forEach(function(language) {
        pretty += (" " + language);  
    });

    languages.innerHTML += "Available Languages:" + pretty;
    preferred.innerHTML += "Preferred User Language: " + navigator.language;


})();