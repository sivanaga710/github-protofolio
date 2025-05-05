const ham = document.querySelector("#ham");
const menu = document.querySelector("#menu");
const navLinks = document.querySelectorAll("#menu li"); // Select li elements

ham.addEventListener("click", () => {
  menu.classList.toggle("active");
});

navLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    const a = link.querySelector("a"); // Get the anchor tag inside the li

    // Check if the clicked li contains the resume link
    if (a.getAttribute("href") === "resume/RESUME.pdf") {
      // It's the resume link, do nothing special and let the browser handle it
      if (menu.classList.contains("active")) {
          menu.classList.remove("active");
      }
      return; // Exit the event handler, allowing the default behavior
    }

    // For other links, handle section switching and menu closing
    if (menu.classList.contains("active")) {
      menu.classList.remove("active");
    }

    const sectionId = a.dataset.section; // Get data-section from anchor

    if (sectionId) {
      e.preventDefault();
      const sections = document.querySelectorAll('.section');
      sections.forEach(section => {
        section.classList.remove('active');
      });
      document.getElementById(sectionId).classList.add('active');

      // Update active link color
      navLinks.forEach(navLink => {
          navLink.querySelector("a").classList.remove('active');
      });
      a.classList.add('active'); // Add active class to clicked anchor
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('home').classList.add('active');
    navLinks.forEach(navLink => {
        const a = navLink.querySelector("a");
        if (a.dataset.section === "home") {
            a.classList.add('active');
        }
});
});