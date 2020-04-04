
(function () {

    const parser = new UAParser(); 
    var emptyCheck = "";  
    var os = document.getElementById("os");
    var osVersion = document.getElementById("osVersion");
    var browser = document.getElementById("browser");
    var browserVersion = document.getElementById("browserVersion");
    var browserBuild = document.getElementById("browserBuild");
    var browserEngine = document.getElementById("browserEngine");
    var browserVendor = document.getElementById("browserVendor");
    
    var checkOS = parser.getOS().name || false;
    if (checkOS != false) {
        os.innerHTML += "Operating System: " + parser.getOS().name
    }

    var checkOSVer = parser.getOS().version || false;
    if (checkOS != false) {
        osVersion.innerHTML += "Operating System Version: " + parser.getOS().version;
    }

    var checkBrows = parser.getBrowser().name || false;
    if (checkBrows != false) {
        browser.innerHTML += "Browser: " + parser.getBrowser().name;
    }

    var checkBrowsVer = parser.getBrowser().version || false;
    if (checkBrowsVer != false) {
        browserVersion.innerHTML += "Browser Version: " + parser.getBrowser().version;
    }


    var checkBuild = navigator.productSub || false;
    if (checkBuild != false) {
        browserBuild.innerHTML += "Browser Build: " + navigator.productSub;
    }

    var checkEngine = parser.getEngine().name || false;
    if (checkEngine != false) {
        browserEngine.innerHTML += "Browser Engine: " + parser.getEngine().name;
    }

    var checkVendor = navigator.vendor || false;
    if (checkVendor != false) {
        browserVendor.innerHTML += "Browser Vendor: " + navigator.vendor;
    }
    
    emptyCheck += os.innerHTML;
    emptyCheck += osVersion.innerHTML; 
    emptyCheck += browser.innerHTML;
    emptyCheck += browserVersion.innerHTML;
    emptyCheck += browserBuild.innerHTML;
    emptyCheck += browserEngine.innerHTML;
    emptyCheck += browserVendor.innerHTML;

    if (emptyCheck == "") {
        os.innerHTML = "No Software Information Available."
    }

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