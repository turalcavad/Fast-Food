const firstSectionText = document.querySelector(".our-menu-btn-wrapper");

const initialCoords = firstSectionText.getBoundingClientRect();

const headerNavTags = document.querySelectorAll(".header-nav-tags");

const socialMediaButtons = document.querySelectorAll(".social-media-buttons");
const logo = document.querySelector(".logo");
const logoSticky = document.querySelector(".logo-sticky");
const header = document.querySelector(".header-content-wrapper");

window.addEventListener("scroll", function () {
	// console.log(initialCoords.top);
	// console.log(window.scrollY);
	// if (window.scrollY > initialCoords.y && window.innerWidth > 991) {
	// 	header.classList.add("sticky");
	// 	logo.style.display = "none";
	// 	logoSticky.style.display = "block";
	// 	headerNavTags.forEach((tag) => {
	// 		tag.classList.add("sticky-navbar");
	// 	});
	// 	socialMediaButtons.forEach((buttons) => (buttons.style.color = "#333"));
	// } else {
	// 	header.classList.remove("sticky");
	// 	headerNavTags.forEach((tag) => {
	// 		tag.classList.remove("sticky-navbar");
	// 	});
	// 	socialMediaButtons.forEach((buttons) => (buttons.style.color = "#fff"));
	// 	logo.style.display = "block";
	// 	logoSticky.style.display = "none";
	// }

	$(window).on("scroll", function () {
		if ($(window).scrollTop() && $(window).innerWidth() > 991) {
			header.classList.add("sticky");
			logo.style.display = "none";
			logoSticky.style.display = "block";
			headerNavTags.forEach((tag) => {
				tag.classList.add("sticky-navbar");
			});
			socialMediaButtons.forEach((buttons) => (buttons.style.color = "#333"));
		} else {
			header.classList.remove("sticky");
			headerNavTags.forEach((tag) => {
				tag.classList.remove("sticky-navbar");
			});
			socialMediaButtons.forEach((buttons) => (buttons.style.color = "#fff"));
			logo.style.display = "block";
			logoSticky.style.display = "none";
		}
	});
});
