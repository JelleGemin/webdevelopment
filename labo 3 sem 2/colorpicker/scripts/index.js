const setup = () => {
    changeColor();
}

const updateRed = () => {
    let sliders = document.getElementsByClassName("slider");
    let valueR = sliders[0].value;
    document.getElementById("red").innerHTML = "Red: " + valueR;
    changeColor();
}

const updateGreen = () => {
    let sliders = document.getElementsByClassName("slider");
    let valueG = sliders[1].value;
    document.getElementById("green").innerHTML = "Green: " + valueG;
    changeColor();
}

const updateBlue = () => {
    let sliders = document.getElementsByClassName("slider");
    let valueB = sliders[2].value;
    document.getElementById("blue").innerHTML = "Blue: " + valueB;
    changeColor();
}

const changeColor = () =>{
    let sliders = document.getElementsByClassName("slider");
    let colorDemo = document.getElementsByClassName("colorDemo")

    let valueR = sliders[0].value;
    let valueG = sliders[1].value;
    let valueB = sliders[2].value;

    // we moeten zowel op het input als het change event reageren,
    // zie http://stackoverflow.com/questions/18544890
    sliders[0].addEventListener("change", updateRed);
    sliders[0].addEventListener("input", updateRed);

    sliders[1].addEventListener("change", updateGreen);
    sliders[1].addEventListener("input", updateGreen);

    sliders[2].addEventListener("change", updateBlue);
    sliders[2].addEventListener("input", updateBlue);

    document.getElementById("red").innerHTML = "Red: " + valueR;
    document.getElementById("green").innerHTML = "Green: " + valueG;
    document.getElementById("blue").innerHTML = "Blue: " + valueB;

    colorDemo[0].style.backgroundColor = `rgb(${valueR}, ${valueG}, ${valueB})`;
}

window.addEventListener("load", setup);