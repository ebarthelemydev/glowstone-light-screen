const $glowstone = document.querySelector("#glowstone");
const $btn = document.querySelector("#light");
const $modal = document.querySelector("dialog");
const $dialog = document.querySelector("dialog");
const $body = document.querySelector("body");
const $off = document.querySelector("#menu-code-status");

let etat = false;

$btn.addEventListener("click", () => {
	$modal.showModal();
});

$dialog.addEventListener("submit", () => {
	if (etat == false) {
		$body.classList.add("light-on");
		$body.classList.remove("light-off");
		$glowstone.src = "/assets/glowstone-on.webp";
		etat = true;
	} else {
		$body.classList.remove("light-on");
		$body.classList.add("light-off");
		$glowstone.src = "/assets/glowstone-off.webp";
		etat = false;
	}
});
