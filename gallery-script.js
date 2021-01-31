import images from './gallery-items.js';

const galleryRef = document.querySelector('.gallery');
const lightboxRef = document.querySelector('.lightbox');
const lightboxImageRef = document.querySelector('.lightbox__image');
const overlayRef = document.querySelector('.lightbox__overlay');
const refs = {
    gallery: document.querySelector('.js-gallery'),
};

function createGalleryItem(slide) {
    const galleryItem = document.createElement('li');
    galleryItem.classList.add('gallery__item');

    const galleryLink = document.createElement('a');
    galleryLink.classList.add('gallery__link');

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

refs.gallery.addEventListener('click', onImageClick)

function onImageClick(event) {
    // console.log(event.target);
    // console.log(event.target.nodeName); 

    if (event.target.nodeName !== 'IMG') {
        return;
    };

    onOpenLightbox();
}; 


function onOpenLightbox() {
    window.addEventListener('keydown', onPressEscape);
    lightboxRef.classList.add('is-open');

    lightboxImageRef.src = event.target.dataset.source;
};

function onCloseLightbox() {
    window.removeEventListener('keydown', onPressEscape);
    lightboxRef.classList.remove('is-open');
};

const closeLightboxBtn = document.querySelector('button[data-action="close-lightbox"]');
closeLightboxBtn.addEventListener('click', () => {
    onCloseLightbox();
    lightboxImageRef.src = '';
});

overlayRef.addEventListener('click', event => {
    onCloseLightbox();
});

function onPressEscape(event) {
    if (event.code === 'Escape') {
        onCloseLightbox();
    }
};