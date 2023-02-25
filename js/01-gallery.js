import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const gallery = document.querySelector('.gallery');
const cardsMarkup = createImgCardsMarkup(galleryItems);

gallery.insertAdjacentHTML('beforeend', cardsMarkup);
gallery.addEventListener('click', onPictureClick);

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
}

function onPictureClick(evt) {
  evt.preventDefault();
  
  const galleryImage = evt.target.classList.contains('gallery__image');

  if (!galleryImage) {
    return;
  };
  // onModal();
};

function onModal(evt) {
  const instance = basicLightbox.create(
    `<img src="${evt.target.dataset.source}"/>`,
    {
      onShow: (instance) => {
        gallery.addEventListener('keydown', onEscBtn);
        once: true;
      },
      onClose: (instance) => {
        gallery.removeEventListener('keydown', onEscBtn);
      },
    },
    instance.show()  
  );
 
  function onEscBtn(evt) {
    if (evt.code === 'Escape') {
    }
    instance.close();    
  }
};


// function onPictureClick(evt) {
//   evt.preventDefault();

//   const galleryImage = evt.target.classList.contains('gallery__image');

//   if (!galleryImage) {
//     return;
//   };

//   const instance = basicLightbox.create(
//     `<img src="${evt.target.dataset.source}"/>`);
//   instance.show();
// };