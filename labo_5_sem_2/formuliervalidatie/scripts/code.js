let aantalSucces = 0;
const setup = () => {
	let btnValideer=document.getElementById("btnValideer");
	btnValideer.addEventListener("click", valideer);
};

const valideer = () => {
	aantalSucces = 0;
	valideerVoornaam();
	valideerFamilienaam();
	valideerGeboorteDatum();
	valideerEmail();
	valideerAantalKinderen();

	if(aantalSucces === 5){
		window.confirm("Success")
	}
};

const valideerVoornaam = () => {
	let txtVoornaam = document.getElementById("txtVoornaam").value;
	let errVoornaam = document.getElementById("errVoornaam");
	let voornaam = txtVoornaam.trim();

		if (voornaam.length > 30) {
			txtVoornaam.className="invalid"; // invalid class instellen
			errVoornaam.innerHTML = "max. 30 karakters";
		} else {
			txtVoornaam.className=""; // alle classes verwijderen
			errVoornaam.innerHTML = "";
			aantalSucces++;
		}


};

const valideerFamilienaam = () =>{
	let txtFamilienaam = document.getElementById("familienaam").value;
	let errFamilienaam = document.getElementById("familienaam-error");

	if(txtFamilienaam.length > 0){
		if(txtFamilienaam.length <= 50){
			aantalSucces++;
		}else{
			errFamilienaam.innerHTML = "max 50 karakters"
		}
	}else{
		errFamilienaam.innerHTML = "verplicht veld"
	}
}

const isGetal = (tekst) => { return !isNaN(tekst); }

const valideerGeboorteDatum = () =>{
	let datum = document.getElementById("geboortedatum").value;
	let errGeboortedatum = document.getElementById("geboortedatum-error");
	let jaar = datum.slice(0, 4)
	let maand = datum.slice(5, 7)
	let dag = datum.slice(8, 10)

	if(datum.length > 0){
		if(isGetal(jaar) && isGetal(maand) && isGetal(dag)){
			if(jaar.length === 4 && maand.length === 2 && dag.length ===2){
				if(datum.slice(5,6) === "-" && datum.slice(7,8) === "-"){
					aantalSucces++;
					errGeboortedatum.innerHTML = " ";
				}else{
					errGeboortedatum.innerHTML = "voldoet niet aan formaat jjjj-mm-dd"
				}
			}else{
				errGeboortedatum.innerHTML = "voldoet niet aan formaat jjjj-mm-dd"
			}
		}else{
			errGeboortedatum.innerHTML = "voldoet niet aan formaat jjjj-mm-dd"
		}
	}else{
		errGeboortedatum.innerHTML = "Verplicht veld"
	}
}

const valideerEmail = () =>{
	let email = document.getElementById("email").value;
	let errEmail = document.getElementById("email-error");

	if(email.length >= 0){
		if(email.split("@").length === 2){
			let index = email.indexOf("@");
			if(email.slice(index-1,index) && email.slice(index, index+1)){
				errEmail.innerHTML = " ";
				aantalSucces++;
			}else{
				errEmail.innerHTML = "Geen geldig email adres"
			}
		}else{
			errEmail.innerHTML = "Geen geldig email adres"
		}
	}else{
		errEmail.innerHTML = "verplicht veld"
	}

}

const valideerAantalKinderen = () =>{
	let aantalKinderen = document.getElementById("aantal_kinderen").value;
	let errKinderen = document.getElementById("aantal_kinderen-error");

	if(isGetal(aantalKinderen)){
		if(aantalKinderen >= 0){
			if(aantalKinderen < 99){
				errKinderen.innerHTML = " ";
				aantalSucces++;
			}else{
				errKinderen.innerHTML = "is te vruchtbaar"
			}
		}else{
			errKinderen.innerHTML = "Geen positief getal"
		}
	}else{
		errKinderen.innerHTML = "Geen positief getal"
	}
}

window.addEventListener("load", setup);