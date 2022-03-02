const sidebar = document.querySelector(".mobile-menu");
const menuButton = document.querySelector(".mobile-menu-button");
const closeButton = document.querySelector(".fa-xmark");
const mainSection = document.querySelector(".content");
menuButton.addEventListener("click", toggleSidebar);
closeButton.addEventListener("click", toggleSidebar);

function toggleSidebar() {
	sidebar.classList.toggle("sidebar-active");

	// if (sidebar.classList.contains("sidebar-active")) {
	// 	mainSection.style.transition = `0.5s`;
	// 	mainSection.style.transform = `translateX(${sidebar.offsetWidth}px)`;
	// } else {
	// 	mainSection.style.transform = `translateX(0)`;
	// }
}
