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
    $('#mainImage').click(function(e) {
        e.preventDefault(); // Prevent any default behavior
        
        var imageSrc = $(this).attr('src');
        var imageAlt = $(this).attr('alt');
        
        console.log('Opening image in new window:', imageSrc); // Debug log
        
        // Add immediate visual feedback
        $(this).css({
            'transform': 'scale(0.95)',
            'opacity': '0.8'
        });
        
        setTimeout(() => {
            $(this).css({
                'transform': 'scale(1)',
                'opacity': '1'
            });
        }, 150);
        
        // Open image in new window with specific dimensions
        var newWindow = window.open('', '_blank', 'width=900,height=700,scrollbars=yes,resizable=yes,menubar=no,toolbar=no');
        
        // Check if popup was blocked
        if (!newWindow || newWindow.closed || typeof newWindow.closed == 'undefined') {
            alert('Popup blocked! Please allow popups for this site and try again.');
            return;
        }
        
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
                        background: linear-gradient(135deg, #f0f0f0 0%, #e6e6e6 100%);
                        font-family: Arial, sans-serif;
                        text-align: center;
                        min-height: 100vh;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                    }
                    img { 
                        max-width: 90%; 
                        max-height: 70vh;
                        border: 4px solid #2c5530;
                        border-radius: 15px;
                        box-shadow: 0 8px 30px rgba(0,0,0,0.3);
                        transition: transform 0.3s ease;
                    }
                    img:hover {
                        transform: scale(1.02);
                    }
                    .caption {
                        margin-top: 20px;
                        font-size: 1.3em;
                        color: #2c5530;
                        font-weight: bold;
                        text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
                        max-width: 80%;
                    }
                    .close-btn {
                        position: fixed;
                        top: 15px;
                        right: 15px;
                        background: #2c5530;
                        color: white;
                        border: none;
                        padding: 12px 18px;
                        border-radius: 8px;
                        cursor: pointer;
                        font-size: 16px;
                        font-weight: bold;
                        box-shadow: 0 4px 10px rgba(0,0,0,0.2);
                        transition: all 0.3s ease;
                        z-index: 1000;
                    }
                    .close-btn:hover {
                        background: #1a3320;
                        transform: translateY(-2px);
                        box-shadow: 0 6px 15px rgba(0,0,0,0.3);
                    }
                    .title {
                        color: #2c5530;
                        font-size: 1.8em;
                        margin-bottom: 20px;
                        text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
                    }
                    .loading {
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        font-size: 1.2em;
                        color: #666;
                    }
                </style>
                <script>
                    // Add keyboard support
                    document.addEventListener('keydown', function(e) {
                        if (e.key === 'Escape') {
                            window.close();
                        }
                    });
                    
                    // Show loading message while image loads
                    window.onload = function() {
                        document.getElementById('loading').style.display = 'none';
                        document.getElementById('content').style.display = 'flex';
                    };
                </script>
            </head>
            <body>
                <div id="loading" class="loading">Loading image...</div>
                <div id="content" style="display: none; flex-direction: column; align-items: center;">
                    <button class="close-btn" onclick="window.close()" title="Close (ESC)">✕ Close</button>
                    <h1 class="title">Large View</h1>
                    <img src="${imageSrc}" alt="${imageAlt}" onload="this.style.opacity='1'" style="opacity:0; transition: opacity 0.5s;">
                    <div class="caption">${imageAlt}</div>
                    <p style="margin-top: 15px; color: #888; font-size: 0.9em;">Press ESC to close</p>
                </div>
            </body>
            </html>
        `;
        
        // Write content to new window
        newWindow.document.write(windowContent);
        newWindow.document.close();
        
        // Focus the new window
        newWindow.focus();
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