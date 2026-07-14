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
// Looks for 1.jpg, 2.jpg, 3.jpg... inside the project's folder
// and stops the moment a number doesn't exist. No counts to set by hand.

function loadProjectGallery() {

    const galleryEl = document.querySelector(".project-gallery");
    if (!galleryEl) return;

    const project = galleryEl.dataset.project;
    const base = galleryEl.dataset.base || "";
    let n = 1;

    function tryNext() {
        const probe = new Image();

        probe.onload = () => {
            const img = document.createElement("img");
            img.src = probe.src;
            img.alt = project + " image " + n;
            galleryEl.appendChild(img);
            n++;
            tryNext();
        };

        probe.onerror = () => {
            // no more numbered images left, stop here
        };

        probe.src = `${base}${project}/${n}.jpg`;
    }

    tryNext();
}

loadProjectGallery();
