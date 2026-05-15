/* Has file names - cat + extensions */
const images = ["spin.gif","maxwell.gif","maxspin.gif","square.png","shocker.gif","uhhuh.jpg","stare.jpeg","plinK.gif","serious.gif","erm.png","dog.gif","blehfog.jpg","sideeye.gif","fish.gif","fat.gif","cheez.gif","egg.gif","look.webp","prof.gif","wave.gif","yes.gif","thevoices.gif","cam.gif","huh.gif","uhm.gif","dance.gif"];

const holdingDiv = document.getElementById("car");

for(let i = 0; i < images.length; i++) {
    let imgDiv = document.createElement("div");
    let imgTag = document.createElement("img");
    let image = "images/cat" + images[i];

    imgTag.src = image;
    imgDiv.append(imgTag);
    holdingDiv.append(imgDiv);
};