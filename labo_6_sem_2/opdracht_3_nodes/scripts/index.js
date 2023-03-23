const setup = () => {
    let btnCreate = document.getElementById("btnCreate");
    btnCreate.addEventListener("click", create)
}

const create = () =>{
    let text = "This is text to put in a paragraph element."
    let paragraph = document.createElement("p");
    paragraph.innerText = text;
    document.querySelector("#myDiv").append(paragraph);
}
window.addEventListener("load", setup);