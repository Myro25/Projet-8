const projects = [
    {
        nom: "Kaza",
        langage: "React SCSS",
        image: "Kasa.png",
        projet: "Openclassrooms",
        description: "Ce projet consistait a utiliser le frameworks React qui utilise comme language le JSX, complementer avec du SCSS pour ceux qui est du CSS. La grosse difficulté a ete de s'adapter au deux nouveau language mais ayant des bases de JS et de CSS sa a suffit a madapter rapidement",
        link: "lien_vers_votre_projet_ici"
    },
    {
        nom: "Booki",
        langage: "HTML CSS",
        image: "Booki.png",
        projet: "Openclassrooms",
        description: "Ce projet consistait a rentrer dans le bain du développmeent web en utilisant les deux language primaire HTML et CSS. Grace a ceux projet les projet suivant concerant la creation de page ou de design a ete plus simple a comprendre et a crée",
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
