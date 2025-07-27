// Element toggle function
const elementToggleFunc = function (elem) {
  elem.classList.toggle("active");
};

// Sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// Sidebar toggle functionality for mobile
if (sidebarBtn) {
  sidebarBtn.addEventListener("click", function () {
    elementToggleFunc(sidebar);
  });
}

// Page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// Add event to all nav links
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    for (let j = 0; j < pages.length; j++) {
      if (this.innerHTML.toLowerCase() === pages[j].dataset.page) {
        pages[j].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[j].classList.remove("active");
        navigationLinks[j].classList.remove("active");
      }
    }
  });
}

// Contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// Function to check form validity
const checkFormValidity = function () {
  if (form && formBtn) {
    let allFieldsFilled = true;

    formInputs.forEach((input) => {
      if (!input.value.trim()) {
        allFieldsFilled = false;
      }
    });

    if (allFieldsFilled && form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  }
};

// Add event to all form input fields
if (form && formInputs.length > 0 && formBtn) {
  for (let i = 0; i < formInputs.length; i++) {
    formInputs[i].addEventListener("input", checkFormValidity);
    formInputs[i].addEventListener("blur", checkFormValidity);
  }

  // Handle form submission
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for your message! I'll get back to you soon.");
    form.reset();
    formBtn.setAttribute("disabled", "");
  });

  // Initial check
  checkFormValidity();
}

// Project links functionality
const projectLinks = document.querySelectorAll(".project-link");
for (let i = 0; i < projectLinks.length; i++) {
  projectLinks[i].addEventListener("click", function (e) {
    e.preventDefault();
    const projectTitle = this.querySelector(".project-title").textContent;
    alert(
      `Project: ${projectTitle}\nThis would open the project details page.`
    );
  });
}

// Project carousel functionality
class ProjectCarousel {
  constructor() {
    this.projectList = document.querySelector(".project-list");
    this.projectItems = document.querySelectorAll(".project-item");
    this.prevBtn = null;
    this.nextBtn = null;
    this.indicators = null;

    this.currentPage = 0;
    this.itemsPerPage = 2;
    this.totalPages = 0;

    if (this.projectItems.length > 0) {
      this.init();
    }
  }

  init() {
    this.calculatePages();
    this.createNavigation();
    this.createIndicators();
    this.showCurrentPage();
    this.bindEvents();
  }

  calculatePages() {
    this.totalPages = Math.ceil(this.projectItems.length / this.itemsPerPage);
  }

  createNavigation() {
    // Create carousel navigation container
    const navContainer = document.createElement("div");
    navContainer.className = "carousel-nav";

    // Create previous button
    this.prevBtn = document.createElement("button");
    this.prevBtn.className = "carousel-btn carousel-prev";
    this.prevBtn.innerHTML =
      '<ion-icon name="chevron-back-outline"></ion-icon>';
    this.prevBtn.setAttribute("aria-label", "Previous projects");

    // Create next button
    this.nextBtn = document.createElement("button");
    this.nextBtn.className = "carousel-btn carousel-next";
    this.nextBtn.innerHTML =
      '<ion-icon name="chevron-forward-outline"></ion-icon>';
    this.nextBtn.setAttribute("aria-label", "Next projects");

    navContainer.appendChild(this.prevBtn);
    navContainer.appendChild(this.nextBtn);

    // Insert navigation after project list
    this.projectList.parentNode.insertBefore(
      navContainer,
      this.projectList.nextSibling
    );
  }

  createIndicators() {
    if (this.totalPages <= 1) return;

    const indicatorContainer = document.createElement("div");
    indicatorContainer.className = "carousel-indicators";

    for (let i = 0; i < this.totalPages; i++) {
      const dot = document.createElement("button");
      dot.className = "carousel-dot";
      dot.setAttribute("aria-label", `Go to page ${i + 1}`);
      dot.addEventListener("click", () => this.goToPage(i));
      indicatorContainer.appendChild(dot);
    }

    this.indicators = indicatorContainer.querySelectorAll(".carousel-dot");

    // Insert indicators after navigation
    const navContainer = document.querySelector(".carousel-nav");
    navContainer.parentNode.insertBefore(
      indicatorContainer,
      navContainer.nextSibling
    );
  }

  bindEvents() {
    this.prevBtn.addEventListener("click", () => this.previousPage());
    this.nextBtn.addEventListener("click", () => this.nextPage());

    // Keyboard navigation
    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") this.previousPage();
      if (e.key === "ArrowRight") this.nextPage();
    });
  }

  showCurrentPage() {
    // Hide all items first
    this.projectItems.forEach((item) => {
      item.style.display = "none";
    });

    // Show items for current page
    const startIndex = this.currentPage * this.itemsPerPage;
    const endIndex = Math.min(
      startIndex + this.itemsPerPage,
      this.projectItems.length
    );

    for (let i = startIndex; i < endIndex; i++) {
      if (this.projectItems[i]) {
        this.projectItems[i].style.display = "block";
        this.projectItems[i].classList.add("active");
      }
    }

    // Update navigation buttons
    this.updateNavigation();

    // Update indicators
    this.updateIndicators();
  }

  updateNavigation() {
    if (this.prevBtn && this.nextBtn) {
      this.prevBtn.disabled = this.currentPage === 0;
      this.nextBtn.disabled = this.currentPage === this.totalPages - 1;
    }
  }

  updateIndicators() {
    if (this.indicators) {
      this.indicators.forEach((dot, index) => {
        dot.classList.toggle("active", index === this.currentPage);
      });
    }
  }

  previousPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.showCurrentPage();
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages - 1) {
      this.currentPage++;
      this.showCurrentPage();
    }
  }

  goToPage(pageIndex) {
    if (pageIndex >= 0 && pageIndex < this.totalPages) {
      this.currentPage = pageIndex;
      this.showCurrentPage();
    }
  }
}

// Initialize carousel when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  // Small delay to ensure all elements are rendered
  setTimeout(() => {
    new ProjectCarousel();
  }, 100);
});
