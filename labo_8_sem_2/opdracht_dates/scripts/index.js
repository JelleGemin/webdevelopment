const setup = () => {
    let d = new Date();
    document.getElementById("huidige_datum").innerText += " " + d.toDateString();

    let verjaardag = new Date("2023-03-27");
    document.getElementById("verjaardag").innerText += " " + verjaardag.toDateString();

    let verschil = (d - verjaardag)/(1000*60*60*24);
    console.log(Math.round(verschil));
}
window.addEventListener("load", setup);