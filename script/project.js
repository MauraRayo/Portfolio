// ---------------------------- PROYECTOS PROFESIONALES ----------------------------
const professionalProjects = [
  {
    name: "Transfer2Bilbao (v1 - 2023)",
    skills: [
      "WordPress",
      "HTML",
      "CSS",
      "JavaScript",
      "Elementor",
      "SEO",
      "UX/UI",
    ],
    description:
      "Desarrollo de la primera versión de la web de Transfer2Bilbao en 2023, una plataforma orientada a promocionar servicios de transporte privado en Bilbao y sus alrededores. Trabajé en la maquetación responsive utilizando HTML, CSS, JavaScript y WordPress, asegurando una buena experiencia tanto en móvil como en escritorio. Optimicé el contenido con SEO on-page para mejorar la visibilidad en buscadores.",
    img: ["img/14.png", "img/15.png"],
    demo: "https://transfer2bilbao.com",
    github: "",
  },
  {
    name: "Jobbe ETT (2022 - 2024)",
    skills: ["WordPress", "JavaScript", "HTML", "CSS", "SEO", "UX/UI"],
    description:
      "Maquetación responsive utilizando HTML5, CSS3, JavaScript y WordPress, garantizando una navegación fluida tanto en móviles como en escritorio. Además, optimicé el sitio mediante técnicas de SEO on-page para mejorar el posicionamiento de las ofertas de empleo.",
    img: ["img/1.png", "img/2.png", "img/3.png"],
    demo: "https://www.jobbe.es/wp/",
  },
  {
    name: "Walt HR (2022 - 2024)",
    skills: ["WordPress", "JavaScript", "HTML", "CSS", "Yoast SEO", "UX/UI"],
    description:
      "Mantenimiento y optimización de la plataforma web. Realicé la maquetación responsive utilizando HTML5, CSS3, JavaScript y WordPress, garantizando una navegación fluida.",
    img: ["img/4.png", "img/5.png", "img/6.png"],
    demo: "https://walt.es/",
  },
];

// ---------------------------- PROYECTOS PERSONALES ----------------------------
const personalProjects = [
  {
    name: "Azukre Koxkorra",
    skills: [
      "HTML5",
      "CSS3",
      "javaScript",
      "Spring Boot",
      "thymeleaf",
      "JSP",
      "MSQL",
    ],
    description:
      "Frontend de Azukre Koxkorra, una cafetería online donde los usuarios pueden visualizar productos, visualizar las últimas novedades, dejar un comentario y gestionar tus preferencias.",
    img: ["img/7.png", "img/8.png", "img/16.png", "img/10.png"],
    github: "https://github.com/MauraRayo/Azukre-koxkorra-Frontend",
  },
  {
    name: "Documentación de Azukre koxkorra",
    skills: [
      "Java 17",
      "Spring Boot",
      "Spring Data JPA",
      "Spring Security",
      "Maven",
      "MySQL Workbench",
      "Swagger (OpenAPI)",
    ],
    description:
      "API REST desarrollada en Spring Boot para gestionar la lógica del proyecto Azukre Koxkorra. Este backend proporciona los servicios necesarios para la aplicación frontend, incluyendo autenticación, gestión de datos y operaciones principales del sistema.",
    img: ["img/11.png", "img/12.png", "img/13.png"],
    github: "https://github.com/MauraRayo/Azukre-koxkorra-Backend",
  },
];

function renderProjects(projects, containerId) {
  let container = document.getElementById(containerId);
  if (!container) return;

  projects.forEach((project) => {
    let card = document.createElement("div");
    card.classList.add("project-card");

    const images = project.img
      .map(
        (img, i) =>
          `<img src="${img}" class="slide ${i === 0 ? "active" : ""}" onclick="openModal('${img}')">`,
      )
      .join("");

    let linksHtml = "";

    if (
      containerId !== "personal-projects" &&
      project.demo &&
      project.demo !== "#"
    ) {
      linksHtml += `<a href="${project.demo}" target="_blank">Web</a>`;
    }
    if (project.github) {
      linksHtml += `<a href="${project.github}" target="_blank"> GitHub</a>`;
    }

    card.innerHTML = `
      <div class="slider">
        ${images}
        <button class="prev">❮</button>
        <button class="next">❯</button>
      </div>
      <div class="project-content">
        <h4>${project.name}</h4>
        <p>${project.description}</p>
        <p><strong>Skills:</strong> ${project.skills.join(", ")}</p>
        <div class="project-links">
          ${linksHtml}
        </div>
      </div>
    `;

    container.appendChild(card);
    setupSlider(card);
  });
}

function setupSlider(card) {
  let slides = card.querySelectorAll(".slide");
  if (slides.length <= 1) {
    card
      .querySelectorAll("button")
      .forEach((btn) => (btn.style.display = "none"));
    return;
  }
  let index = 0;
  card.querySelector(".next").onclick = () => {
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
  };
  card.querySelector(".prev").onclick = () => {
    slides[index].classList.remove("active");
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add("active");
  };
}

renderProjects(professionalProjects, "professional-projects");
renderProjects(personalProjects, "personal-projects");
