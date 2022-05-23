import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");

const markupItem = createItemOfGallery(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", markupItem);

galleryContainer.addEventListener("click", onSelectImage);

function createItemOfGallery() {
  return galleryItems
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
</div>`;
    })
    .join("");
}

function onSelectImage(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  const galleryModal = basicLightbox.create(
    `<img class="gallery__modal" src="${event.target.dataset.source}">`
  );

  // galleryModal.show(() => {
  //   galleryContainer.addEventListener("keydown", (event) => {
  //     if (event.code === "Escape") {
  //       galleryModal.close();
  //     }
  //   });
  // });

  galleryModal.show(() => {
    galleryContainer.addEventListener("keydown", openModalEscape);
  });

  function openModalEscape(event) {
    if (event.code === "Escape") {
      galleryModal.close(() => {
        galleryContainer.removeEventListener("keydown", openModalEscape);
      });
    }
  }
}

console.log(galleryItems);
