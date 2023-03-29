let image = {
    LOCATION: "images/",
    number: 0,
    SUFFIX: ".png"
}
let aantalHits = 0;

const setup = () => {
let btnStart = document.getElementById("starten");
btnStart.addEventListener("click", speel);

window.addEventListener("resize", updateSize);
updateSize();

};

const speel = () =>{
    let btnStart = document.getElementById("starten");
    btnStart.style.display = "none";
    playGame();
    timerId = setTimeout(playGame, 3000);
    updateSize();
}

const getRandomImage = () =>{
    let randomGetal = Math.round(Math.random() * 4);
    image.number = randomGetal;
    document.getElementById("target").src = image.LOCATION + image.number + image.SUFFIX;
}

const updateSize = () =>{
    let image = document.getElementById("target");
    let playfield = document.getElementById("playField");
    playfield.style.width = window.innerWidth - image.offsetWidth + "px";
    playfield.style.height = window.innerHeight - image.offsetHeight + "px";
}

const moveImage = () =>{
    updateSize();
    let image = document.getElementById("target");
    let widthPlayfield = document.getElementById("playField").clientWidth - image.offsetWidth;
    let heightPlayfield = document.getElementById("playField").clientHeight - image.offsetHeight;

    let left=Math.floor(Math.random()*widthPlayfield);
    let top=Math.floor(Math.random()*heightPlayfield);
    image.style.left=left+"px";
    image.style.top=top+"px";

}

const changeHits = () =>{
    if(image.number != 0){
        aantalHits++;
        clearTimeout(timerId)
        timerId = setTimeout(playGame, 3000)
        getRandomImage();
        moveImage();
    }else{
        window.alert("MIS");
        clearTimeout(timerId);
    }
    let hits = document.getElementById("hits");
    hits.innerText = `Aantal hits: ${aantalHits}`;
}

const playGame = () =>{
    getRandomImage();
    moveImage();
    document.getElementById("target").addEventListener("click", changeHits);
}


window.addEventListener("load", setup);


