const setup = () => {
    let btnVerwerken = document.getElementById("verwerk");
    btnVerwerken.addEventListener("click", verwerken);
}

const verwerken = () =>{
    const rookt = document.getElementById("rookt");
    const geselecteerdeTaal = document.querySelector('input[name="moedertaal"]:checked').value;
    const buurlanden = document.getElementById("favoBuurland");
    const bestelling = document.getElementById("bestelling");

    if(rookt.checked){
        console.log("is een roker");
    }else{
        console.log("is geen roker")
    }

    console.log("Moedertaal is " + geselecteerdeTaal)

    for(let i = 0; i < buurlanden.length; i++){
        if(buurlanden[i].selected){
            console.log("Favoriete buurland is " + buurlanden[i].text);
        }
    }

    let output = "De bestelling bestaat uit ";
    for(let i = 0; i < bestelling.length; i++){
        if(bestelling[i].selected){
            output += bestelling[i].text + " ";
        }
    }
    console.log(output);
}
window.addEventListener("load", setup);