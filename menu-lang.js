const langButtons = document.querySelectorAll(".lang-btn");
const langElements = document.querySelectorAll(".lang");

// Apply saved language on load
document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("selectedLang") || "en"; // default English
  setLanguage(savedLang);
});

// Button click event
langButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const selectedLang = btn.dataset.lang;
    localStorage.setItem("selectedLang", selectedLang); // save choice
    setLanguage(selectedLang);
  });
});

// Function to update all text
function setLanguage(lang) {
  // update active button styling
  langButtons.forEach(b => b.classList.remove("active"));
  document.querySelector(`.lang-btn[data-lang="${lang}"]`).classList.add("active");

  // update text
  langElements.forEach(el => {
    el.textContent = el.dataset[lang];
  });
}
