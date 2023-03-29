let AANTAL_HORIZONTAAL=4;
let AANTAL_VERTICAAL=3;
let AANTAL_KAARTEN=6;
const setup = () => {
    const images = [
        "images/kaart0.png",
        "images/kaart0.png",
        "images/kaart1.png",
        "images/kaart1.png",
        "images/kaart2.png",
        "images/kaart2.png"
    ];
    let playfield = document.createElement("div");
    document.body.appendChild(playfield)
    for(let i = 0; i < AANTAL_VERTICAAL; i++){
        let row = document.createElement('div');
        row.className = "row";
        playfield.appendChild(row);
        for(let i = 0; i < AANTAL_HORIZONTAAL; i++){
            let img = document.createElement("img");
            img.src = "images/keerzijde.png";
            row.appendChild(img);
        }

    }

}
window.addEventListener("load", setup);