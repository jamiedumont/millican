import PhotoSwipe from 'photoswipe/dist/photoswipe.min.js';
import PhotoSwipeUI_Default from 'photoswipe/dist/photoswipe-ui-default.min.js';

window.initPhotoGallery = function(gallerySelector) {

  function openGallery(index) {

    var pswpElement = document.querySelectorAll('.pswp')[0];
    var images = window.images
    var options = {
     index: index
    }

    var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, images, options);
    gallery.init();

  }

  function thumbnailClick(e) {
    e.preventDefault();

    index = e.target.getAttribute('data-index');
    index = index - 1

    openGallery(index);
  }

  var galleryElements = document.querySelectorAll(gallerySelector);

  galleryElements.forEach(function(e) {
    e.onclick = thumbnailClick
  });

}

