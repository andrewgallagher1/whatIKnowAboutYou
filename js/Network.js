(function() {

    var networkInfo = navigator.connection;
    var downlink = document.getElementById("downlink");
    var effectiveType = document.getElementById("effectiveType");
    var rtt = document.getElementById("rtt");

    // https://api.ipregistry.co/?key=z570cdqo1k8fvj&fields=location.continent.name,location.country.name,location.region.name,locat
    $.getJSON("https://api.ipregistry.co/?key=z570cdqo1k8fvj&fields=ip,type,hostname,connection.domain,connection.organization", function (data) {
            downlink.innerHTML = "Download Speed: " + networkInfo.downlink + "MB/S";
            effectiveType.innerHTML = "Relative Connection Type: " + networkInfo.effectiveType;
            rtt.innerHTML = "Round-Trip Time: " + networkInfo.rtt + "ms";

        if (data.ip != "") {
            var ip = document.getElementById("ip");
            var ipType = document.getElementById("ipType");
            var hostname = document.getElementById("hostname");
            var domain = document.getElementById("domain")
            var org = document.getElementById("org");
            ip.innerHTML = "IP Address: " + data.ip;
            ipType.innerHTML = "IP Version:" + data.type;
            hostname.innerHTML = "Hostname: " + data.hostname;
            domain.innerHTML = "ISP Domain: " + data.connection.domain;
            org.innerHTML = "ISP Organisation: "  + data.connection.organization;

        } else {
            var failure = document.getElementById("failure");
            failure = "Cannot get network details."
        }

    });

    


})();