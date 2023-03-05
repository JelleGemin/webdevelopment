const setup = () => {
    let btnBereken = document.getElementById("bereken");
    btnBereken.addEventListener("click", bereken);
}

const bereken = () =>{

    let aantallen = document.getElementsByClassName("aantal")
    let aantalP1 = aantallen[0].value;
    let aantalP2 = aantallen[1].value;
    let aantalP3 = aantallen[2].value;

    let prijzen = document.getElementsByClassName("prijs");
    let prijs1 = parseFloat(prijzen[0].textContent.split(" ")[0]);
    let prijs2 = parseFloat(prijzen[1].textContent.split(" ")[0]);
    let prijs3 = parseFloat(prijzen[2].textContent.split(" ")[0]);

    let subtotalen = document.getElementsByClassName("subtotaal");
    let subtotaal1 = aantalP1 * prijs1;
    let subtotaal2 = aantalP2 * prijs2;
    let subtotaal3 = aantalP3 * prijs3;

    subtotalen[0].innerHTML = subtotaal1;
    subtotalen[1].innerHTML = subtotaal2;
    subtotalen[2].innerHTML = subtotaal3.toFixed(2);

    let totaal = document.getElementById("berekendTotaal")
    totaal.innerHTML = (subtotaal1 + subtotaal2 + subtotaal3).toFixed(2);

}
window.addEventListener("load", setup);