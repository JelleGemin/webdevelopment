const setup = () => {
	let btnValideer=document.getElementById("btnValideer");
	btnValideer.addEventListener("click", valideer);
};

const valideer = () => {
	valideerVoornaam();
	valideerGeboorteDatum();
	valideerEmail();
};

const valideerVoornaam = () => {
	let txtVoornaam = document.getElementById("txtVoornaam").toString();
	let errVoornaam = document.getElementById("errVoornaam");
	let voornaam = txtVoornaam.trim();
	if (voornaam.length > 30) {
		txtVoornaam.className="invalid"; // invalid class instellen
		errVoornaam.innerHTML = "max. 30 karakters";
	} else {
		txtVoornaam.className=""; // alle classes verwijderen
		errVoornaam.innerHTML = "";
	}
};

const valideerGeboorteDatum = () =>{
	let datum = document.getElementById("geboortedatum").value;
	let errGeboortedatum = document.getElementById("geboortedatum-error");
	let dag = datum.slice(0,2);
	let maand = datum.slice(3,5);
	let jaar = datum.slice(6,10);

	console.log(datum.match(/-/g).length)
	if(!dag.length == 2 || !maand.length == 2 || !jaar.length == 4 || datum.match(/-/g).length == 2){
		errGeboortedatum.innerHTML = "Opgegeven geboortedatum voldoet niet aan het formaat: dd/mm/jjjj";
		datum.className = "invalid"
	}
}

const valideerEmail = () =>{
	let email = document.getElementById("email").value;
	let errEmail = document.getElementById("email-error");

	if(!email.contains("@")){
		errEmail.innerHTML = "Emailadress voldoet niet aan de vereisten"
	}
}

window.addEventListener("load", setup);