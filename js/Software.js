
(function () {

    const parser = new UAParser(); 
   
    var os = document.getElementById("os");
    os.innerHTML += "Operating System: " + parser.getOS().name

    var osVersion = document.getElementById("osVersion");
    osVersion.innerHTML += "Operating System Version: " + parser.getOS().version;

    var browser = document.getElementById("browser");
    browser.innerHTML += "Browser: " + parser.getBrowser().name;

    var browserVersion = document.getElementById("browserVersion");
    browserVersion.innerHTML += "Browser Version: " + parser.getBrowser().version;

    var browserBuild = document.getElementById("browserBuild");
    browserBuild.innerHTML += "Browser Build: " + navigator.productSub;

    var browserEngine = document.getElementById("browserEngine");
    browserEngine.innerHTML += "Browser Engine: " + parser.getEngine().name;

    var browserVendor = document.getElementById("browserVendor");
    browserVendor.innerHTML += "Browser Vendor: " + navigator.vendor;

    
    
    /*<div><strong>Software:</strong>
        <div id = "os"></div>
        <div id = "osVersion"></div>
        <div id = "browser"></div>
        <div id = "browserVersion"></div>
        <div id = "browserBuild"></div>
        <div id = "browserEngine"></div>
        <div id = "browserVendor"></div>
    </div>*/

}) ();