$(document).ready(function() {
    console.log('Glossary jQuery Events Ready!');
    
    // ✅ REQUIREMENT: Hide botanic names and image divs when page loads
    $('.botanic').hide();
    $('.imgdiv').hide();
    console.log('Hidden elements:', $('.botanic').length, 'botanic spans and', $('.imgdiv').length, 'image divs');
    
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
    
    // ✅ REQUIREMENT 3: HOVER EVENT FOR IMAGES (ENHANCED WITH DEBUGGING)
    console.log('Found .pic elements:', $('.pic').length);
    
    $('.pic').hover(
        // First function (mouseover)
        function(evt) {
            console.log('--- HOVER START ---');
            
            // Get the title attribute and create the ID
            var title = $(this).attr('title');
            var imageId = '#' + title;
            
            console.log('Flower name:', $(this).text());
            console.log('Title attribute:', title);
            console.log('Looking for element:', imageId);
            
            // Check if the image element exists
            var imageElement = $(imageId);
            console.log('Image element found:', imageElement.length > 0);
            
            if (imageElement.length > 0) {
                // Get X and Y coordinates, add 150 to X
                var xPos = evt.pageX + 150;
                var yPos = evt.pageY;
                
                console.log('Mouse position:', evt.pageX, evt.pageY);
                console.log('Image position will be:', xPos, yPos);
                
                // Set CSS position and show the image
                imageElement.css({
                    'top': yPos + 'px',
                    'left': xPos + 'px',
                    'display': 'block'
                });
                
                console.log('Image should now be visible');
                console.log('Image CSS:', imageElement.attr('style'));
            } else {
                console.error('❌ Image element not found:', imageId);
            }
        },
        // Second function (mouseout)
        function() {
            console.log('--- HOVER END ---');
            
            // Get the title attribute to create the ID
            var title = $(this).attr('title');
            var imageId = '#' + title;
            
            console.log('Hiding image:', imageId);
            
            // Hide the image div
            $(imageId).hide();
        }
    );
    
    // ✅ REQUIREMENT 4: KEYPRESS EVENT
    $(document).keypress(function(evt) {
        var keyPressed = String.fromCharCode(evt.which).toLowerCase();
        
        if (keyPressed >= 'a' && keyPressed <= 'z') {
            window.location = "#" + keyPressed;
            console.log('Jumping to section:', keyPressed);
        }
    });
    
    // 🔍 ADDITIONAL DEBUGGING - Check if images exist
    console.log('=== IMAGE FILE CHECK ===');
    $('#rose img').on('load', function() {
        console.log('✅ rose.jpg loaded successfully');
    }).on('error', function() {
        console.error('❌ rose.jpg failed to load');
    });
    
    $('#mum img').on('load', function() {
        console.log('✅ yellow_pompom_mum.jpg loaded successfully');
    }).on('error', function() {
        console.error('❌ yellow_pompom_mum.jpg failed to load');
    });
    
    $('#coneflower img').on('load', function() {
        console.log('✅ coneflower.jpg loaded successfully');
    }).on('error', function() {
        console.error('❌ coneflower.jpg failed to load');
    });
    
    console.log('✅ All jQuery events initialized successfully!');
});