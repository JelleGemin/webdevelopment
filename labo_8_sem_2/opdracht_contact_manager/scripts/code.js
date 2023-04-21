let personen = [];
let index = -1;

const maakPersoon = (voornaam, familienaam, geboortedatum, email, aantalKinderen) =>{
    let persoon = {
        voornaam: voornaam,
        familienaam: familienaam,
        geboortedatum: geboortedatum,
        email : email,
        aantalKinderen : aantalKinderen
    }
    return persoon;
}
// Event listener (btnBewaar click)
// Bewaar de wijzigingen die in de user interface werden aangebracht
const bewaarBewerktePersoon = () => {
    const voornaam = document.getElementById("txtVoornaam").value;
    const familienaam = document.getElementById("txtFamilienaam").value;
    const geboortedatum = document.getElementById("txtGeboorteDatum").value;
    const email = document.getElementById("txtEmail").value;
    const aantalKids = document.getElementById("txtAantalKinderen").value;
    let newPersoon = maakPersoon(voornaam, familienaam, geboortedatum, email, aantalKids);

    // valideer alle input data en controleer of er geen errors meer zijn
    if(valideer() && index === -1){
        let lijst = document.getElementById("lstPersonen");

        let option = document.createElement("option");
        option.value = JSON.stringify(newPersoon);
        option.id = personen.length.toString();
        option.text = newPersoon.voornaam + " " + newPersoon.familienaam;

        personen.push(newPersoon);
        lijst.append(option)
    }else if(valideer() && index !== -1){
        persoonBewerken();
    }

    // indien ok, bewaar de ingegeven data.
        // een nieuw aangemaakte persoon voegen we toe
        // een bestaande persoon in de lijst passen we aan

    // zorg ervoor dat de naam en voornaam ook aangepast en/of zichtbaar zijn in de lijst na updaten
};

// Event listener (btnNieuw click)
const bewerkNieuwePersoon = () => {
    index = -1;

    document.getElementById("txtVoornaam").value = "";
    document.getElementById("txtFamilienaam").value = "";
    document.getElementById("txtGeboorteDatum").value = "";
    document.getElementById("txtEmail").value = "";
    document.getElementById("txtAantalKinderen").value = "";
    // Zet de user interface klaar om de gegevens van een nieuwe persoon in te voeren
};

const persoonLaden = () =>{
    index = 1;
    let selectElement = document.getElementById("lstPersonen");
    const selectedIndex = selectElement.selectedIndex
    const selectedOption = selectElement.options[selectedIndex];
    let selectedPersoon = JSON.parse(selectedOption.value);

    document.getElementById("txtVoornaam").value = selectedPersoon.voornaam;
    document.getElementById("txtFamilienaam").value = selectedPersoon.familienaam;
    document.getElementById("txtGeboorteDatum").value = selectedPersoon.geboortedatum;
    document.getElementById("txtEmail").value = selectedPersoon.email;
    document.getElementById("txtAantalKinderen").value = selectedPersoon.aantalKinderen;
}

const persoonBewerken = () =>{
    index = 1;
    let selectElement = document.getElementById("lstPersonen");
    const selectedIndex = selectElement.selectedIndex
    const selectedOption = selectElement.options[selectedIndex]

    const voornaam = document.getElementById("txtVoornaam").value;
    const familienaam = document.getElementById("txtFamilienaam").value;
    const geboortedatum = document.getElementById("txtGeboorteDatum").value;
    const email = document.getElementById("txtEmail").value;
    const aantalKids = document.getElementById("txtAantalKinderen").value;
    let newPersoon = maakPersoon(voornaam, familienaam, geboortedatum, email, aantalKids);

    personen[selectedOption.id] = newPersoon;
    selectedOption.text = newPersoon.voornaam + " " + newPersoon.familienaam;
}


// onze setup functie die de event listeners registreert
const setup = () => {
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);

    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);

    let lstPersonen = document.getElementById("lstPersonen");
    lstPersonen.addEventListener("change", persoonLaden);
    // voeg een change listener toe aan lstPersonen. Bij het klikken op een option element in de lijst
    // moet de data van die persoon getoond worden in het formulier
};

window.addEventListener("load", setup);