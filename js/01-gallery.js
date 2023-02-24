import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);


const gallery = document.querySelector('.gallery');
const cardsMarkup = createImgCardsMarkup(galleryItems);

gallery.insertAdjacentHTML('beforeend', cardsMarkup);
gallery.addEventListener('click', increasePictureClick);

function createImgCardsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
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
    .join('');
};

function increasePictureClick(evt) {
  evt.preventDefault();

  if (!evt.target.classList.contains('gallery__image')) {
    return evt.target.dataset.source;
  }

  
  console.log(evt.target.dataset.source);
};