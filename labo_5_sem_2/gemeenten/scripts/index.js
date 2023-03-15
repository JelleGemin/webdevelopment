const setup = () => {
    const gemeenten = [];
    while(gemeenten[gemeenten.length-1] != "stop"){
        const input = window.prompt("Gemeente:")
        gemeenten.push(input)
    }

    gemeenten.sort();
    const selection = document.getElementById("selection");
    for(let i = 0; i < gemeenten.length-1; i++){
        selection.innerHTML += "<option value=" + gemeenten[i] + ">" + gemeenten[i] + "</option>";
    }
}
window.addEventListener("load", setup);