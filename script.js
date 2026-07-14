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

// ================= PROJECT DATA =================

const projects = {
    project1: {
        title: "Coastal Retreat — Architecture",
        images: 3
    },
    project2: {
        title: "Luxury Suite — Sind Club",
        images: 5
    },
    project3: {
        title: "Coastal Retreat — Interior",
        images: 8
    },
    project4: {
        title: "Signature Tower",
        images: 1
    },
    project5: {
        title: "Restaurant",
        images: 1
    },
    project6: {
        title: "Corporate",
        images: 1
    }
};

// ================= GALLERY =================

const gallery = document.getElementById("gallery");
const galleryImage = document.getElementById("gallery-image");
const closeBtn = document.querySelector(".gallery-close");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");

let currentProject = "";
let currentImage = 1;

document.querySelectorAll(".project-card").forEach(card => {
    card.addEventListener("click", () => {
        currentProject = card.dataset.project;
        currentImage = 1;
        openGallery();
    });
});

function openGallery() {
    gallery.classList.add("active");
    document.body.style.overflow = "hidden";
    updateImage();
}

function closeGallery() {
    gallery.classList.remove("active");
    document.body.style.overflow = "";
}

function updateImage() {
    galleryImage.src = `assets/projects/${currentProject}/0${currentImage}.jpg`;
}

nextBtn.onclick = () => {
    if (currentImage < projects[currentProject].images) {
        currentImage++;
    } else {
        currentImage = 1;
    }
    updateImage();
};

prevBtn.onclick = () => {
    if (currentImage > 1) {
        currentImage--;
    } else {
        currentImage = projects[currentProject].images;
    }
    updateImage();
};

closeBtn.onclick = () => {
    closeGallery();
};

gallery.addEventListener("click", (e) => {
    if (e.target === gallery) {
        closeGallery();
    }
});

document.addEventListener("keydown", (e) => {
    if (!gallery.classList.contains("active")) return;
    if (e.key === "Escape") {
        closeGallery();
    }
    if (e.key === "ArrowRight") {
        nextBtn.click();
    }
    if (e.key === "ArrowLeft") {
        prevBtn.click();
    }
});
