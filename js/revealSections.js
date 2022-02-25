const ourMenuSection = document.querySelector(".our-menu-section");
const pizzaItems = document.querySelectorAll(".our-menu-pizza-row");
const pizzaItem = document.querySelectorAll(".our-menu-items");

//reveal pizza elements (our menu section)
const revealSection = function (entries, observer) {
	const [entry] = entries;
	if (!entry.isIntersecting) return;
	// entry.target.classList.add("animate-fade-in");
	pizzaItem.forEach((item) => {
		// item.classList.add("animate-fade-in");
	});
	const pizzaElements = entry.target.children;
	console.log(pizzaElements);

	for (let i = 0; i < pizzaElements.length; i++) {
		pizzaElements[i].classList.add("animate-fade-in");
		console.log("loop");
	}
	// observer.unobsorve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
	root: null,
	threshold: 0.15,
});

pizzaItems.forEach((ovbservedItem) => {
	sectionObserver.observe(ovbservedItem);
});

//reveal text (special offer section)

const textDescription = document.querySelector(".speacial-offer-description");

console.log(textDescription);

const revealText = function (entries, observer) {
	const [entry] = entries;
	if (!entry.isIntersecting) return;
	console.log("test");

	entry.target.classList.add("description-active");
	entry.target.classList.add("animate-fade-in");
};

const textObserver = new IntersectionObserver(revealText, {
	root: null,
	threshold: 0.3,
});

textObserver.observe(textDescription);
