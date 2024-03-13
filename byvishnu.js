$(document).ready(function() {
    // Function to update the current time
    function updateCurrentTime() {
      var currentTime = new Date();
      var hours = currentTime.getHours();
      var minutes = currentTime.getMinutes();
      var seconds = currentTime.getSeconds();

      // Convert hours to 12-hour format and determine AM/PM
      var ampm = hours >= 12 ? 'AM' : 'PM';
      hours = hours % 12;
      hours = hours ? hours : 12; // Handle midnight (0 hours)

      // Add leading zeros if needed
      hours = (hours < 10) ? "0" + hours : hours;
      minutes = (minutes < 10) ? "0" + minutes : minutes;
      seconds = (seconds < 10) ? "0" + seconds : seconds;

      // Display the current time in the specified format
      var formattedTime = hours + ":" + minutes + ":" + seconds + "  " + ampm;
      $("#currentTime").text(formattedTime);
    }

    // Update the current time initially
    updateCurrentTime();

    // Update the current time every second (1000 milliseconds)
    setInterval(updateCurrentTime, 1000);





    // day night toggle

    $('#day_night').click(function(){
      var bodyClasses = $('body').attr('class');
      
  
      // Toggle between classes
      if (bodyClasses === 'bg-black text-white') {
          $('body').removeClass('bg-black text-white').addClass('bg-white text-black');
      } else {
          $('body').removeClass('bg-white text-black').addClass('bg-black text-white');
      }
  });
  

    // for curser
    // document.body.onmousemove = function(e) {
    //   document.documentElement.style.setProperty (
    //     '--x', (
    //       e.clientX+window.scrollX
    //     )
    //     + 'px'
    //   );
    //   document.documentElement.style.setProperty (
    //     '--y', (
    //       e.clientY+window.scrollY
    //     ) 
    //     + 'px'
    //   );
    // }

    $(document).ready(function() {
      $(document).on('mousemove', function(e) {
        $('#circularcursor').css({
          left: e.pageX,
          top: e.pageY
        });
      })
    });

   
  });