let timer = setInterval(yell, 30);
let ah = "A";
let red = 0;
function yell() {
    yelp = ah + "bout Me";
    color = "rgb(" + red + ", 0, 0)";
    document.getElementById("AHH").innerText = yelp;
    document.getElementById("AHH").style.color = color;
    ah += "A";
    red += 17;
    console.log("e")
    if (red == 374) {
        clearInterval(timer);
        document.getElementById("AHH").innerText = "About Me";
        document.getElementById("AHH").style.color = "rgb(0,0,0)";
    }
};