const setup = () => {
    let btnVerander  = document.getElementById("btnVerander");
    btnVerander.addEventListener("click", verander);
    let style = document.createElement('style');
    style.innerHTML = '.listitem { color: red; }';
    document.getElementsByTagName('head')[0].appendChild(style);

    let image = document.createElement("img");
    image.src = "images/foto.jpg";
    document.getElementsByTagName("body")[0].append(image);
}

const verander = () =>{
    let lijst = document.querySelectorAll("li");
    for(let i = 0; i < lijst.length; i++){
        lijst[i].className = "listitem";
    }
}
window.addEventListener("load", setup);