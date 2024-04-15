const projects = [
    {
        nom: "Kaza",
        langage: "React SCSS",
        image: "/image/Kasa.png",
        projet: "Openclassrooms",
        description: "Ce projet consistait à utiliser le framework React, qui utilise le JSX comme langage, complété avec du SCSS pour ce qui est du CSS. La principale difficulté a été de s'adapter aux deux nouveaux langages, mais ayant des bases en JS et en CSS, cela m'a suffi pour m'adapter rapidement.",
        link: "lien_vers_votre_projet_ici"
    },
    {
        nom: "Booki",
        langage: "HTML CSS",
        image: "/image/Booki.png",
        projet: "Openclassrooms",
        description: "Ce projet consistait à plonger dans le développement web en utilisant les deux langages primaires HTML et CSS. Grâce à ce projet, les projets suivants concernant la création de pages ou de designs ont été plus simples à comprendre et à créer. On pourra comprendre énormément de choses.",
        link: "lien_vers_votre_projet_ici"
    }
];

function displayProjects() {
    const projectsContainer = document.getElementById("projects");

    // Afficher les détails des projets dans la section "Projets"
    projects.forEach(project => {
        const projectElement = document.createElement("div");
        projectElement.classList.add("project");

        const projectName = document.createElement("h3");
        projectName.textContent = project.nom;

        const projectLanguages = document.createElement("ul");
        project.langage.split(" ").forEach(language => {
            const languageItem = document.createElement("li");
            languageItem.textContent = language;
            projectLanguages.appendChild(languageItem);
        });

        const projectDetails = document.createElement("p");
        projectDetails.textContent = project.description;
        const projectImage = document.createElement("img");
        projectImage.src = project.image;
        projectImage.alt = project.nom; // Ajoutez un attribut alt pour une meilleure accessibilité
        projectElement.appendChild(projectImage);

        const projectLink = document.createElement("a");
        projectLink.textContent = "Voir le projet";
        projectLink.href = project.link;
        projectLink.target = "_blank";

        projectElement.appendChild(projectName);
        projectElement.appendChild(projectLanguages); // Ajout de la liste des langages
        projectElement.appendChild(projectDetails);
        projectElement.appendChild(projectLink);

        projectsContainer.appendChild(projectElement);
    });
}

displayProjects()
