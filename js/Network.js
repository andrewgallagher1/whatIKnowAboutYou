(function() {

    var networkInfo = navigator.connection + "Download Speed: Unavailable";
    var downlink = document.getElementById("downlink") + "Relative Connection Type: Unavailable";
    var effectiveType = document.getElementById("effectiveType") + "Round-Trip Time: Unavailable";
    var rtt = document.getElementById("rtt");

    // pruning:
    var ip = document.getElementById("ip");
    var ipType = document.getElementById("ipType");
    var hostname = document.getElementById("hostname");
    var domain = document.getElementById("domain")
    var org = document.getElementById("org")


    // https://api.ipregistry.co/?key=z570cdqo1k8fvj&fields=location.continent.name,location.country.name,location.region.name,locat
    $.getJSON("https://api.ipregistry.co/?key=z570cdqo1k8fvj&fields=ip,type,hostname,connection.domain,connection.organization", function (data) {
        if (networkInfo != undefined) {
            if (networkInfo.downlink != undefined)
                downlink.innerHTML = "Download Speed: " + networkInfo.downlink + "MB/S";
            if (networkInfo.effectiveType != undefined)
                effectiveType.innerHTML = "Relative Connection Type: " + networkInfo.effectiveType;
            if (networkInfo.rtt)
                rtt.innerHTML = "Round-Trip Time: " + networkInfo.rtt + "ms";
        }

        if (data.ip != undefined) {
            ip.innerHTML = "IP Address: " + data.ip;
        if (data.ipType != undefined)
            ipType.innerHTML = "IP Version: " + data.type;
        if (data.hostname != undefined)
            hostname.innerHTML = "Hostname: " + data.hostname;
        if (data.connection.domain != undefined)
            domain.innerHTML = "ISP Domain: " + data.connection.domain;
        if (data.connection.organization != undefined)
            org.innerHTML = "ISP Organisation: " + data.connection.organization;

        } else {
            var failure = document.getElementById("failure");
            failure = "Cannot get network details."
        }

    });

    


})();