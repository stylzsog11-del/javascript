$(document).ready(function() {
    console.log('Glossary jQuery Events Ready!');
    
    // ✅ REQUIREMENT: Hide botanic names and image divs when page loads
    $('.botanic').hide();
    $('.imgdiv').hide();
    
    // ✅ REQUIREMENT 1: MOUSEOVER AND MOUSEOUT EVENTS
    $('h1, h2').mouseover(function() {
        $(this).css('color', '#ff6600');
        console.log('Mouseover on heading:', $(this).text());
    });
    
    $('h1, h2').mouseout(function() {
        $(this).css('color', '');
        console.log('Mouseout on heading:', $(this).text());
    });
    
    // ✅ REQUIREMENT 2: CLICK EVENTS
    $('.flower').click(function() {
        $('.botanic').hide();
        $(this).children('.botanic').show();
        console.log('Clicked flower:', $(this).text().split(':')[0]);
    });
    
    // ✅ REQUIREMENT 3: HOVER EVENT FOR IMAGES
    $('.pic').hover(
        // First function (mouseover)
        function(evt) {
            // Get the title attribute and create the ID
            var imageId = '#' + $(this).attr('title');
            
            // Get X and Y coordinates, add 150 to X
            var xPos = evt.pageX + 150;
            var yPos = evt.pageY;
            
            // Set CSS position and show the image
            $(imageId).css({
                'top': yPos + 'px',
                'left': xPos + 'px'
            }).show();
            
            console.log('Showing image:', imageId, 'at', xPos, yPos);
        },
        // Second function (mouseout)
        function() {
            // Get the title attribute to create the ID
            var imageId = '#' + $(this).attr('title');
            
            // Hide the image div
            $(imageId).hide();
            
            console.log('Hiding image:', imageId);
        }
    );
    
    // ✅ REQUIREMENT 4: KEYPRESS EVENT
    $(document).keypress(function(evt) {
        // Get the key and convert to lowercase
        var keyPressed = String.fromCharCode(evt.which).toLowerCase();
        
        // Check if it's a letter
        if (keyPressed >= 'a' && keyPressed <= 'z') {
            // Jump to that location
            window.location = "#" + keyPressed;
            console.log('Jumping to section:', keyPressed);
        }
    });
    
    console.log('✅ All jQuery events initialized successfully!');
});