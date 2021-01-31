import images from './gallery-items.js';

const galleryRef = document.querySelector('.gallery');
// const galleryItemRef = document.querySelector('.gallery__item');
// const galleryLinkRef = document.querySelector('.gallery__link');
// const galleryImageRef = document.querySelector('.gallery__image');

function createGalleryItem(slide) {
    const galleryItem = document.createElement('li');
    galleryItem.classList.add('gallery__item');

    const galleryLink = document.createElement('a');
    galleryLink.classList.add('gallery__link');
    galleryLink.href = slide.original;

    const galleryImage = document.createElement('img');
    galleryImage.classList.add('gallery__image');
    galleryImage.src = slide.preview;
    galleryImage.alt = slide.description;
    galleryImage.dataset.source = slide.original;
    galleryImage.dataset.index = images.indexOf(slide);

    galleryLink.appendChild(galleryImage);
    galleryItem.appendChild(galleryLink);

    return galleryItem;
};

const createImageList = images.map(image => createGalleryItem(image));
galleryRef.append(...createImageList);


const refs = {
    gallery: document.querySelector('.js-gallery'),
};

refs.gallery.addEventListener('click', onImageClick)

function onImageClick(event) {
    console.log('event.target');
}