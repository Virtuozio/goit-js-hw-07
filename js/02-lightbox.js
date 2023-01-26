import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");
const markup = galleryItems
  .map(({ original, preview, description }) => {
    return `
      <a class="gallery__link" href="${original}">
        <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
      title="${description}"
        />
</a>
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

  let gallery = new SimpleLightbox(".gallery a", { captionDelay: 250 });
  gallery.on("show.simplelightbox", function () {});

  gallery.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      gallery.on("close.simplelightbox", function () {});
    }
  });
}
