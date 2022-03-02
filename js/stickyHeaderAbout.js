const header = document.querySelector("header");
console.log(header);

const headerContainer = function () {
	let innerWidth = window.innerWidth;
	console.log(innerWidth);

	if (innerWidth < 768) {
		header.classList.remove("container");
	}
};

headerContainer();
