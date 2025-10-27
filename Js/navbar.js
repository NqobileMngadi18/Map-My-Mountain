
document.addEventListener("DOMContentLoaded", function() {
  const loginButton = document.querySelector(".top-nav a button");
  const navButtons = document.querySelectorAll(".btm-nav button, .footer button");
  const topNav = document.querySelector(".top-nav");
  const user = getCurrentUser();

  if (user) {
    // Hide login button
    if (loginButton) loginButton.style.display = "none";

    // Add welcome message
    const welcomeMsg = document.createElement("span");
    welcomeMsg.textContent = `Welcome, ${user.name}!`;
    welcomeMsg.style.fontSize = "18px";
    welcomeMsg.style.fontWeight = "bold";
    welcomeMsg.style.marginLeft = "auto";
    welcomeMsg.style.color = "#fff";
    topNav.appendChild(welcomeMsg);

    // Enable navigation buttons
    navButtons.forEach(btn => {
      btn.disabled = false;
      btn.style.opacity = "1";
      btn.style.cursor = "pointer";
    });

    // Add logout button
    const logoutBtn = document.createElement("button");
    logoutBtn.textContent = "Logout";
    logoutBtn.style.marginLeft = "10px";
    logoutBtn.style.backgroundColor = "crimson";
    logoutBtn.style.color = "#fff";
    logoutBtn.style.border = "none";
    logoutBtn.style.borderRadius = "5px";
    logoutBtn.style.padding = "5px 10px";
    logoutBtn.style.cursor = "pointer";
    topNav.appendChild(logoutBtn);
    logoutBtn.addEventListener("click", logoutUser);
  } else {
    // Lock buttons if not signed in
    navButtons.forEach(btn => {
      btn.disabled = true;
      btn.style.opacity = "0.6";
      btn.style.cursor = "not-allowed";
    });
  }
});
