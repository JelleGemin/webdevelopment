let savedColors = JSON.parse(localStorage.getItem("array"));
let sliderValues = JSON.parse(localStorage.getItem("sliderValues"))

const createColor = (red, green, blue) =>{
	let color = {
		red: red,
		green: green,
		blue: blue
	}

	return color
}

const initialize = () => {
	if(sliderValues === null){
		let slidersValue = localStorage.setItem("sliderValues", [128,255,128]);
	}else{
		let slidersValue = JSON.parse(localStorage.getItem("sliderValues"));
	}

	updateLabel(slidersValue.red, slidersValue.green,slidersValue.blue)
	updateSlider(slidersValue.red, slidersValue.green,slidersValue.blue)
	
	let sliders = document.getElementsByClassName("slider");
	for (let i = 0; i < sliders.length; i++) {
		// we moeten zowel op het input als het change event reageren,
		// zie http://stackoverflow.com/questions/18544890
		sliders[i].addEventListener("change", update);
		sliders[i].addEventListener("change", changeSliderValues);

		sliders[i].addEventListener("input", update);
	}
	update();

	let btnSave = document.getElementById("save");
	btnSave.addEventListener("click", saveColor);

	printSavedColors();
};

const changeSliderValues = () =>{
	let red= getRed();
	let green= getGreen();
	let blue= getBlue();

	let values = createColor(red, green, blue);

	localStorage.setItem("sliderValues", JSON.stringify(values));
}

const getRed = () =>{
	return document.getElementById("sldRed").value;
}

const getGreen = () =>{
	return document.getElementById("sldGreen").value
}

const getBlue = () =>{
	return document.getElementById("sldBlue").value
}

const updateLabel = (red, green, blue) =>{
	document.getElementById("lblRed").innerHTML= red;
	document.getElementById("lblGreen").innerHTML = green;
	document.getElementById("lblBlue").innerHTML = blue;

}

const updateSlider = (red, green, blue) =>{

	document.getElementById("sldRed").value = red;
	document.getElementById("sldGreen").value = green;
	document.getElementById("sldBlue").value = blue;
}

const styleBackgroundColor = (red, green, blue) =>{
	let swatch=document.getElementById("swatch");
	swatch.style.backgroundColor="rgb("+red+","+green+","+blue+")";
}

const update = () => {
	let red= getRed();
	let green= getGreen();
	let blue= getBlue();

	updateLabel(red, green, blue);
	updateSlider(red, green, blue);
	styleBackgroundColor(red, green, blue);
};

const clear = (event) =>{
	let parent = event.target.parentElement;
	let savedColor = parent.parentElement;

	let colorId = event.target.parentElement.id;
	savedColors.splice(colorId, 1);
	localStorage.setItem("array", JSON.stringify(savedColors));

	savedColor.removeChild(parent)
	event.stopPropagation()
}

const saveColor = () => {
	let currentColor = createColor(getRed(), getGreen(), getBlue());
	savedColors.push(JSON.stringify(currentColor))
	localStorage.setItem("array", JSON.stringify(savedColors));
	printSavedColors();
}

const printSavedColors = () =>{
	let savedColorsList = document.getElementById("savedColors");
	while(savedColorsList.firstChild){
		savedColorsList.removeChild(savedColorsList.firstChild)
	}

	for(let i = 0; i < savedColors.length; i++){
		let save = JSON.parse(savedColors[i]);

		let savedColor = document.createElement("div");
		savedColor.style.backgroundColor="rgb("+save.red+","+save.green+","+save.blue+")";
		savedColor.className = "swatch";
		savedColor.id = i;
		savedColor.addEventListener("click", restoreColor);

		document.getElementById("savedColors").append(savedColor);

		let clearBtn = document.createElement("button");
		clearBtn.innerText = "X";
		clearBtn.addEventListener("click", clear)

		savedColor.append(clearBtn);
	}
}

const restoreColor = (event) => {
	let style = event.target.style.backgroundColor.split(',');
	let red = style[0].slice(4,8);
	let green = style[1].trim();
	let blue = style[2].slice(0, -1).trim();

	styleBackgroundColor(red, green, blue)
	updateLabel(red, green, blue)
	updateSlider(red, green, blue);

}

window.addEventListener("load", initialize);