let AANTAL_HORIZONTAAL=4;
let AANTAL_VERTICAAL=3;
let AANTAL_KAARTEN=6;

let kaart1 = null;
let kaart2 = null;
let aantalKliks = 0;

let isBezig = false;

const shuffle = (array)=>{
    array.sort((a,b) => 0.5 - Math.random())
    return array;
}
const setup = () => {
    const kaarten = [];
    for(let i = 1;i<= AANTAL_KAARTEN; i++ ){
        kaarten.push("kaart"+i+".png");
        kaarten.push("kaart"+i+".png");
    }

    shuffle(kaarten);
    let index = 0;
    let speelveld = document.createElement("div");
    speelveld.classList.add("speelveld")
    document.body.appendChild(speelveld);
    for(let i = 0; i < AANTAL_VERTICAAL; i++){
        let row = document.createElement('div');
        row.className = "row";
        speelveld.appendChild(row);
        for(let i = 0; i < AANTAL_HORIZONTAAL; i++){
            let div = document.createElement("div")
            div.classList.add("kaart");
            row.appendChild(div)

            let img = document.createElement("img");
            img.src = "images/keerzijde.png";
            img.className = "achterkant";
            div.appendChild(img);

            let kaart = document.createElement('img');
            kaart.src = "images/"+kaarten[index];
            kaart.style.display = "none";
            kaart.className = "voorkant";

            img.addEventListener("click", draaiOm);
            index++;
            div.appendChild(kaart);
        }

    }
}

const draaiOm = (event) => {
    if (aantalKliks < 2) {
        const kaart = event.target.parentNode;

        kaart.querySelector('.achterkant').style.display = 'none';
        kaart.querySelector('.voorkant').style.display = 'block';

        aantalKliks++;
        if (aantalKliks === 1) {
            kaart1 = kaart;
        } else if(aantalKliks === 2){
            kaart2 = kaart;

            disableClicking();

            if(checkIfPoint(kaart1, kaart2)){
                setTimeout(verwijderKaarten, 500)
            } else {
                setTimeout(() => {
                    disableClicking();
                    kaart1.querySelector('.achterkant').style.display = 'block';
                    kaart1.querySelector('.voorkant').style.display = 'none';
                    kaart2.querySelector('.achterkant').style.display = 'block';
                    kaart2.querySelector('.voorkant').style.display = 'none';
                }, 1000);
            }
            aantalKliks = 0;
        }
    }
};

const verwijderKaarten = () =>{
    disableClicking();
    kaart1.style.visibility = "hidden"
    kaart2.style.visibility = "hidden"
}
const checkIfPoint = (kaart1,  kaart2) =>{
        if(kaart1.querySelector(".voorkant").src === kaart2.querySelector(".voorkant").src){
            return true;
        }else{
            return false;
        }
}

const disableClicking = () =>{
    let speelveld = document.querySelector(".speelveld");
    if(speelveld.classList.contains("disableClick")){
        speelveld.classList.remove("disableClick")
    }else{
        speelveld.classList.add("disableClick");
    }
}

window.addEventListener("load", setup);