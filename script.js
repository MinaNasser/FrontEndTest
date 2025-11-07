const dropdownToggle = document.querySelector(".dropdown-toggle");
const dropdownMenu = document.querySelector(".dropdown-menu");
const allPagesCheckbox = document.getElementById("allPages");
const pageCheckboxes = document.querySelectorAll(".pageCheckbox");

dropdownToggle.addEventListener("click", () => {
  dropdownMenu.classList.toggle("show");
});

allPagesCheckbox.addEventListener("change", (e) => {
  pageCheckboxes.forEach((checkbox) => {
    checkbox.checked = e.target.checked;
  });
});

pageCheckboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    const allChecked = Array.from(pageCheckboxes).every((cb) => cb.checked);
    allPagesCheckbox.checked = allChecked;
  });
});

document.addEventListener("click", (e) => {
  if (!e.target.closest(".dropdown")) {
    dropdownMenu.classList.remove("show");
  }
});
