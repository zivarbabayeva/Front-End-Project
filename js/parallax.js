transform_number($('.counter'), 200,'fixed_width');
transform_number($('.counter'), 200,'flex');
$('.Count').each(function () {
    jQuery({ Counter: 0 }).animate({ Counter: $(this).text() }, {
      duration: 1000,
      easing: 'swing',
      step: function () {
        $(this).text(Math.ceil(this.Counter));
      }
    });
  });

  $('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
}); 
(function($) {
    $.fn.countTo = function(options) {
      return this.each(function() {