// Scroll to top button
const btn = document.createElement("button");
btn.innerText = "⬆ Top";
btn.style.position = "fixed";
btn.style.bottom = "20px";
btn.style.right = "20px";
btn.style.padding = "8px 12px";
btn.style.background = "#007bff";
btn.style.color = "#fff";
btn.style.border = "none";
btn.style.borderRadius = "5px";
btn.style.cursor = "pointer";
btn.style.display = "none";
document.body.appendChild(btn);

btn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", () => {
  btn.style.display = window.scrollY > 200 ? "block" : "none";
});
document.getElementById("theme-toggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const btn = document.getElementById("theme-toggle");
  btn.textContent = document.body.classList.contains("dark") ? "☀ Light Mode" : "🌙 Dark Mode";
});

// Auto-update age based on full birth date
const birthDate = new Date(2006, 0, 19); // 19 Jan 2006 (month is 0-indexed)
const today = new Date();
let age = today.getFullYear() - birthDate.getFullYear();
const m = today.getMonth() - birthDate.getMonth();
if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
  age--;
}
const ageSpan = document.getElementById("age-value");
if (ageSpan) {
  ageSpan.textContent = age;
}

// Disable right-click context menu
window.addEventListener('contextmenu', function(e) {
  e.preventDefault();
});

// Disable copy event
window.addEventListener('copy', function(e) {
  e.preventDefault();
});

// Disable text selection
window.addEventListener('selectstart', function(e) {
  e.preventDefault();
});

// Attempt to block screenshot via PrintScreen key
window.addEventListener('keydown', function(e) {
  if (e.key === 'PrintScreen') {
    navigator.clipboard.writeText('Screenshots are disabled on this site.');
    e.preventDefault();
  }
});
