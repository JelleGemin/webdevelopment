const setup = () => {
    let btnSubstring = document.getElementById("btnSubstring");
    btnSubstring.addEventListener("click", getSubstring);
}

const getSubstring = () =>{
    let input = document.getElementById("input").value;
    let start = document.getElementById("start");
    let end = document.getElementById("end");
    let output = document.getElementById("output");


    output.innerHTML = input.substring(start, end);
}
window.addEventListener("load", setup);