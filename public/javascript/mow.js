let hidden = true;
let button = document.getElementById("catUndiscovered");
let btnclr = button.style.color;
if(btnclr == "#ffffff"){
    let hidden = !hidden;
};

if(hidden == false){
    button.innerText = "cat.";
};