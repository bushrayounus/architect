console.log("Website Loaded");

const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach(card => {

    card.addEventListener("click", () => {

        const project = card.dataset.project;

        alert("You clicked " + project);

    });

});
