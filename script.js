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

// ================= AUTO PROJECT GALLERY =================
// Checks for 1.jpg through 30.jpg inside the project's folder and
// shows whichever ones actually exist, in order. Gaps or a missing
// 1.jpg are fine, it just skips past them instead of giving up.

function loadProjectGallery() {

    const galleryEl = document.querySelector(".project-gallery");
    if (!galleryEl) return;

    const project = galleryEl.dataset.project;
    const base = galleryEl.dataset.base || "";
    const maxToCheck = 30;
    let n = 1;

    function checkNext() {

        if (n > maxToCheck) return;

        const probe = new Image();
        const num = n;

        probe.onload = () => {
            const img = document.createElement("img");
            img.src = probe.src;
            img.alt = project + " image " + num;
            galleryEl.appendChild(img);
            n++;
            checkNext();
        };

        probe.onerror = () => {
            n++;
            checkNext();
        };

        probe.src = `${base}${project}/${num}.jpg`;
    }

    checkNext();
}

loadProjectGallery();
