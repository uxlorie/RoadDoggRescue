/* ==========================================================================
   Road Dogg Rescue - Shared Scripts
   --------------------------------------------------------------------------
   Small, dependency-free helpers used on every page:
   1. Mobile navigation toggle (hamburger menu)
   2. Auto-update the footer copyright year
   3. Vercel Web Analytics script
   ========================================================================== */

(function () {
  "use strict";

  /* ---- 1. Mobile menu toggle -------------------------------------------- */
  var toggle = document.querySelector(".nav__toggle");
  var links = document.getElementById("nav-links");

  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var isOpen = links.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    // Close the menu when a link inside it is clicked (mobile).
    links.addEventListener("click", function (event) {
      if (event.target.tagName === "A") {
        links.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ---- 2. Current year in footer ---------------------------------------- */
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  /* ---- 3. Vercel Web Analytics ------------------------------------------ */
  window.va =
    window.va ||
    function () {
      (window.vaq = window.vaq || []).push(arguments);
    };
  var analytics = document.createElement("script");
  analytics.defer = true;
  analytics.src = "/_vercel/insights/script.js";
  document.head.appendChild(analytics);
})();
