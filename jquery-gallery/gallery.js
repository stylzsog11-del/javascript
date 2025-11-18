$(document).ready(function() {
    // Preload images for better performance
    function preloadImages() {
        const imageUrls = [
            'jquery-gallery/yellow_pompom_mum.jpg',
            'jquery-gallery/purple_single_mum.jpg', 
            'jquery-gallery/white_double_mum.jpg',
            'jquery-gallery/pink_single_mum.jpg',
            'jquery-gallery/sunburst_daisy_mum.jpg',
            'jquery-gallery/magenta_daisy_mum.jpg'
        ];
        
        imageUrls.forEach(function(url) {
            const img = new Image();
            img.src = url;
        });
    }
    
    // Call preload function
    preloadImages();
    
    // Add hover effect to thumbnail images
    $('#thumbs img').hover(
        function() {
            // Mouse enter - add border and shadow
            $(this).css({
                'border': '2px solid #2c5530',
                'box-shadow': '0 4px 8px rgba(44, 85, 48, 0.6)',
                'transform': 'scale(1.05)'
            });
        },
        function() {
            // Mouse leave - remove effects
            $(this).css({
                'border': 'none',
                'box-shadow': 'none', 
                'transform': 'scale(1)'
            });
        }
    );
    
    // Add click event to thumbnail images
    $('#thumbs img').click(function(e) {
        // Prevent default link behavior
        e.preventDefault();
        
        // Get the source and alt text from clicked thumbnail
        const newSrc = $(this).attr('src');
        const newAlt = $(this).attr('alt');
        
        // Update the large image
        $('#lgPic').attr('src', newSrc);
        $('#lgPic').attr('alt', newAlt);
        
        // Update the caption text
        $('#lgTitle').text(newAlt);
        
        // Add active class to clicked thumbnail and remove from others
        $('#thumbs img').removeClass('active');
        $(this).addClass('active');
        
        // Add fade effect for smooth transition
        $('#lgPic').fadeOut(200, function() {
            $(this).fadeIn(300);
        });
    });
    
    // Add click event to large image to open in new window
    $('#lgPic').click(function(e) {
        e.preventDefault();
        
        // Get the source of the large image
        const imageSrc = $(this).attr('src');
        const imageAlt = $(this).attr('alt');
        
        // Open image in new window
        // Calculate window size based on image (approximate)
        const windowWidth = 800;
        const windowHeight = 600;
        const left = (screen.width - windowWidth) / 2;
        const top = (screen.height - windowHeight) / 2;
        
        const newWindow = window.open(
            '',
            'ImageViewer',
            `width=${windowWidth},height=${windowHeight},left=${left},top=${top},scrollbars=yes,resizable=yes`
        );
        
        // Write HTML content to new window
        newWindow.document.write(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>${imageAlt}</title>
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
                        height: auto; 
                        border-radius: 8px;
                        box-shadow: 0 4px 20px rgba(0,0,0,0.3);
                    }
                    h1 {
                        color: #2c5530;
                        margin-bottom: 20px;
                    }
                    .close-btn {
                        margin-top: 20px;
                        padding: 10px 20px;
                        background-color: #2c5530;
                        color: white;
                        border: none;
                        border-radius: 5px;
                        cursor: pointer;
                        font-size: 16px;
                    }
                    .close-btn:hover {
                        background-color: #1a3d1f;
                    }
                </style>
            </head>
            <body>
                <h1>${imageAlt}</h1>
                <img src="${imageSrc}" alt="${imageAlt}">
                <br>
                <button class="close-btn" onclick="window.close()">Close Window</button>
            </body>
            </html>
        `);
        newWindow.document.close();
    });
    
    // Set first thumbnail as active by default
    $('#thumbs img:first').addClass('active');
    
    // Add visual feedback when hovering over large image
    $('#lgPic').hover(
        function() {
            $(this).css({
                'cursor': 'pointer',
                'opacity': '0.9',
                'transform': 'scale(1.02)'
            });
        },
        function() {
            $(this).css({
                'opacity': '1',
                'transform': 'scale(1)'
            });
        }
    );
    
    // Add keyboard navigation
    $(document).keydown(function(e) {
        const currentActive = $('#thumbs img.active');
        let nextImage;
        
        switch(e.which) {
            case 37: // Left arrow
                nextImage = currentActive.prev();
                if (nextImage.length === 0) {
                    nextImage = $('#thumbs img:last');
                }
                nextImage.click();
                break;
            case 39: // Right arrow  
                nextImage = currentActive.next();
                if (nextImage.length === 0) {
                    nextImage = $('#thumbs img:first');
                }
                nextImage.click();
                break;
            case 13: // Enter key - open large image in new window
                $('#lgPic').click();
                break;
        }
    });
    
    // Add loading animation
    $('#lgPic').on('load', function() {
        $(this).css('opacity', '0').animate({opacity: 1}, 300);
    });
});