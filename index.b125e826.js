function t(t){"BUTTON"==t.target.nodeName&&t.currentTarget.classList.toggle("is-flipped")}document.querySelectorAll(".product-cards__card").forEach((e=>e.addEventListener("click",t)));const e=document.querySelectorAll("[data-menu-button]");document.querySelector("[data-menu]");function r(t){const r=t.currentTarget;if("BUTTON"!=r.nodeName)return;const n="true"===r.getAttribute("aria-expanded")||!1;e.forEach((t=>t.setAttribute("aria-expanded",!n))),document.body.classList.toggle("js-is-menu-open")}e.forEach((t=>t.addEventListener("click",r)));const n={currentButton:document.querySelector('button[data-is-active="true"]'),reviewsControls:document.querySelector(".section-reviews__reviews-controls")};n.reviewsControls.addEventListener("click",(function(t){const e=t.target;if("BUTTON"!=e.nodeName||e===n.currentButton)return;n.currentButton.dataset.isActive="false",n.currentButton=e,n.currentButton.dataset.isActive="true",document.documentElement.style.setProperty("--current-review-number",n.currentButton.dataset.indx)}));
//# sourceMappingURL=index.b125e826.js.map
