$(document).ready(function() {
    // Preload all images for better performance
    preloadImages();
    
    // Add hover effects to thumbnail images
    $('.thumbnail').hover(
        // Mouse enter function
        function() {
            $(this).css({
                'border': '2px solid #2c5530',
                'box-shadow': '0 4px 15px rgba(44, 85, 48, 0.3)',
                'transform': 'translateY(-2px)'
            });
        },
        // Mouse leave function
        function() {
            $(this).css({
                'border': '2px solid transparent',
                'box-shadow': 'none',
                'transform': 'translateY(0)'
            });
        }
    );
    
    // Add click event to thumbnail images
    $('.thumbnail').click(function() {
        // Get the source and alt text from the clicked thumbnail
        var newSrc = $(this).attr('src');
        var newAlt = $(this).attr('alt');
        var newTitle = $(this).attr('title');
        
        // Update the main image
        $('#mainImage').attr('src', newSrc);
        $('#mainImage').attr('alt', newAlt);
        
        // Update the caption with the alt text
        $('#imageCaption').text(newAlt);
        
        // Add a fade effect for smoother transition
        $('#mainImage').hide().fadeIn(500);
        $('#imageCaption').hide().fadeIn(700);
        
        // Visual feedback for the clicked thumbnail
        $(this).addClass('selected');
        $('.thumbnail').not(this).removeClass('selected');
        
        // Add temporary highlight effect
        $(this).animate({
            'opacity': 0.7
        }, 100).animate({
            'opacity': 1
        }, 100);
    });
    
    // Add click event to main image to open in new window
    $('#mainImage').click(function() {
        var imageSrc = $(this).attr('src');
        var imageAlt = $(this).attr('alt');
        
        // Open image in new window with specific dimensions
        var newWindow = window.open('', '_blank', 'width=800,height=600,scrollbars=yes,resizable=yes');
        
        // Create HTML content for the new window
        var windowContent = `
            <!DOCTYPE html>
            <html>
            <head>
                <title>Large View - ${imageAlt}</title>
                <style>
                    body { 
                        margin: 0; 
                        padding: 20px; 
                        background-color: #f0f0f0;
                        font-family: Arial, sans-serif;
                        text-align: center;
                    }
                    img { 
                        max-width: 100%; 
                        max-height: 80vh;
                        border: 3px solid #2c5530;
                        border-radius: 10px;
                        box-shadow: 0 4px 20px rgba(0,0,0,0.2);
                    }
                    .caption {
                        margin-top: 15px;
                        font-size: 1.1em;
                        color: #2c5530;
                        font-weight: bold;
                    }
                    .close-btn {
                        position: fixed;
                        top: 10px;
                        right: 10px;
                        background: #2c5530;
                        color: white;
                        border: none;
                        padding: 10px 15px;
                        border-radius: 5px;
                        cursor: pointer;
                        font-size: 14px;
                    }
                    .close-btn:hover {
                        background: #1a3320;
                    }
                </style>
            </head>
            <body>
                <button class="close-btn" onclick="window.close()">✕ Close</button>
                <h2>Large View</h2>
                <img src="${imageSrc}" alt="${imageAlt}">
                <div class="caption">${imageAlt}</div>
            </body>
            </html>
        `;
        
        // Write content to new window
        newWindow.document.write(windowContent);
        newWindow.document.close();
        
        // Focus the new window
        newWindow.focus();
        
        // Add visual feedback to main image
        $(this).animate({
            'transform': 'scale(0.95)'
        }, 100).animate({
            'transform': 'scale(1)'
        }, 100);
    });
    
    // Add keyboard navigation (bonus feature)
    $(document).keydown(function(e) {
        var currentIndex = $('.thumbnail').index($('.thumbnail.selected'));
        var thumbnails = $('.thumbnail');
        
        switch(e.which) {
            case 37: // left arrow
                e.preventDefault();
                if (currentIndex > 0) {
                    thumbnails.eq(currentIndex - 1).click();
                }
                break;
            case 39: // right arrow
                e.preventDefault();
                if (currentIndex < thumbnails.length - 1) {
                    thumbnails.eq(currentIndex + 1).click();
                }
                break;
            case 13: // enter key
                e.preventDefault();
                $('#mainImage').click();
                break;
        }
    });
    
    // Initialize first thumbnail as selected
    $('.thumbnail').first().addClass('selected');
    
    // Function to preload images
    function preloadImages() {
        var images = [];
        $('.thumbnail').each(function() {
            var img = new Image();
            img.src = $(this).attr('src');
            images.push(img);
        });
        
        console.log('Preloaded ' + images.length + ' images for gallery');
    }
    
    // Add loading animation
    $('#mainImage').on('load', function() {
        $(this).css('opacity', '0').animate({'opacity': '1'}, 300);
    });
    
    // Error handling for images that fail to load
    $('img').on('error', function() {
        console.error('Failed to load image:', $(this).attr('src'));
        $(this).attr('src', 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtc2l6ZT0iMTgiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5JbWFnZSBub3QgZm91bmQ8L3RleHQ+PC9zdmc+');
        $(this).attr('alt', 'Image not found');
    });
    
    // Console log for debugging
    console.log('jQuery Gallery initialized successfully!');
    console.log('Total thumbnails:', $('.thumbnail').length);
    console.log('Main image source:', $('#mainImage').attr('src'));
});

// Additional utility functions outside document.ready

// Function to highlight selected thumbnail (bonus feature)
function highlightSelected() {
    $('.thumbnail.selected').css({
        'border': '3px solid #ff6b35',
        'box-shadow': '0 6px 20px rgba(255, 107, 53, 0.4)'
    });
}