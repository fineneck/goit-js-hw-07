import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');
const cardsMarkup = createImgCardsMarkup(galleryItems);

gallery.insertAdjacentHTML('beforeend', cardsMarkup);
gallery.addEventListener('click', onPictureClick);

function createImgCardsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <a class="gallery__item" href="${original}">
      <img class="gallery__image"
      src="${preview}" 
      alt="${description}" 
      /></a>
      `;
    })
    .join('');
}

function onPictureClick(evt) {
  evt.preventDefault();

  const galleryImage = evt.target.classList.contains('gallery__image');

  if (!galleryImage) {
    return;
  }
}

var lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
