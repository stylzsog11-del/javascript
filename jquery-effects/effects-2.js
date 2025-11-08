$(document).ready(function() {
    console.log('jQuery Effects Ready!');
    
    // ✅ REQUIREMENT 1: Hide newsletter form when page loads
    $('#newsSignup').hide();
    console.log('Newsletter form hidden initially');
    
    // ✅ REQUIREMENT 2: Animated Rose - slide in from right side with fade
    console.log('Starting rose animation...');
    $('#rose').animate({
        right: '100px',
        opacity: 1
    }, {
        duration: 'slow',
        easing: 'swing',
        complete: function() {
            console.log('Rose animation complete!');
        }
    });
    
    // ✅ REQUIREMENT 3: Newsletter Signup Link with slideToggle
    $('#signuplink').click(function(e) {
        e.preventDefault(); // Cancel default link action
        console.log('Signup link clicked');
        
        // Use slideToggle to show/hide the form
        $('#newsSignup').slideToggle('normal');
        
        // Toggle +/- symbol
        var openCloseSpan = $('#openclose');
        if (openCloseSpan.text() === '+') {
            openCloseSpan.text('-');
            console.log('Form opened - changed + to -');
        } else {
            openCloseSpan.text('+');
            console.log('Form closed - changed - to +');
        }
    });
    
    // ✅ REQUIREMENT 4: Slogan Hover Effects with specific easing
    $('#slogan').hover(
        // Onmouseover: fade out (normal, linear) → change text → fade in (slow, swing)
        function() {
            console.log('Slogan mouseover - fading out with linear easing');
            $(this).fadeOut('normal', 'linear', function() {
                console.log('Fade out complete - changing text and fading in with swing');
                $(this).text('Hand Picked Just for You').fadeIn('slow', 'swing');
            });
        },
        // Onmouseout: fade out (fast, swing) → change text back → fade in (slow, linear)
        function() {
            console.log('Slogan mouseout - fading out with swing easing');
            $(this).fadeOut('fast', 'swing', function() {
                console.log('Fade out complete - restoring original text with linear');
                $(this).text('The Power of Flowers').fadeIn('slow', 'linear');
            });
        }
    );
    
    // ✅ REQUIREMENT 5: Form Submission Event
    $('#newsSignup').submit(function(e) {
        e.preventDefault(); // Stop default form submission
        console.log('Form submission prevented');
        
        // Display alert message
        alert('Thank you for registering');
        
        // Hide the newsSignup form
        $(this).hide();
        console.log('Form hidden');
        
        // Fade signuplink to 30% opacity
        $('#signuplink').fadeTo('normal', 0.3);
        console.log('Signup link faded to 30% opacity');
        
        // Reset the +/- symbol
        $('#openclose').text('+');
        console.log('Reset symbol to +');
    });
    
    // ✅ BONUS: Additional effects for enhanced user experience
    
    // Smooth hover effect for navigation links
    $('nav a').hover(
        function() {
            $(this).fadeTo('fast', 0.7);
        },
        function() {
            $(this).fadeTo('fast', 1.0);
        }
    );
    
    console.log('=== ALL JQUERY EFFECTS INITIALIZED ===');
    console.log('✅ Newsletter form hidden and slideToggle ready');
    console.log('✅ Slogan hover effects with proper easing ready');
    console.log('✅ Rose animation started');
    console.log('✅ Form submission handler ready');
    console.log('✅ Additional hover effects added');
});