$(document).ready(function() {
    console.log('Glossary jQuery Events Ready!');
    
    // ✅ INITIAL SETUP: Hide botanic names and image divs when page loads
    $('.botanic').hide();
    $('.imgdiv').hide();
    
    // ✅ REQUIREMENT 1: MOUSEOVER AND MOUSEOUT EVENTS
    // Mouseover event to change h1 and h2 color
    $('h1, h2').mouseover(function() {
        $(this).css('color', '#ff6600'); // Change to orange
        console.log('Mouseover: Heading color changed to orange');
    });
    
    // Mouseout event to change h1 and h2 color back
    $('h1, h2').mouseout(function() {
        $(this).css('color', ''); // Reset to original color
        console.log('Mouseout: Heading color reset');
    });
    
    // ✅ REQUIREMENT 2: CLICK EVENTS
    // Click event on flower names to show/hide botanic names
    $('.flower').click(function() {
        // First hide all botanic names
        $('.botanic').hide();
        
        // Then show the botanic name for the clicked flower only
        $(this).children('.botanic').show();
        
        // Get the flower name for logging
        var flowerName = $(this).text().split(':')[0];
        console.log('Clicked on flower: ' + flowerName);
    });
    
    // ✅ REQUIREMENT 3: HOVER EVENT for images
    // Hover event for flowers with images (.pic class)
    $('.pic').hover(
        // Mouseover function
        function(evt) {
            // Get the title attribute to identify which image to show
            var imageId = '#' + $(this).attr('title');
            
            // Get cursor coordinates and adjust position
            var xPos = evt.pageX + 150; // Add 150 to move right
            var yPos = evt.pageY;
            
            // Position and show the image
            $(imageId).css({
                'top': yPos + 'px',
                'left': xPos + 'px'
            }).show();
            
            console.log('Hover on: ' + $(this).attr('title') + ' at (' + xPos + ', ' + yPos + ')');
        },
        // Mouseout function
        function() {
            // Get the title attribute to identify which image to hide
            var imageId = '#' + $(this).attr('title');
            
            // Hide the image
            $(imageId).hide();
            
            console.log('Hover off: ' + $(this).attr('title'));
        }
    );
    
    // ✅ REQUIREMENT 4: KEYPRESS EVENT for navigation
    // Keypress event to jump to letters
    $(document).keypress(function(evt) {
        // Get the key pressed and convert to lowercase
        var keyPressed = String.fromCharCode(evt.which).toLowerCase();
        
        // Check if the pressed key is a letter (a-z)
        if (keyPressed >= 'a' && keyPressed <= 'z') {
            // Jump to the section with that letter
            window.location = "#" + keyPressed;
            
            console.log('Key pressed: ' + keyPressed + ' - Jumping to section #' + keyPressed);
            
            // Optional: Highlight the target section briefly
            var targetElement = $('#' + keyPressed);
            if (targetElement.length > 0) {
                targetElement.css('background-color', '#ffff99')
                           .delay(1000)
                           .queue(function() {
                               $(this).css('background-color', '').dequeue();
                           });
            }
        }
    });
    
    // ✅ ADDITIONAL ENHANCEMENTS
    
    // Add smooth scrolling for better UX
    $('html').css('scroll-behavior', 'smooth');
    
    // Add visual feedback for clickable flowers
    $('.flower').hover(
        function() {
            $(this).css('background-color', '#e6f3ff');
        },
        function() {
            $(this).css('background-color', '');
        }
    );
    
    // Add keyboard shortcut instructions
    $('body').prepend('<div id="instructions" style="background-color: #fffacd; padding: 10px; margin-bottom: 20px; border-radius: 5px; font-size: 14px;"><strong>Instructions:</strong> Click flower names to see botanical names | Hover over underlined flowers to see images | Press any letter key (a-z) to jump to that section</div>');
    
    // Console summary
    console.log('=== JQUERY EVENTS SUMMARY ===');
    console.log('✅ Mouseover/Mouseout events added to headings');
    console.log('✅ Click events added to flower names');
    console.log('✅ Hover events added to image flowers');
    console.log('✅ Keypress events added for navigation');
    console.log('✅ All botanic names and images initially hidden');
    console.log('Ready to interact with the glossary!');
});