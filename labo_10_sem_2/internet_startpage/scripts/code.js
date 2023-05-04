const map = new Map();
let historyArray = [];
let history = localStorage.getItem("history") || localStorage.setItem("history", JSON.stringify(historyArray));

const setup = () => {
    printHistory();
    historyArray = JSON.parse(localStorage.getItem("history"));

    map.set("/g", "https://www.google.com/search?q=");
    map.set("/y", "https://www.youtube.com/results?search_query=");
    map.set("/t", "https://twitter.com/hashtag/")
    map.set("/i", "https://www.instagram.com/explore/tags/")
    let btnGo = document.getElementById("btnGo");
    btnGo.addEventListener("click", search)
}

const createHistory = () =>{
    let h = {
        title: getWebpage(),
        text: getText().slice(3),
        url: map.get(getText().slice(0,2)) + getText().slice(3)
    }
    return h;
}

const search = () =>{
    let inputCommand = document.getElementById("txtInput").value.slice(0,2).toLowerCase();
    let search = getText();

    if(map.has(inputCommand)){
        let inputSearchBar = map.get(inputCommand) + search.slice(3);
        window.open(inputSearchBar, '_blank');
    }else{
        if(inputCommand.slice(0,1) !== "/"){
            alert("Invalid command")
        }else{
            alert("Unkown prefix")
        }
    }
    addCard(createHistory());
    document.getElementById("txtInput").value = "";
}

const addCard = (h) => {
    let historyList = document.getElementById("history");

    let card = document.createElement("div");
    card.className = "card ";
    card.style.width = "30%";
    card.style.marginBottom = "10px";
    card.style.paddingBottom = "10px";
    card.className += h.title.toLowerCase();

    let heading = document.createElement("h5");
    heading.innerText = h.title;
    heading.className = "card-title";
    card.append(heading);

    let body  = document.createElement("div");
    body.innerText = h.text;
    card.append(body);

    let goButton = document.createElement("button");
    goButton.style.background = "black";
    goButton.className += "btn btnGo";
    card.append(goButton);

    let url = document.createElement("a");
    url.innerText = "Go!";
    url.target = '_blank';
    url.style.color = "white";
    url.href = h.url;
    goButton.append(url);

    historyList.append(card);
    historyArray.push(h);
    localStorage.setItem("history", JSON.stringify(historyArray));
    return card;
};

const printHistory = () => {
    let localStorageArray = JSON.parse(history);
    let historyList = document.getElementById("history");
    while(historyList.firstChild) {
        historyList.removeChild(historyList.firstChild);
    }
    for(let i = 0; i < localStorageArray.length; i++) {
        let h = localStorageArray[i];
        let card = addCard(h);
        historyList.append(card);
    }
};

const getWebpage = () =>{
    let input = document.getElementById("txtInput").value.slice(0,2).toLowerCase();
    if(input === "/g"){
        return "Google"
    }else if(input === "/y"){
        return "Youtube"
    }else if(input === "/t"){
        return "Twitter"
    }else if(input === "/i"){
        return "Instagram"
    }
}

const getText = () =>{
    return document.getElementById("txtInput").value;
}

window.addEventListener("load", setup);