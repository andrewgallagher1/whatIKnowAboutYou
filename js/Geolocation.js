(function(){
    
    $.getJSON("http://ip-api.com/json?fields=status,continent,country,regionName,city,lat,lon", function (data) {
        var status = data.status;
        if (status == "success") {
            var continent = document.getElementById("continent");
            var country = document.getElementById("country");
            var regionName = document.getElementById("regionName");
            var city = document.getElementById("city");
            var latitude = document.getElementById("latitude");
            var longitude = document.getElementById("longitude");

            continent.innerHTML = "Continent: " + data.continent;
            country.innerHTML= "Country: " + data.country;
            regionName.innerHTML = "State/Region: " + data.regionName;
            city.innerHTML = "City: " + data.city;
            latitude.innerHTML = "Latitude: " + JSON.stringify(data.lat);
            longitude.innerHTML = "Longitude: " + JSON.stringify(data.lon);

            
        } else {
            var failed = document.getElementById("failed");
            failed.innerHTML = "Cannot determine Geolocation."
        }

    });

    if (document.getElementById("continent") == "" && document.getElementById("failed") == "") {
        document.getElementById("failed") = "Cannot determine Geolocation."
    }

})();