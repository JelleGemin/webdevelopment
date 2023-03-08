const setup = () => {
    let inputVeld = document.getElementById("input");
    let submitBtn = document.getElementById("submitBtn");
    submitBtn.addEventListener("click", () => { maakMetSpaties(inputVeld) });
}
const maakMetSpaties = (inputText) =>{
    let input = inputText.value;
    let output = "";
    for (let i = 0; i < input.length; i++) {
        output += input.charAt(i) + " ";
    }
    if(output.indexOf("   ") != -1){
        const output2 = output.replace(/  +/g, ' ');
        console.log(output2);
    }else{
        console.log(output)
    }

}
window.addEventListener("load", setup);