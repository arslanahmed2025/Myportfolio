// ============================================================
// PROJECT DATA
// ============================================================

const PROJECTS = [
  {
    name: "NexBuy",
    tagline: "E-commerce admin panel",
    desc: "Full CRUD admin panel — Category, Product, Customer, Cart modules with a Bootstrap UI.",
    stack: ["ASP.NET Core MVC", "EF Core", "SQL Server", "Bootstrap"],
    image: "assets/projects/nexbuy.png",
    video: "assets/projects/nexbuy.mp4",
    github: "https://github.com/arslanahmed2025/nexbuy",
    live: ""
  },
  {
    name: "Zaptro",
    tagline: "React e-commerce platform",
    desc: "Storefront with Clerk authentication, geolocation-based address detection, and live product listings via FakeStoreAPI.",
    stack: ["React", "Clerk", "FakeStoreAPI"],
    image: "assets/projects/zaptro.png",
    video: "assets/projects/zaptro.mp4",
    github: "https://github.com/arslanahmed2025/zaptro",
    live: ""
  },
  {
    name: "WheelHub",
    tagline: "Car rental app",
    desc: "Angular car rental application built with modern standalone component conventions.",
    stack: ["Angular", "TypeScript"],
    image: "assets/projects/wheelhub.png",
    video: "assets/projects/wheelhub.mp4",
    github: "https://github.com/arslanahmed2025/wheelhub",
    live: ""
  },
  {
    name: "EventSphere",
    tagline: "Event management — Festava theme",
    desc: "Team project. Owned the User, Participant & Registration Management module — registration flow, waitlists, ticket numbers.",
    stack: ["ASP.NET Core MVC", "EF Core", "SQL Server"],
    image: "assets/projects/eventsphere.png",
    video: "assets/projects/eventsphere.mp4",
    github: "https://github.com/arslanahmed2025/eventsphere",
    live: ""
  },
  {
    name: "JobPortal",
    tagline: "Job listing & hiring platform",
    desc: "Role-based portal for Admin, Employer and JobSeeker roles — employer profiles and job-posting CRUD.",
    stack: ["ASP.NET Core MVC", "Identity"],
    image: "assets/projects/jobportal.png",
    video: "assets/projects/jobportal.mp4",
    github: "https://github.com/arslanahmed2025/jobportal",
    live: ""
  },
  {
    name: "Hospital Management System",
    tagline: "Clinic booking & records",
    desc: "Role-based system for Admin, Doctor, Receptionist and Patient — appointments, prescriptions, medical history.",
    stack: ["ASP.NET Core MVC", "EF Core", "Identity"],
    image: "assets/projects/hms.png",
    video: "assets/projects/hms.mp4",
    github: "https://github.com/arslanahmed2025/hospital-management-system",
    live: ""
  },
  {
    name: "Social Media Platform",
    tagline: "Posts, follows & notifications",
    desc: "Core social features — posts, likes, comments, follows and real-time-style notifications.",
    stack: ["ASP.NET Core MVC", "EF Core"],
    image: "assets/projects/social.png",
    video: "assets/projects/social.mp4",
    github: "https://github.com/arslanahmed2025/social-media-platform",
    live: ""
  },
  {
    name: "EcomProject",
    tagline: "Customer storefront",
    desc: "Customer-facing storefront, deployed live on MonsterASP.NET.",
    stack: ["ASP.NET Core MVC", "SQL Server"],
    image: "assets/projects/ecomproject.png",
    video: "assets/projects/ecomproject.mp4",
    github: "https://github.com/arslanahmed2025/ecomproject",
    live: ""
  }
];

// ============================================================
// PROJECT INITIALS
// ============================================================

