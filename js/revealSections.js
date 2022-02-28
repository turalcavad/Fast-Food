// window.addEventListener("load", function () {
// 	const ourMenuSection = document.querySelector(".our-menu-section");
// 	const pizzaItems = document.querySelectorAll(".our-menu-pizza-row");
// 	const pizzaItem = document.querySelectorAll(".our-menu-items");

// 	testData = ourMenuSection.getBoundingClientRect();
// 	ourMenuSection.top;

// 	console.log(testData.top);

// 	//reveal pizza elements (our menu section)
// 	const revealSection = function (entries, observer) {
// 		const [entry] = entries;

// 		const pizzaElements = entry.target.children;

// 		for (let i = 0; i < pizzaElements.length; i++) {
// 			pizzaElements[i].classList.add("animate-fade-in");
// 		}
// 	};

// 	const sectionObserver = new IntersectionObserver(revealSection, {
// 		root: null,
// 		threshold: 0.15,
// 	});

// 	pizzaItems.forEach((ovbservedItem) => {
// 		sectionObserver.observe(ovbservedItem);
// 	});

// 	//reveal text (special offer section)

// 	const textDescription = document.querySelector(".speacial-offer-description");

// 	const revealText = function (entries, observer) {
// 		const [entry] = entries;
// 		// if (!entry.isIntersecting) return;

// 		entry.target.classList.add("description-active");
// 		entry.target.classList.add("animate-fade-in");
// 	};

// 	const textObserver = new IntersectionObserver(revealText, {
// 		root: null,
// 		threshold: 0.3,
// 	});

// 	textObserver.observe(textDescription);
// });

const pizzaItem = document.querySelectorAll(".our-menu-items");
const ourMenuOrderBtn = document.querySelector(".our-menu-order-button");

const textDescription = document.querySelector(".speacial-offer-description");

const reveal = function () {
	for (let i = 0; i < pizzaItem.length; i++) {
		let windowHeight = window.innerHeight;
		let revealTop = pizzaItem[i].getBoundingClientRect().top;
		let revealPoint = 200;

		if (revealTop < windowHeight - revealPoint) {
			pizzaItem[i].classList.add("animate-fade-in");
		} else {
			pizzaItem[i].classList.remove("animate-fade-in");
		}
	}
};

const revealText = function () {
	let windowHeight = window.innerHeight;
	let revealTop = textDescription.getBoundingClientRect().top;
	let revealPoint = 100;

	if (revealTop < windowHeight - revealPoint) {
		textDescription.classList.add("description-active");
		textDescription.classList.add("animate-fade-in");
	} else {
		textDescription.classList.remove("description-active");
		textDescription.classList.remove("animate-fade-in");
	}
};

window.addEventListener("scroll", reveal);
window.addEventListener("scroll", revealText);
