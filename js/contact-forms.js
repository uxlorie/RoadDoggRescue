/* ==========================================================================
   Contact page — Formspree wiring for contact + surrender forms
   ========================================================================== */

(function () {
  "use strict";

  var config = window.FORMSPREE_CONFIG || {};
  var forms = [
    { el: document.getElementById("contact-form"), key: "contact" },
    { el: document.getElementById("surrender-form-form"), key: "surrender" },
  ];

  function getEndpoint(formId) {
    if (!formId) return null;
    return "https://formspree.io/f/" + encodeURIComponent(formId);
  }

  function setStatus(form, type, message) {
    var status = form.querySelector(".form-status");
    if (!status) return;
    status.hidden = false;
    status.className = "form-status form-status--" + type;
    status.textContent = message;
  }

  function clearStatus(form) {
    var status = form.querySelector(".form-status");
    if (!status) return;
    status.hidden = true;
    status.textContent = "";
    status.className = "form-status";
  }

  function bindForm(form, formId) {
    var endpoint = getEndpoint(formId);

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      clearStatus(form);

      if (!endpoint) {
        setStatus(
          form,
          "error",
          "This form is not connected yet. Add your Formspree form ID in js/formspree-config.js."
        );
        return;
      }

      form.setAttribute("action", endpoint);

      var submitBtn = form.querySelector("[type='submit']");
      var originalLabel = submitBtn ? submitBtn.textContent : "";

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = "Sending…";
      }

      fetch(endpoint, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      })
        .then(function (response) {
          if (!response.ok) {
            return response.json().then(function (data) {
              var message = data.error;
              if (data.errors && data.errors.length) {
                message = data.errors.map(function (err) {
                  return err.message;
                }).join(" ");
              }
              throw new Error(message || "Something went wrong. Please try again.");
            });
          }
          form.reset();
          setStatus(
            form,
            "success",
            "Thank you! Your message was sent. We'll get back to you as soon as we can."
          );
        })
        .catch(function (error) {
          setStatus(
            form,
            "error",
            error.message || "Could not send your message. Please try again or email us directly."
          );
        })
        .finally(function () {
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.textContent = originalLabel;
          }
        });
    });
  }

  forms.forEach(function (entry) {
    if (entry.el) {
      bindForm(entry.el, config[entry.key]);
    }
  });
})();
