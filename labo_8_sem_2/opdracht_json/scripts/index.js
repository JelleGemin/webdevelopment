let student1 = {
    naam: "Jelle Gemin",
    nr: "13",
    email: "jelle.gemin@student.vives.be",
    telefoonnummer: "0489943116"
}
const setup = () => {
    let printJsonString = document.getElementById("jsonString");
    printJsonString.addEventListener("click", print);


    let btnMaakObject = document.getElementById("maakObject");
    btnMaakObject.addEventListener("click", maakObject)

}

const print = () => {
    let output = JSON.stringify(student1);
    console.log(output);
}

const maakObject = () => {
    let input = document.getElementById("json_string").value;
    let object = JSON.parse(input);
    console.log(object.naam);
}

window.addEventListener("load", setup);