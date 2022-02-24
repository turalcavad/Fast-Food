const firstSectionText = document.querySelector(".special-offer-section");

const initialCoords = firstSectionText.getBoundingClientRect();

const header = document.querySelector(".header-content-wrapper");

window.addEventListener("scroll", function () {
	console.log(header);
	console.log(initialCoords.top);
	if (window.scrollY > initialCoords.top) {
		console.log("test");
		header.classList.add("sticky");
	} else {
		header.classList.remove("sticky");
	}
});
