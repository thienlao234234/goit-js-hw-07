import { galleryItems } from "./gallery-items.js";

const container = document.querySelector(".gallery");
const linl = document.querySelector(".gallery__link");

function createMarcup(arr) {
  return arr
    .map(
      ({ preview, original, description }) =>
        `<li class ="gallery__item">
            <a class="gallery__link" href="${original}">
                 <img class="gallery__image" src="${preview}"
                        alt="${description}"/>
            </a>
        </li>`
    )
    .join("");
}

container.insertAdjacentHTML("beforeend", createMarcup(galleryItems));

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});