const initialize = () => {
	let sliders = document.getElementsByClassName("slider");
	for (let i = 0; i < sliders.length; i++) {
		// we moeten zowel op het input als het change event reageren,
		// zie http://stackoverflow.com/questions/18544890
		sliders[i].addEventListener("change", update);
		sliders[i].addEventListener("input", update);
	}
	update();

	let btnSave = document.getElementById("save");
	btnSave.addEventListener("click", saveColor)
};

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
	savedColor.removeChild(parent)
	event.stopPropagation()
}

const saveColor = () => {
	let save = document.createElement("div");
	save.style.backgroundColor="rgb("+getRed()+","+getGreen()+","+getBlue()+")";
	save.className = "swatch";

	save.addEventListener("click", restoreColor);

	document.getElementById("savedColors").append(save);

	let clearBtn = document.createElement("button");
	clearBtn.innerText = "X";
	clearBtn.addEventListener("click", clear)

	save.append(clearBtn);
}

const restoreColor = (event) =>{
	let style = event.target.style.backgroundColor.split(',');
	let red = style[0].slice(4,8);
	let green = style[1].trim();
	let blue = style[2].slice(0, -1).trim();

	styleBackgroundColor(red, green, blue)
	updateLabel(red, green, blue)
	updateSlider(red, green, blue);

}

window.addEventListener("load", initialize);