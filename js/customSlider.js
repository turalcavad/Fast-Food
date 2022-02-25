const slides = document.querySelectorAll(".slide-item");
const slide = document.querySelector(".custom-slider");

const btnRight = document.querySelector(".slider__btn--right");
const btnLeft = document.querySelector(".slider__btn--left");

const dotContainer = document.querySelector(".dots");

// slide.style.transform = "scale(0.5)";

const createDots = function () {
	slides.forEach(function (_, i) {
		dotContainer.insertAdjacentHTML(
			"beforeend",
			`<button class="dots__dot" data-slide="${i}"></button>`
		);
	});
};
createDots();
const goToSlide = function (curSlide) {
	slides.forEach((s, i) => {
		s.style.transform = `translateX(${(i - curSlide) * 100}%)`;
	});
};
goToSlide(0);

let curSlide = 0;
const maxSlide = slides.length;

//next slide
const nextSlide = function () {
	if (curSlide === maxSlide - 1) {
		curSlide = 0;
	} else {
		curSlide++;
	}

	goToSlide(curSlide);
};
//prev slide
const prevSlide = function () {
	if (curSlide === 0) {
		curSlide = maxSlide - 1;
	} else {
		curSlide--;
	}
	goToSlide(curSlide);
};

// event handlers

dotContainer.addEventListener("click", function (e) {
	if (e.target.classList.contains("dots__dot")) {
		const { slide } = e.target.dataset;
		goToSlide(slide);
	}
});

document.addEventListener("keydown", function (e) {
	if (e.key === "ArrowLeft") prevSlide();
	e.key === "ArrowRight" && nextSlide();
});

btnRight.addEventListener("click", nextSlide);
btnLeft.addEventListener("click", prevSlide);
