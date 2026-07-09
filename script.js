console.log("Website Loaded");

// ================= NAVBAR =================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    navbar.classList.toggle("scrolled", window.scrollY > 50);

});

// ================= PROJECT DATA =================

const projects = {

    project1:{
        title:"Project One",
        images:3
    },

    project2:{
        title:"Project Two",
        images:5
    },

    project3:{
        title:"Project Three",
        images:8
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

document.querySelectorAll(".project-card").forEach(card=>{

    card.addEventListener("click",()=>{

        currentProject = card.dataset.project;
        currentImage = 1;

        openGallery();

    });

});

function openGallery(){

    gallery.classList.add("active");

    updateImage();

}

function updateImage(){

    galleryImage.src =
    `assets/projects/${currentProject}/0${currentImage}.jpg`;

}

nextBtn.onclick = ()=>{

    if(currentImage < projects[currentProject].images){

        currentImage++;

    }else{

        currentImage = 1;

    }

    updateImage();

};

prevBtn.onclick = ()=>{

    if(currentImage > 1){

        currentImage--;

    }else{

        currentImage = projects[currentProject].images;

    }

    updateImage();

};

closeBtn.onclick = ()=>{

    gallery.classList.remove("active");

};

gallery.addEventListener("click",(e)=>{

    if(e.target===gallery){

        gallery.classList.remove("active");

    }

});

document.addEventListener("keydown",(e)=>{

    if(!gallery.classList.contains("active")) return;

    if(e.key==="Escape"){

        gallery.classList.remove("active");

    }

    if(e.key==="ArrowRight"){

        nextBtn.click();

    }

    if(e.key==="ArrowLeft"){

        prevBtn.click();

    }

});
