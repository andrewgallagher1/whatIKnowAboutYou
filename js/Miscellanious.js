(function(){

    var clipboard  = document.getElementById("clipboard");

    // Cookies:
    var cookies = document.getElementById("cookies");
    cookies.innerHTML += "Cookies enabled: " + navigator.cookieEnabled;

    // Java:
    var java = document.getElementById("java");
    java.innerHTML += "Java enabled: " + window.navigator.javaEnabled();

    // Do_not_track:
    var track = document.getElementById("track");
    if (window.navigator.doNotTrack) 
        track.innerHTML += "Do-Not-Track enabled: true";
    else 
        track.innerHTML += "Do-Not-Track enabled: false";

    // Clipboard:
    var clipboard = document.getElementById("clipboard");
    (function(){
        console.log(navigator.clipboard);
        if (navigator.clipboard && navigator.clipboard.readText()) navigator.clipboard.readText()
            .then(contents => {
                if (contents != "") {
                    console.log("Clipboard Content:", contents)
                    clipboard.innerHTML += "Clipboard Content: " + contents
                } else {
                    clipboard.innerHTML += "Clipboard Content: Empty"
                }
            })
            .catch(error => {
                console.log("Clipboard Unavailable", error);
                clipboard.innerHTML += "Clipboard Content: Unavailable"
            });
        
    }());

    // Media Session(s): Should read the documentation better woops
    // for providing not reading current media -> navigator.mediaSession.
    /*var media = document.getElementById("media");
    (function(){
        if ("mediaSession" in navigator) {
            var curr = navigator.mediaSession.metadata;
            var str = "";
            console.log(navigator.mediaSession.metadata);
            if (!) {
                str += "Title: " + curr.title + "<br>";
                str += "Artist: " + curr.artist + "<br>";
                str += "Playback: " + navigator.mediaSession.playbackState;
            } else {
                str += "No Media Sessions currently playing.";
            }
            media.innerHTML += str; 
        } else {
            media.innerHTML += " Media Sessions unvailable.";
        }
    }());*/



}());