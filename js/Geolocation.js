(function(){
   // &fields=location.continent.name,location.country.name,location.region.name,location.city,location.latitude,location.longitude
    $.getJSON("https://api.ipregistry.co/?key=z570cdqo1k8fvj&fields=location.continent.name,location.country.name,location.region.name,location.city,location.latitude,location.longitude", function (data) {
       if (data.location.continent != "") { 
            var continent = document.getElementById("continent");
            var country = document.getElementById("country");
            var regionName = document.getElementById("regionName");
            var city = document.getElementById("city");
            var latitude = document.getElementById("latitude");
            var longitude = document.getElementById("longitude");

            continent.innerHTML = "Continent: " + data.location.continent.name;
            country.innerHTML= "Country: " + data.location.country.name;
            regionName.innerHTML = "State/Region: " + data.location.region.name;
            city.innerHTML = "City: " + data.location.city;
            latitude.innerHTML = "Latitude: " + JSON.stringify(data.location.latitude);
            longitude.innerHTML = "Longitude: " + JSON.stringify(data.location.longitude);

            
        } else {
            var failed = document.getElementById("failed");
            failed.innerHTML = "Cannot determine Geolocation."
        }

    });

})();