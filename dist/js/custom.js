$(function() {
    const $gallery = $('.gallery a').simpleLightbox();
})

// Animate Smooth Scroll
$('#view-about').on('click', function() {
    const images = $('#about').position().top;

    $('html, body').animate({
        scrollTop: images
    }, 
    900);
});