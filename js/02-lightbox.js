import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryList = document.querySelector(".gallery");
const markupItem = createItemOfGallery(galleryItems);

galleryList.insertAdjacentHTML("beforeend", markupItem);

function createItemOfGallery() {
  return galleryItems
    .map(({ original, preview, description }) => {
      return `
    <li>
        <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
    </li>`;
    })
    .join("");
}

new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  captionsData: "alt",
});

console.log(galleryItems);
