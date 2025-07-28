document.addEventListener("DOMContentLoaded", () => {
  const toggleIcons = document.querySelectorAll(".toggle-icon");

  toggleIcons.forEach(icon => {
    icon.addEventListener("click", () => {
      const passwordInput = icon.previousElementSibling;
      const isPassword = passwordInput.type === "password";

      // Toggle input type
      passwordInput.type = isPassword ? "text" : "password";

      // Toggle icon class
      icon.classList.toggle("fa-eye");
      icon.classList.toggle("fa-eye-slash");
    });
  });
});