const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  

  // If we need pagination


  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
pagination: {
  el:'.swiper-pagination',
  clickable: true,
}
  // And if we need scrollbar
});
