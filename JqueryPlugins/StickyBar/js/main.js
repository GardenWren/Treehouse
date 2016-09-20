$(".animsition").animsition({
  inClass: 'fade-in-right-lg',
  outClass: 'fade-out-right-lg',
  linkElement: 'header a',
  inDuration: 1000,
  outDuration: 500
});

$('.header').sticky();

$('.header').on('sticky-start', function () {
  $('.description').html('We build <strong>great</strong> apps');
});

$('.header').on('sticky-end', function () {
  $('.description').html('We build apps');
});

$('.workContact').sticky({
	topSpacing: 64
});

$('.workContact').on('sticky-start', function(){
  $(this).append("<a href='mailto:someone@example.com' class='emailLink'> Email Us</a>");
  });

$('.workContact').on('sticky-end', function () {
  $('.emailLink').remove();});