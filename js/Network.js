(function() {

    var networkInfo = navigator.connection;
    var downlink = document.getElementById("downlink");
    var effectiveType = document.getElementById("effectiveType");
    var rtt = document.getElementById("rtt");

    $.getJSON("https://ip-api.com/json?fields=status,query,isp,org", function (data) {
        if (data.status) {
            downlink.innerHTML = "Download Speed: " + networkInfo.downlink + "MB/S";
            effectiveType.innerHTML = "Relative Connection Type: " + networkInfo.effectiveType;
            rtt.innerHTML = "Round-Trip Time: " + networkInfo.rtt + "ms";

            var ip = document.getElementById("ip");
            var isp = document.getElementById("isp");
            var org = document.getElementById("org");
            ip.innerHTML = "IP Address: " + data.query;
            isp.innerHTML = "ISP: " + data.isp;
            org.innerHTML = "ISP Organisation" + data.org;

        } else {
            var failure = document.getElementById("failure");
            failure = "Cannot get network details."
        }

    });

    


})();