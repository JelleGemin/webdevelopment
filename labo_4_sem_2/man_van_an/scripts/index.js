const setup = () => {
    getAantalKeerAn();
}

const getAantalKeerAn = () => {
    let inputTekst = document.getElementById("tekst").textContent;
    let input = inputTekst.toLowerCase();
    let aantal = 0;
    if (input.lastIndexOf("an") != -1) {
        for (let i = 0; i < input.length; i++) {
            if (input.charAt(i) === 'a' && input.charAt(i+1) === 'n') {
                aantal++;
            }
        }
    }
    console.log(aantal);
}
window.addEventListener("load", setup);