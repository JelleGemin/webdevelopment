const setup = () => {
    let btnVerander = document.getElementById("verander")
    btnVerander.addEventListener("click", verander)
}

const verander = () =>{
    let nodeP = document.querySelectorAll("p");
    nodeP[0].innerHTML = "Good job!";
}
window.addEventListener("load", setup);