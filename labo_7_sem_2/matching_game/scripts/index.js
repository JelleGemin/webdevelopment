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
    let playfield = document.createElement("div");
    document.body.appendChild(playfield);
    for(let i = 0; i < AANTAL_VERTICAAL; i++){
        let row = document.createElement('div');
        row.className = "row";
        playfield.appendChild(row);
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
        //kaart stelt de div voor met de voorkant en de achterkant als childnodes
        const kaart = event.target.parentNode;
        //zorgen dat de kaart draait, de voorkant wordt zichtbaar en de achterkant ontzichtbaar
        kaart.querySelector('.achterkant').style.display = 'none';
        kaart.querySelector('.voorkant').style.display = 'block';

        aantalKliks++;
        if (aantalKliks === 1) {
            kaart1 = kaart;
        } else {
            kaart2 = kaart;

            if(checkIfPoint(kaart1, kaart2)){
                kaart1.style.visibility = "hidden"
                kaart2.style.visibility = "hidden"
            } else {
                setTimeout(() => {
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
const checkIfPoint = (kaart1,  kaart2) =>{
        if(kaart1.querySelector(".voorkant").src === kaart2.querySelector(".voorkant").src){
            return true;
        }else{
            return false;
        }
}

window.addEventListener("load", setup);