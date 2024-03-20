const openSidebarButton = document.getElementById("openSidebar");
const closeSidebarButton = document.getElementById("closeSidebar");
const sidebar = document.getElementById("sidebar");

openSidebarButton.addEventListener("click", function () {
  sidebar.classList.remove("hidden");
  sidebar.style.transform = "translateX(0)";
  document.body.style.overflowY = "hidden"; // Disable scrolling
});

closeSidebarButton.addEventListener("click", function () {
  sidebar.style.transform = "translateX(-100%)";
  document.body.style.overflowY = "auto"; // Enable scrolling
  setTimeout(function () {
    sidebar.classList.add("hidden");
  }, 500); // Adjust the timing to match your transition duration
});

// Close sidebar when clicking outside of it
window.addEventListener("click", function (event) {
  if (event.target === sidebar) {
    closeSidebarButton.click();
  }
});

// Close sidebar when pressing the Escape key
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeSidebarButton.click();
  }
});

// Close sidebar when scrolling
window.addEventListener("scroll", function () {
  closeSidebarButton.click();
});
