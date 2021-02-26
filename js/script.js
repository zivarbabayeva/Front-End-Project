// -- Plugin implementation
(function($) {
     $.fn.countTo = function(options) {
      return this.each(function() {
        //-- Arrange
      var $el = $(this);
      var countTo = parseInt($el.attr('data-count-to'));
      var countSpeed = $el.attr('data-count-speed'); // Number increment per second
  
// -- Action
       var increment;
      var currentCount = countFrom;
       var countAction = function() {              // Self looping local function via requestAnimationFrame
         if(currentCount < countTo) {              // Perform number incremeant
           $el.text(Math.floor(currentCount));     // Update HTML display
           increment = countSpeed / FRAME_RATE;    // Calculate increment step
           currentCount += increment;              // Increment counter
           rafId = requestAnimationFrame(countAction);
        } else {                                  // Terminate animation once it reaches the target count number
          $el.text(countTo);                      // Set to the final value before everything stops
           cancelAnimationFrame(rafId);
         }
       };
       rafId = requestAnimationFrame(countAction); // Initiates the looping function
     });
  };
 }(jQuery));
  
-- Executing
 $('.number-counter').countTo();

