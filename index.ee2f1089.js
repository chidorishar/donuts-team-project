const t={currentButton:document.querySelector('button[data-is-active="true"]'),reviewsControls:document.querySelector(".section-reviews__reviews-controls")};t.reviewsControls.addEventListener("click",(function(e){const r=e.target;if("BUTTON"!=r.nodeName||r===t.currentButton)return;t.currentButton.dataset.isActive="false",t.currentButton=r,t.currentButton.dataset.isActive="true",document.documentElement.style.setProperty("--current-review-number",t.currentButton.dataset.indx)}));
//# sourceMappingURL=index.ee2f1089.js.map
