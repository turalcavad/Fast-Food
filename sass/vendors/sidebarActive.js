const sidebar = document.querySelector(".mobile-menu");
const menuButton = document.querySelector(".mobile-menu-button");
const closeButton = document.querySelector(".fa-xmark");

menuButton.addEventListener("click", toggleSidebar);
closeButton.addEventListener("click", toggleSidebar);

function toggleSidebar() {
	sidebar.classList.toggle("sidebar-active");
}
