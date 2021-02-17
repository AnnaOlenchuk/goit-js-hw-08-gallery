const galleryRef = document.querySelector('.gallery');
const lightboxRef = document.querySelector('.lightbox');
const lightboxImageRef = document.querySelector('.lightbox__image');
const overlayRef = document.querySelector('.lightbox__overlay');
const refs = {
    gallery: document.querySelector('.js-gallery'),
};

refs.gallery.addEventListener('click', onImageClick)

function onImageClick(event) {

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