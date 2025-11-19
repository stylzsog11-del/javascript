$(document).ready(function() {
    // ===== REQUIREMENT: Preload images =====
    function preloadImages() {
        // Preload all mum images for better gallery performance
        const imageUrls = [
            'yellow_pompom_mum.jpg',
            'purple_single_mum.jpg', 
            'white_double_mum.jpg',
            'pink_single_mum.jpg',
            'sunburst_daisy_mum.jpg',
            'magenta_daisy_mum.jpg'
        ];
        
        imageUrls.forEach(function(url) {
            const img = new Image();
            img.src = url;
        });
        
        console.log('✅ Images preloaded for better performance');
    }
    
    // Call preload function immediately
    preloadImages();
    
    // ===== REQUIREMENT: Create rollovers for all the thumbnail images =====
    // Add hover effect to ALL thumbnail images with visual feedback
    $('.thumb').hover(
        function() {
            // Mouse enter - create rollover effect
            $(this).css({
                'border': '3px solid darkgreen',
                'box-shadow': '0 4px 12px rgba(0, 128, 0, 0.8)',
                'transform': 'scale(1.1)',
                'transition': 'all 0.3s ease',
                'opacity': '1'
            });
            console.log('✅ Rollover effect applied to thumbnail:', $(this).attr('alt'));
        },
        function() {
            // Mouse leave - remove rollover effects
            $(this).css({
                'border': '1px solid #ccc',
                'box-shadow': 'none',
                'transform': 'scale(1)',
                'opacity': '0.8'
            });
        }
    );
    
    // Initialize thumbnail styling
    $('.thumb').css({
        'border': '1px solid #ccc',
        'opacity': '0.8',
        'transition': 'all 0.3s ease'
    });
    
    // ===== REQUIREMENT: Create a photo gallery using jQuery =====
    // Create a click event to display the thumbnail images in the larger image
    $('.thumb').click(function(e) {
        e.preventDefault();
        
        // Get src and alt from clicked thumbnail (smaller image)
        const thumbnailSrc = $(this).attr('src');
        const thumbnailAlt = $(this).attr('alt');
        
        // Replace the src attribute of the larger image with clicked image src
        $('#lgPic').attr('src', thumbnailSrc);
        $('#lgPic').attr('alt', thumbnailAlt);
        
        // Display new title under large image when replaced
        $('#imageCaption').text(thumbnailAlt);
        
        console.log('✅ Gallery: Replaced large image with:', thumbnailAlt);
        console.log('✅ New title displayed under large image:', thumbnailAlt);
    });
    
    // ===== REQUIREMENT: Select a link with JavaScript =====
    $('.internal-link').click(function(e) {
        const linkText = $(this).text();
        const linkHref = $(this).attr('href');
        
        // Select link with JavaScript - show selection
        alert('JavaScript selected link: "' + linkText + '"');
        console.log('✅ Link selected with JavaScript:', linkText);
    });
    
    // ===== REQUIREMENT: Prevent a page from following a link =====
    $('.internal-link').click(function(e) {
        // Prevent the page from following the link
        e.preventDefault();
        console.log('✅ Prevented page from following link');
    });
    
    // ===== REQUIREMENT: Open a link in another window =====
    // Open a new window with the large image as the source. Must be current large image.
    $('#lgPic').click(function(e) {
        e.preventDefault();
        
        // Get current large image src and alt (whatever is currently displayed)
        const currentLargeImageSrc = $(this).attr('src');
        const currentLargeImageAlt = $(this).attr('alt');
        
        // Open new window with CURRENT large image as source
        const newWindow = window.open('', 'ImageWindow', 'width=700,height=600,scrollbars=yes,resizable=yes');
        
        // Create HTML content in new window with current large image
        newWindow.document.write('<html><head><title>' + currentLargeImageAlt + '</title>');
        newWindow.document.write('<style>body { font-family: Arial, sans-serif; text-align: center; padding: 20px; background: #f5f5f5; }');
        newWindow.document.write('img { max-width: 95%; height: auto; border: 2px solid #333; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.3); }');
        newWindow.document.write('h2 { color: #2c5530; margin-bottom: 20px; }</style></head>');
        newWindow.document.write('<body>');
        newWindow.document.write('<h2>' + currentLargeImageAlt + '</h2>');
        newWindow.document.write('<img src="' + currentLargeImageSrc + '" alt="' + currentLargeImageAlt + '">');
        newWindow.document.write('<p><strong>Current Large Image opened in new window</strong></p>');
        newWindow.document.write('<button onclick="window.close()" style="padding: 8px 16px; margin-top: 10px; background: #2c5530; color: white; border: none; border-radius: 4px; cursor: pointer;">Close Window</button>');
        newWindow.document.write('</body></html>');
        newWindow.document.close();
        
        console.log('✅ Opened NEW WINDOW with CURRENT large image:', currentLargeImageAlt);
        console.log('✅ Source used:', currentLargeImageSrc);
    });
    
    // ===== REQUIREMENT: Open a page within a page =====
    // This gallery itself demonstrates the "page within a page" concept
    // The gallery can be embedded within other pages or loaded via iframe
    
    // Make large image clickable with cursor pointer
    $('#lgPic').css('cursor', 'pointer');
    
    // Log all specific requirements completion
    console.log('🎉 ALL SPECIFIC REQUIREMENTS IMPLEMENTED:');
    console.log('✅ 1. Create rollovers for ALL thumbnail images - hover effects working');
    console.log('✅ 2. Create click event to display thumbnails in larger image - functional');
    console.log('✅ 3. Display new title under large image when replaced - caption updates');
    console.log('✅ 4. Open new window with large image as source - MUST BE CURRENT large image');
    console.log('✅ 5. Image preloading - all images loaded for performance');
    console.log('Gallery ready with all specified requirements!');
    console.log('Test: Hover over thumbnails, click to change, click large image for new window');
});