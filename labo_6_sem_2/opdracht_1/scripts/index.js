const setup = () => {
    let nodeP = document.getElementById("abc")
    console.log(nodeP.nodeName);
    console.log(nodeP.nodeValue);
}
window.addEventListener("load", setup);