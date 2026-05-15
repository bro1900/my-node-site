




// reference AI
/*
let ee = 10;//prompt("How many cells do you want to fill? (1-20)", "10");
function toggleMenu() {
    document.querySelector('.nav-links').classList.toggle('active');
}

const grid = document.getElementById("grid");
const letters = "ABCDEFGHI";

for (let r = 0; r < 9; r++) {
for (let c = 1; c <= 9; c++) {
    const div = document.createElement("div");
    div.className = "cell";

    const label = letters[r] + c; // e.g., B2
    div.id = label;
    grid.appendChild(div);
}
}
for (let i = 0; i < ee; i++) {
    let randomLetter = letters[Math.floor(Math.random() * letters.length)];
    let randomNumber = Math.floor(Math.random() * 9) + 1;
    let randomCellId = randomLetter + randomNumber;
    let randomCell = document.getElementById(randomCellId);
    randomCell.classList += " ded";
}
*/


// reference me
/*
<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" type="text/css" href="style.css">
    </head>
    <body>
        <table>
            <tbody id="ee">
            </tbody>
        </table>
        <p id="holder">0</p>
        <script>
            const dye = ['zero', 'ono', 'two', 'threo', 'fouo', 'fivo', 'sio', 'seveo', 'eigho', 'nino'];
            // const die = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','aa','ab','ac','ad','ae','af','ag','ah','ai','aj','ak','al','am','an','ao','ap','aq','ar','as','at','au','av','aw','ax','ay','az','ba','bb','bc','bd','be','bf','bg','bh','bi','bj','bk','bl','bm','bn','bo','bp','bq','br','bs','bt','bu','bv','bw','bx','by','bz','ca','cb','cc','cd','ce','cf','cg','ch','ci','cj','ck','cl','cm','cn','co','cp','cq','cr','cs','ct','cu','cv','cw','cx','cy','cz'];
            const abcs = Array.from({ length: 26 }, (_, i) =>
              String.fromCharCode(97 + i)
            );
            const die = abcs[abcs.length-1]
            console.log(die[3]) // oh shi this is a pain
            
            var num;
		    var num = 1;
            for(let i = 1; i < 10; i++){
			    let diw = document.createElement("tr");
			    diw.id = dye[i];
		        document.getElementById("ee").appendChild(diw);
                for(let a = 1; a < 10; a++){
    		        let dwi = document.createElement("td");
    		        dwi.id = die[num-1];
    		        dwi.innerText = die[num-1];
    		        document.getElementById(dye[i]).appendChild(dwi);
    		        num += 1;
    		      //  if(a == 9){
    		      //      let pe = document.getElementById("holder");
    		      //      let pl = pe.innerText;
    		      //      pe.textContent = num + pl;
    		      //  };
                }
                // let nume = document.getElementById("holder")
                
                // num += nume.textContent;
                // console.log(num);
                // nume.remove();
            };
            let maht = math.floor(num / 9);
            for(let i = 0; i < maht; i++){
                let math = math.floor(math.random()*num.length);
                let deh = die[math-1];
                
                
                // make this replace the id of the item
                
                
            }
            document.addEventListener("mousedown", (event) => {
              const el = event.target;
              if (el.id) {
                console.log(el.id);
              }
            });            // function
        </script>
    </body>
</html>
*/