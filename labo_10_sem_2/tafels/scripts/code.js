let numbers = [];
let historyNumbers = localStorage.getItem("array") || localStorage.setItem("array", JSON.stringify(numbers));

const maakTafel = (nummer) =>{
    let tafel = {
        nummer: nummer,
        tijd: new Date().toTimeString().slice(0, 8)
    }
    return tafel;
}

const setup = () => {
    numbers = JSON.parse(localStorage.getItem("array"));
    console.log(numbers);

    printTafels();

    let label = document.getElementById("label");
    label.addEventListener("click", () =>{
        document.getElementById("txtInput").focus();
    })

    let btnGo = document.getElementById("btnSubmit");
    btnGo.addEventListener("click", calculate);
}

const calculate = () =>{
    let inputNumber = document.getElementById("txtInput").value;
    if(!isNaN(inputNumber)){
        let number = maakTafel(inputNumber);
        numbers.push(number);
        localStorage.setItem("array", JSON.stringify(numbers));
    }else{
        alert("Geef een getal in")
    }

    document.getElementById("txtInput").value = "";

    printTafels();
}

const printTafels = () =>{
    let rijTafels = document.getElementById("rijTafels");
    verwijderAlleChildren(rijTafels);

    for(let i = 0; i < numbers.length; i++){
        let container = document.createElement("div");
        container.className = "container";
        rijTafels.append(container);

        let header = document.createElement("header");

        header.innerText = "Tafel van " + numbers[i].nummer + " aangemaakt op: " + numbers[i].tijd;
        container.append(header)

        for(let j = 1; j < 11; j++){
            let rij = document.createElement("div");

            rij.innerText = j + " * " + numbers[i].nummer + " = " + j*numbers[i].nummer;

            container.append(rij);
        }
    }
}

const verwijderAlleChildren = (element) => {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

window.addEventListener("load", setup);