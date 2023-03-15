const setup = () => {
    let input = document.getElementById("woord").innerText
    let woorden = input.split(" ");
    let output = "";
    for(let i = 0; i < woorden.length; i++){
        if(woorden[i] === "de"){
            woorden[i] = "het";
        }
        output += woorden[i] + " ";
    }
    console.log(output)
}
window.addEventListener("load", setup);