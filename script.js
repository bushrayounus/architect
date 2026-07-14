console.log("Website Loaded");

// ================= MOBILE SIDEBAR =================

const sidebar = document.getElementById("sidebar");
const menuToggle = document.getElementById("menuToggle");

if (menuToggle && sidebar) {

    menuToggle.addEventListener("click", () => {
        sidebar.classList.toggle("open");
    });

    sidebar.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            sidebar.classList.remove("open");
        });
    });

    document.addEventListener("click", (e) => {
        const isClickInside = sidebar.contains(e.target) || menuToggle.contains(e.target);
        if (!isClickInside) {
            sidebar.classList.remove("open");
        }
    });

}
