import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector("div.gallery");
const markup = galleryItems
  .map(({ original, preview, description }) => {
    return `
      <div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
        />
</a>
</div>
    `;
  })
  .join("");
gallery.innerHTML = markup;

gallery.addEventListener("click", modalImg);
function modalImg(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }

  const bigImg = basicLightbox.create(`
     <img src="${event.target.dataset.source}" width="800" height="600">
  `);
  bigImg.show();

  gallery.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      bigImg.close();
    }
  });
}
