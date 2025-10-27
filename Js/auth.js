
// Demo user data
const DUMMY_USER = {
  email: "soneziwem@02.com",
  password: "123456",
  name: "Soneziwe"
};

// Log in
function loginUser({ email, password }) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === DUMMY_USER.email && password === DUMMY_USER.password) {
        localStorage.setItem("loggedInUser", JSON.stringify(DUMMY_USER));
        resolve({ success: true, user: DUMMY_USER });
      } else {
        reject({ message: "Invalid email or password." });
      }
    }, 800);
  });
}

// Check login status
function isLoggedIn() {
  return localStorage.getItem("loggedInUser") !== null;
}

// Get user info
function getCurrentUser() {
  const user = localStorage.getItem("loggedInUser");
  return user ? JSON.parse(user) : null;
}

// Log out
function logoutUser() {
  localStorage.removeItem("loggedInUser");
  window.location.reload();
}
