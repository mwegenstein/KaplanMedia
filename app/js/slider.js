
document.write('<script src=js/vendor/'
  + ('__proto__' in {} ? 'zepto' : 'jquery')
  + '.js><\/script>');

$(document).foundation('orbit', {
  animation: 'fade',
  timer_speed: 3000,
  resume_on_mouseout: true,
  navigation_arrows: false,
  slide_number: false
});
