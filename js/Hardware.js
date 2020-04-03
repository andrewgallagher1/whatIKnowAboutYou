
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
    cpuArchitecture.innerHTML =
        "CPU Architecture: " + parser.getCPU().architecture;

    cpu.innerHTML = 
        "CPU No. of Cores: " + JSON.stringify(window.navigator.hardwareConcurrency) + " cores";
    
    // RAM: 
    ram.innerHTML = 
        "RAM:" + JSON.stringify(window.navigator.deviceMemory) + "GB";


    // Battery:
    navigator.getBattery().then(function(battery) {
        var charge_state = (battery.charging ? "On charge" : "On battery");
        document.querySelector("#charge_state").innerHTML += charge_state;

        var level = ((battery.level) * 100) + "%";
        document.querySelector("#level").textContent += level;

        if (battery.charging) {
            var time = (battery.chargingTime/360);
            var str = "Till Full: " + time + "h";
            document.querySelector("#time").innerHTML += str;
        } else {
            var str = "-- Battery Not Charging";
            document.querySelector("#time").innerHTML += str;
        }
        
    });

})();