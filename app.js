document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("form").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      let message = form.querySelector(".simple-message");
      if (!message) {
        message = document.createElement("p");
        message.className = "simple-message";
        message.setAttribute("role", "status");
        form.appendChild(message);
      }

      message.textContent = form.classList.contains("simple-giving-form")
        ? "Your details are ready. Secure payment will open after a verified payment provider is connected."
        : "Thank you for subscribing. Your request has been received.";
    });
  });
});
