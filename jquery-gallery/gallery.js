$(document).ready(function() {
    // ===== REQUIREMENT 1: Preload images =====
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
        
        console.log('✅ Images preloaded for better performance');
    }
    
    // Call preload function
    preloadImages();
    
    // ===== REQUIREMENT 2: Create rollover images =====
    $('#thumbs img').hover(
        function() {
            // Mouse enter - add border and shadow
            $(this).css({
                'border': '2px solid #2c5530',
                'box-shadow': '0 4px 8px rgba(44, 85, 48, 0.6)',
                'transform': 'scale(1.05)',
                'transition': 'all 0.3s ease'
            });
            console.log('✅ Rollover effect applied to thumbnail');
        },
        function() {
            // Mouse leave - remove effects (unless active)
            if (!$(this).hasClass('active')) {
                $(this).css({
                    'border': 'none',
                    'box-shadow': 'none', 
                    'transform': 'scale(1)'
                });
            }
        }
    );
    
    // ===== REQUIREMENT 3: Create a photo gallery using jQuery =====
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
        
        console.log('✅ Photo gallery image switched via jQuery');
    });
    
    // ===== REQUIREMENT 4: Select a link with JavaScript =====
    $('.nav-link').click(function(e) {
        // Prevent default link behavior
        e.preventDefault();
        
        // Get the href and text of the clicked link
        const linkHref = $(this).attr('href');
        const linkText = $(this).text();
        
        // Select and highlight the clicked link
        $('.nav-link').removeClass('selected');
        $(this).addClass('selected');
        
        // Show which link was selected
        alert(`JavaScript selected link: "${linkText}" (${linkHref})\n\n✅ Link selected with JavaScript!`);
        
        console.log('✅ Link selected with JavaScript:', linkText, linkHref);
    });
    
    // ===== REQUIREMENT 5: Prevent a page from following a link =====
    $('.nav-link').on('click', function(e) {
        // This prevents the browser from following the link
        e.preventDefault();
        e.stopPropagation();
        
        console.log('✅ Page prevented from following link:', $(this).attr('href'));
        
        // Instead of following the link, we handle it with custom behavior
        const linkText = $(this).text();
        $('#navigation').append(`<p class="link-message">Link "${linkText}" was intercepted and prevented from navigation!</p>`);
        
        // Remove message after 3 seconds
        setTimeout(function() {
            $('.link-message').fadeOut(500, function() { $(this).remove(); });
        }, 3000);
    });
    
    // ===== REQUIREMENT 6: Open a link in another window =====
    // Large image click - opens in new window
    $('#lgPic').click(function(e) {
        e.preventDefault();
        
        const imageSrc = $(this).attr('src');
        const imageAlt = $(this).attr('alt');
        
        // Open image in new window
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
                <p>✅ This image opened in another window!</p>
            </body>
            </html>
        `);
        newWindow.document.close();
        
        console.log('✅ Image opened in another window');
    });
    
    // External link - opens in new window
    $('.external-link').click(function(e) {
        e.preventDefault();
        
        const url = $(this).attr('href');
        window.open(url, '_blank', 'width=800,height=600,scrollbars=yes,resizable=yes');
        
        console.log('✅ External link opened in another window');
        alert('✅ External link opened in another window!');
    });
    
    // ===== REQUIREMENT 7: Open a page within a page =====
    $('#loadPageBtn').click(function() {
        // Create HTML content to load in the iframe
        const iframeContent = `
            <!DOCTYPE html>
            <html>
            <head>
                <style>
                    body { 
                        font-family: Arial, sans-serif; 
                        padding: 20px; 
                        background: linear-gradient(45deg, #f0f8f0, #e6ffe6);
                        color: #2c5530;
                    }
                    h2 { color: #8fbc8f; }
                    .content { 
                        background: white; 
                        padding: 15px; 
                        border-radius: 8px; 
                        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
                    }
                </style>
            </head>
            <body>
                <div class="content">
                    <h2>Page Within a Page!</h2>
                    <p>This content is loaded dynamically within an iframe.</p>
                    <p>✅ This demonstrates "Open a page within a page" functionality!</p>
                    <p>Current time: ${new Date().toLocaleString()}</p>
                    <p>This is a separate HTML document embedded within the main page.</p>
                </div>
            </body>
            </html>
        `;
        
        // Convert content to data URL
        const dataUrl = 'data:text/html;charset=utf-8,' + encodeURIComponent(iframeContent);
        
        // Set iframe source and show the section
        $('#contentFrame').attr('src', dataUrl);
        $('#page-content').slideDown(500);
        
        // Update button text
        $(this).text('Content Loaded!').prop('disabled', true);
        
        console.log('✅ Page content loaded within the main page using iframe');
        
        // Add a close button
        if (!$('#closePageBtn').length) {
            $('<button id="closePageBtn" style="margin-top: 10px;">Close Page Content</button>')
                .insertAfter('#page-content')
                .click(function() {
                    $('#page-content').slideUp(500);
                    $('#loadPageBtn').text('Load Page Content').prop('disabled', false);
                    $(this).remove();
                });
        }
    });
    
    // ===== Additional Features =====
    
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
    
    // Log all requirements completion
    console.log('��� All jQuery Gallery Requirements Implemented:');
    console.log('✅ Create rollover images');
    console.log('✅ Preload images'); 
    console.log('✅ Create a photo gallery using jQuery');
    console.log('✅ Select a link with JavaScript');
    console.log('✅ Prevent a page from following a link');
    console.log('✅ Open a link in another window');
    console.log('✅ Open a page within a page');
});
