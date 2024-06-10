document.addEventListener("DOMContentLoaded", function() {
  const hamburgerInput = document.getElementById("hamburger-input");
  const sidebar = document.getElementById("sidebar");

  // Add click event listener to the hamburger menu checkbox
  hamburgerInput.addEventListener("click", function() {
    // Toggle the visibility of the sidebar
    sidebar.classList.toggle("show-sidebar");
  });
});