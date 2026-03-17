const $form = document.querySelector("#add-form");
const $text = document.querySelector("#light-name");
const $error = document.querySelector("#name-error");
const $lightgrid = document.querySelector("#lights-grid");
const $allon = document.querySelector("#all-on");
const $alloff = document.querySelector("#all-off");
const $numberon = document.querySelector("#number-on");

let etat = false;
let number = 0;

$form.addEventListener("submit", (e) => {
	e.preventDefault();

	const data = new FormData(e.currentTarget);
	const name = data.get("namelight");

	if (name.length <= 3) {
		$error.textContent = "ca marche pas quand tu met 3 caracteres"
	} else {
		createDiv(name);
	}

	$form.reset();
});

function createDiv(name) {
	const div = document.createElement("div");
	div.classList.add("light-card");

	const img = document.createElement("img");
	img.src = "/assets/glowstone-off.webp";
	div.appendChild(img);

	const p = document.createElement("p");
	p.textContent = name;
	div.appendChild(p);

	const statut = document.createElement("p");
	statut.textContent = "OFF";
	statut.classList.add("status-badge");
	div.appendChild(statut);

	const turn = document.createElement("button");
	turn.textContent = "Turn OFF";
	div.appendChild(turn);

	const btn = document.createElement("button");
	btn.textContent = "Delete";
	btn.classList.add("delete-btn");
	div.appendChild(btn);

	btn.addEventListener("click", () => {
		div.remove();
	});

	turn.addEventListener("click", () => {
		if (etat == false) {
			div.classList.add("light-on");
			div.classList.remove("light-off");
			img.src = "/assets/glowstone-on.webp";
			etat = true;
			turn.textContent = "Turn OFF";
			statut.textContent = "ON";
            $numberon.textContent = number;
		} else {
			div.classList.remove("light-on");
			div.classList.add("light-off");
			img.src = "/assets/glowstone-off.webp";
			etat = false;
			turn.textContent = "Turn ON";
			statut.textContent = "OFF";
		}
	});

	$allon.addEventListener("click", () => {
		div.classList.add("light-on");
		div.classList.remove("light-off");
		img.src = "/assets/glowstone-on.webp";
		etat = true;
		turn.textContent = "Turn OFF";
		statut.textContent = "ON";
	});

	$alloff.addEventListener("click", () => {
		div.classList.remove("light-on");
		div.classList.add("light-off");
		img.src = "/assets/glowstone-off.webp";
		etat = false;
		turn.textContent = "Turn ON";
		statut.textContent = "OFF";
	});

	$lightgrid.appendChild(div);

	for (let i = 0; i < 0; i++) {
		number + 1;
	}
}
