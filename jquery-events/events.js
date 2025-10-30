$(document).ready(function() {
  console.log("✅ jQuery loaded and ready.");

  // 1️⃣ Hide botanic names and images on load
  $('.botanic').hide();
  $('.imgdiv').hide();

  // 2️⃣ Mouseover and Mouseout events on headings
  $('h1, h2').on('mouseover', function() {
    $(this).css('color', 'darkred');
    console.log('Mouseover: Heading color changed to darkred');
  }).on('mouseout', function() {
    $(this).css('color', '#07a');
    console.log('Mouseout: Heading color reset to #07a');
  });

  // 3️⃣ Click event on flowers
  $('.flower').on('click', function() {
    // Hide all botanic names first
    $('.botanic').hide();

    // Show only the one inside the clicked flower
    $(this).children('.botanic').show();
    
    var flowerName = $(this).text().split('(')[0].trim();
    console.log('Clicked on flower: ' + flowerName);
  });

  // 4️⃣ Hover event for images
  $('.pic').hover(
    function(evt) {
      var imgID = "#" + $(this).attr('title'); // example: "#rosePic"
      var xPos = evt.pageX + 150; // move image to the right
      var yPos = evt.pageY;

      $(imgID).css({
        top: yPos + 'px',
        left: xPos + 'px'
      }).show();
      
      console.log('Hover on: ' + $(this).attr('title') + ' at (' + xPos + ', ' + yPos + ')');
    },
    function(evt) {
      var imgID = "#" + $(this).attr('title');
      $(imgID).hide();
      console.log('Hover off: ' + $(this).attr('title'));
    }
  );

  // 5️⃣ Keypress event to jump to flowers
  $(document).on('keypress', function(evt) {
    var keyPressed = String.fromCharCode(evt.which).toLowerCase();
    console.log("Key pressed:", keyPressed);
    
    // Check if the pressed key is a letter (a-z)
    if (keyPressed >= 'a' && keyPressed <= 'z') {
      window.location = "#" + keyPressed;
    }
  });

  // 6️⃣ Example of stopping default (optional demo)
  // You can have a test link to show this:
  // $('a').on('click', function(e) { e.preventDefault(); alert('Link click prevented!'); });

  // 7️⃣ Example of removing an event (optional)
  // $('h1').off('mouseover');
  
  console.log("=== JQUERY EVENTS LOADED ===");
  console.log("✅ Mouseover/Mouseout events added to headings");
  console.log("✅ Click events added to flower names");
  console.log("✅ Hover events added to image flowers");
  console.log("✅ Keypress events added for navigation");
  console.log("Ready to test the events!");
});