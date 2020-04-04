(function(){
    var plugins = document.getElementById("plugins");

    var pluginsLength = navigator.plugins.length;

    for (var i = 0; i < pluginsLength; i ++) {
        var str = "";
        str += "Plugin: " + navigator.plugins[i].name + ".<br>";
        plugins.innerHTML += str;
    }

    if (plugins.innerHTML == "") {
        plugins.innerHTML = "No browser plugins currently available."
    }



})(); 