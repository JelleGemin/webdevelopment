const setup = () => {
    getTrigram();
}

const getTrigram = () =>{
    let input = document.getElementById("woord").innerText
    let max = input.length;

    for(let begin = 0; begin < max; begin++){
        let einde = begin + 3;
        if(max - begin >= 3){
            console.log(input.slice(begin, einde))
        }
    }
}
window.addEventListener("load", setup);