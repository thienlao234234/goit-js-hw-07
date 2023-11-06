import { galleryItems } from "./gallery-items.js";

const container = document.querySelector(" .gallery");

function createMarcup(arr) {
  return arr
    .map(
      ({ preview, original, description }) =>
        `<li class ="gallery__item">
     <a class="gallery__link" href="${original}">
     <img class="gallery__image"
      src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
      </a>
   </li>`
    )
    .join("");
}
container.insertAdjacentHTML("beforeend", createMarcup(galleryItems));

container.addEventListener("click", handlerClicker);

function handlerClicker(evt) {
  evt.preventDefault();
  if (evt.target === evt.currentTarget) {
    return;
  }
  console.log(evt.target.dataset.source);

  const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}">
`);
  instance.show();
}

console.log(basicLightbox);