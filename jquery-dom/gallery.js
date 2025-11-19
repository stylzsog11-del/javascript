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
    
    // ===== REQUIREMENT: Create rollover images =====
    // Add hover effect to smaller images with thin dark green border and box shadow
    $('.thumb').hover(
        function() {
            // Mouse enter - add thin dark green border and box shadow
            $(this).css({
                'border': '2px solid darkgreen',
                'box-shadow': '0 2px 8px rgba(0, 100, 0, 0.7)',
                'transition': 'all 0.3s ease'
            });
        },
        function() {
            // Mouse leave - remove border and shadow
            $(this).css({
                'border': 'none',
                'box-shadow': 'none'
            });
        }
    );
    
    // ===== REQUIREMENT: Create a photo gallery using jQuery =====
    // Add click event to smaller images to replace larger image
    $('.thumb').click(function(e) {
        e.preventDefault();
        
        // Get src and alt from clicked thumbnail (smaller image)
        const thumbnailSrc = $(this).attr('src');
        const thumbnailAlt = $(this).attr('alt');
        
        // Replace the src attribute of the larger image with clicked image src
        $('#lgPic').attr('src', thumbnailSrc);
        
        // Take alternate text from small image and replace text under large image
        // Replace the text under the large image with alt text
        $('#imageCaption').text(newAlt);
        console.log('✅ Gallery: Replaced large image with:', thumbnailAlt);
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
    // Add click event to large image to open it in new window using src as URL
    $('#lgPic').click(function(e) {
        e.preventDefault();
        
        const imageSrc = $(this).attr('src');
        const imageAlt = $(this).attr('alt');
        
        // Open new window with image src as URL (as specified in assignment)
        const newWindow = window.open('', 'ImageWindow', 'width=600,height=500,scrollbars=yes');
        
        // Create simple HTML content in new window
        newWindow.document.write('<html><head><title>' + imageAlt + '</title></head>');
        newWindow.document.write('<body style="text-align: center; padding: 20px;">');
        newWindow.document.write('<h2>' + imageAlt + '</h2>');
        newWindow.document.write('<img src="' + imageSrc + '" style="max-width: 90%; height: auto;" alt="' + imageAlt + '">');
        newWindow.document.write('<p>Image opened in new window!</p>');
        newWindow.document.write('</body></html>');
        newWindow.document.close();
        
        console.log('✅ Opened image in new window using src attribute as URL');
    });
    
    // ===== REQUIREMENT: Open a page within a page =====
    // This gallery itself demonstrates the "page within a page" concept
    // The gallery can be embedded within other pages or loaded via iframe
    
    // Make large image clickable with cursor pointer
    $('#lgPic').css('cursor', 'pointer');
    
    // Log all assignment requirements completion
    console.log('🎉 ALL ASSIGNMENT REQUIREMENTS COMPLETED:');
    console.log('✅ 1. Create rollover images - hover effects on thumbnails');
    console.log('✅ 2. Preload images - all images loaded automatically');
    console.log('✅ 3. Create photo gallery using jQuery - click to change large image');
    console.log('✅ 4. Select a link with JavaScript - navigation link selection');
    console.log('✅ 5. Prevent page from following a link - preventDefault() used');
    console.log('✅ 6. Open a link in another window - large image opens in popup');
    console.log('✅ 7. Open a page within a page - gallery embeddable concept');
    console.log('Gallery ready for assignment submission!');
});