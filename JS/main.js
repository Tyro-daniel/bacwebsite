document.addEventListener("DOMContentLoaded", function () {
  // Typewriter Effect
  const messages = [
    "Empowering students through connection.",
    "Your voice. Your journey. Our platform.",
    "Every login unlocks new opportunities.",
    "BAC isn't just a place—it's a community.",
    "Collaboration is the heartbeat of success.",
  ];

  let messageIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typedTextSpan = document.getElementById("typed-text");

  function type() {
    const currentMessage = messages[messageIndex];
    const speed = isDeleting ? 40 : 80;

    // Set the text content
    typedTextSpan.textContent = currentMessage.substring(0, charIndex);

    // Logic to change direction (typing vs. deleting)
    if (!isDeleting && charIndex < currentMessage.length) {
      charIndex++;
    } else if (isDeleting && charIndex > 0) {
      charIndex--;
    } else {
      isDeleting = !isDeleting;
      if (!isDeleting) {
        messageIndex = (messageIndex + 1) % messages.length;
      }
    }

    setTimeout(type, isDeleting ? speed : speed + Math.random() * 100);
  }

  // Dynamic Greeting
  function greetByTime() {
    const hour = new Date().getHours();
    let greeting = "Welcome";
    if (hour < 12) greeting = "Good morning";
    else if (hour < 17) greeting = "Good afternoon";
    else greeting = "Good evening";
    document.getElementById(
      "greeting"
    ).textContent = `${greeting}, future innovator!`;
  }

  greetByTime();
  type();
});