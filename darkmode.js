// Tự động tạo toggle khi trang load
document.addEventListener("DOMContentLoaded", () => {
  const container = document.createElement("div");
  container.className = "toggle-container";
  container.innerHTML = `
    <label>
      <input type="checkbox" id="darkModeToggle">
      Chế độ tối
    </label>
  `;
  document.body.prepend(container);

  const toggle = document.getElementById("darkModeToggle");
  const body = document.body;

  // Load trạng thái từ localStorage
  if (localStorage.getItem("dark-mode") === "true") {
    body.classList.add("dark");
    toggle.checked = true;
  }

  toggle.addEventListener("change", () => {
    if (toggle.checked) {
      body.classList.add("dark");
      localStorage.setItem("dark-mode", "true");
    } else {
      body.classList.remove("dark");
      localStorage.setItem("dark-mode", "false");
    }
  });
});
