function lightDarkSwitch() {
    var elem = document.getElementById("lm-dm-switch");
    var elem2 = document.querySelector("nav")
    var elem3 = document.querySelector("#main-content")
    var elem4 = document.getElementsByClassName("separator")
    var img = document.getElementById("signature")
    var body = document.body;
    var sun = "☀️";
    var moon = "🌙";
    if(elem.innerHTML === "☀️") {
        elem.innerHTML = moon;
        body.style.cssText = "background-color: #112; color: #CCC;"
        elem2.style.cssText = "border-bottom: 1px solid #CCC; background-color: #112;"
        elem2.setAttribute('data-bs-theme', 'dark');
        elem3.style.cssText = "position: relative; background-color: #224; margin-top: 20vh; border-top: solid 3px #CCC;"
        elem4.style.cssText = "border: 1px solid #FFF; color: #FFF; opacity: .5;"
        img.src = "/imgs/signature-dm.png/"
    }else{
        elem.innerHTML = sun;
        body.style.cssText = "background-color: #EFF; color: #444;"
        elem2.style.cssText = "border-bottom: 1px solid #000; background-color: #EFF;"
        elem2.setAttribute('data-bs-theme', 'light');
        elem3.style.cssText = "position: relative; background-color: #FF7; margin-top: 20vh; border-top: solid 3px #000;"
        elem4.style.cssText = "border: 1px solid #000; color: #000; opacity: .5;"
        img.src = "/imgs/signature.png/"
    }
};

