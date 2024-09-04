// Get the install button element by its ID
const butInstall = document.getElementById("buttonInstall");

let deferredPrompt;

// Logic for installing the PWA
// Event handler for 'beforeinstallprompt' to show the install button
window.addEventListener("beforeinstallprompt", (event) => {
  // Prevent the browser's default install prompt
  event.preventDefault();
  // Store the event to trigger the prompt later
  window.deferredPrompt = event;
  // Show the install button
  butInstall.style.display = "block";
});

// Event handler for 'click' on the install button
butInstall.addEventListener("click", async () => {
  if (window.deferredPrompt) {
    try {
      // Wait for the user to respond to the install prompt
      const choiceResult = await window.deferredPrompt.prompt();

      // Log the user's choice on installation
      if (choiceResult.outcome === "accepted") {
        console.log("User accepted the install prompt");
      } else {
        console.log("User dismissed the install prompt");
      }

      // Clear the deferredPrompt variable
      window.deferredPrompt = null;

      // Hide the install button
      butInstall.style.display = "none";
    } catch (err) {
      console.error("Installation error:", err);
    }
  } else {
    console.log("No deferredPrompt available");
  }
});

// Event handler for 'appinstalled' event after successful app installation
window.addEventListener("appinstalled", (event) => {
  console.log("App installed:", event);
});