function lightDarkSwitch() {
    var elem = document.getElementById("lm-dm-switch");
    var elem2 = document.querySelector("nav");
    var elem3 = document.querySelector("#main-content");
    var img = document.getElementById("signature");
    var body = document.body;
    var sun = "☀️";
    var moon = "🌙";
    if(elem.innerHTML === "☀️") {
        elem.innerHTML = moon;
        body.style.cssText = "background-color: #112; color: #CCC;";
        elem2.style.cssText = "border-bottom: 1px solid #CCC; background-color: #112;";
        elem2.setAttribute('data-bs-theme', 'dark');
        elem3.style.cssText = "position: relative; background-color: #224; margin-top: 20vh; border-top: solid 3px #CCC;";
        img.src = "/imgs/signature-dm.png/";
    }else{
        elem.innerHTML = sun;
        body.style.cssText = "background-color: #FFE; color: #444;";
        elem2.style.cssText = "border-bottom: 1px solid #000; background-color: #EFF;";
        elem2.setAttribute('data-bs-theme', 'light');
        elem3.style.cssText = "position: relative; background-color: #FF9; margin-top: 20vh; border-top: solid 3px #000;";
        img.src = "/imgs/signature.png/";
    }
};