function getProjectInitials(name) {
  return name
    .split(" ")
    .map((word) => word.charAt(0))
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

// ============================================================
// PROJECT MEDIA
// ============================================================

function createProjectMedia(project) {
  const initials = getProjectInitials(project.name);

  // Video + image poster / fallback
  if (project.video) {
    return `
      <div class="project-media">
        <video
          class="project-video"
          poster="${project.image || ""}"
          controls
          muted
          loop
          playsinline
          preload="metadata"
          onerror="handleVideoError(this)"
        >
          <source src="${project.video}" type="video/mp4" />
          Your browser does not support video playback.
        </video>
        <img
          src="${project.image || ""}"
          alt="${project.name} screenshot"
          class="project-thumb project-video-fallback"
          style="display: none;"
          loading="lazy"
          onerror="handleImageError(this, '${initials}')"
        />
      </div>
    `;
  }

  // Image only
  if (project.image) {
    return `
      <div class="project-media">
        <img
          src="${project.image}"
          alt="${project.name} screenshot"
          class="project-thumb"
          loading="lazy"
          onerror="handleImageError(this, '${initials}')"
        />
      </div>
    `;
  }

  // No media → initials fallback
  return `
    <div class="project-media">
      <div class="project-thumb-fallback">${initials}</div>
    </div>
  `;
}

// ============================================================
// IMAGE ERROR HANDLER
// ============================================================

function handleImageError(image, initials) {
  const fallback = document.createElement("div");
  fallback.className = "project-thumb-fallback";
  fallback.textContent = initials;
  image.replaceWith(fallback);
}

// ============================================================
// VIDEO ERROR HANDLER
// ============================================================

function handleVideoError(video) {
  video.style.display = "none";
  const fallbackImage = video.nextElementSibling;
  if (fallbackImage) {
    fallbackImage.style.display = "block";
  }
}

// ============================================================
// RENDER PROJECTS
// ============================================================

function renderProjects() {
  const grid = document.getElementById("projectGrid");
  const statCount = document.getElementById("statCount");

  if (!grid) return;

  grid.innerHTML = PROJECTS.map((project) => {
    const media = createProjectMedia(project);

    const technologies = project.stack
      .map((tech) => `<span class="project-tag">${tech}</span>`)
      .join("");

    const liveButton = project.live
      ? `
        <a
          href="${project.live}"
          target="_blank"
          rel="noopener noreferrer"
          class="project-link project-live-link"
        >
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M14 3h7v7"></path>
            <path d="M10 14L21 3"></path>
            <path d="M21 14v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h6"></path>
          </svg>
          Live Demo
        </a>
      `
      : "";

    return `
      <article class="project-card">
        ${media}
        <div class="project-body">
          <h3 class="project-name">${project.name}</h3>
          <p class="project-tagline">${project.tagline}</p>
          <p class="project-desc">${project.desc}</p>
          <div class="project-tags">${technologies}</div>
          <div class="project-actions">
            <a
              href="${project.github}"
              target="_blank"
              rel="noopener noreferrer"
              class="project-link"
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg>
              View on GitHub
            </a>
            ${liveButton}
          </div>
        </div>
      </article>
    `;
  }).join("");

  if (statCount) {
    statCount.textContent = PROJECTS.length;
  }
}

// ============================================================
// MOBILE NAVIGATION
// ============================================================

function setupNav() {
  const toggle = document.getElementById("navToggle");
  const nav = document.querySelector(".nav");

  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    nav.classList.toggle("open");
  });

  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
    });
  });
}

// ============================================================
// FOOTER YEAR
// ============================================================

function setYear() {
  const yearElement = document.getElementById("year");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}

// ============================================================
// SKILLS
// ============================================================

const SKILLS = [
  { name: "ASP.NET Core MVC", level: 90 },
  { name: "C#", level: 88 },
  { name: "Entity Framework Core", level: 85 },
  { name: "SQL Server", level: 85 },
  { name: "Angular", level: 75 },
  { name: "TypeScript", level: 72 },
  { name: "React", level: 70 },
  { name: "Bootstrap", level: 80 }
];

// ============================================================
// RENDER SKILL BARS
// ============================================================

function renderSkillBars() {
  const container = document.getElementById("skillBars");
  if (!container) return;

  container.innerHTML = SKILLS.map(
    (skill) => `
      <div class="skill-bar-row">
        <div class="skill-bar-label">
          <span>${skill.name}</span>
          <span>${skill.level}%</span>
        </div>
        <div class="skill-bar-track">
          <div class="skill-bar-fill" style="width: ${skill.level}%"></div>
        </div>
      </div>
    `
  ).join("");
}

// ============================================================
// CONTACT FORM
// ============================================================

function setupContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const nameEl = document.getElementById("cfName");
    const emailEl = document.getElementById("cfEmail");
    const subjectEl = document.getElementById("cfSubject");
    const messageEl = document.getElementById("cfMessage");

    const name = nameEl ? nameEl.value.trim() : "";
    const email = emailEl ? emailEl.value.trim() : "";
    const subject = subjectEl ? subjectEl.value.trim() : "";
    const message = messageEl ? messageEl.value.trim() : "";

    const body = `From: ${name} (${email})\n\n${message}`;

    const mailtoURL =
      `mailto:arslanahmedkhoso91@gmail.com` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoURL;
  });
}

// ============================================================
// INITIALIZE WEBSITE
// ============================================================

document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  renderSkillBars();
  setupContactForm();
  setupNav();
  setYear();
});