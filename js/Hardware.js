
(function(){
    var device = document.getElementById("device");
    var deviceVendor = document.getElementById("deviceVendor");
    var deviceType = document.getElementById("deviceType");
    var cpuArchitecture = document.getElementById("cpuArchitecture");
    var cpu = document.getElementById("cpu");
    var ram = document.getElementById("ram");


    const parser = new UAParser();

    // Device:
    if (parser.getDevice().model != undefined) {
        device.innerHTML =
            "Device Model: " + parser.getDevice().model; 

        deviceVendor.innerHTML =
            "Device Vendor: " + parser.getDevice().vendor;

        deviceType.innerHTML =
            "Device Type: " + parser.getDevice().type;
    }
    // CPU:
    var cpuArchCheck = parser.getCPU().architecture || "";
    if (cpuArchCheck == "") {
        cpuArchitecture.innerHTML = "";
    } else {
        cpuArchitecture.innerHTML =
            "CPU Architecture: " + parser.getCPU().architecture;
    }
   
    var cpuCheck = window.navigator.hardwareConcurrency || "";
    if (cpuCheck == "") {
        cpu.innerHTML = "";
    } else {
    cpu.innerHTML = 
        "CPU No. of Cores: " + JSON.stringify(window.navigator.hardwareConcurrency) + " cores";
    }

    // RAM:
    if (window.navigator.deviceMemory != undefined) {
        ram.innerHTML = 
            "RAM: " + JSON.stringify(window.navigator.deviceMemory) + "GB";
    } else {
        ram.innerHTML = "";
    }

    // Battery:
    navigator.getBattery().then(function(battery) {
        var charge_state = (battery.charging ? "On charge" : "On battery");
        document.querySelector("#charge_state").innerHTML = "Charging?: " + charge_state;

        var level = ((battery.level) * 100) + "%";
        document.querySelector("#level").textContent = "Battery Percentage: " + level;
        console.log(battery);

        if (battery.charging) {
            if (level == "100%") str = "Till Full: Battery at full charge.";
            else  {
                var time = (battery.chargingTime/360);
                var str = "Till Full: " + time + "h";
            }
            document.querySelector("#time").innerHTML = str;
            
        } else {
            var str = "";
            document.querySelector("#time").innerHTML = str;
        }
        
    });

})();