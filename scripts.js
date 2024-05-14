function lightDarkSwitch() {
    var elem = document.getElementById("lm-dm-switch");
    var sun = "☀️";
    var moon = "🌙";
    if(elem == sun) {
        elem.innerText = moon;
    }else{
        elem.innerText = sun;
    }
}