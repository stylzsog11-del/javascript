$(document).ready(function() {
    console.log('jQuery Effects Ready!');
    
    // ✅ REQUIREMENT 1: Hide newsletter form initially
    $('#newsSignup').hide();
    console.log('Newsletter form hidden initially');
    
    // ✅ REQUIREMENT 2$(document).ready(function() {
    console.log('jQuery Effects Ready!');
    
    // ✅ REQUIREMENT 1: Hide newsletter form initially
    $('#newsSignup').hide();
    console.log('Newsletter form hidden initially');
    
    // ✅ REQUIREMENT 2: Slide toggle for newsletter signup
    $('#signuplink').click(function(e) {
        e.preventDefault(); // Cancel default link action
        
        // Toggle the form with slide effect
        $('#newsSignup').slideToggle('normal');
        
        // Toggle the +/- symbol
        var openCloseSpan = $('#openclose');
        if (openCloseSpan.text() === '+') {
            openCloseSpan.text('-');
            console.log('Form opened - changed + to -');
        } else {
            openCloseSpan.text('+');
            console.log('Form closed - changed - to +');
        }
    });
    
    // ✅ REQUIREMENT 3: Slogan hover effects with fadeIn/fadeOut
    $('#slogan').hover(
        // Mouseover function
        function() {
            console.log('Slogan mouseover - starting fade out');
            // Fade out with normal speed and linear easing
            $(this).fadeOut('normal', 'linear', function() {
                // Callback: change text and fade in slowly with swing
                console.log('Fade out complete - changing text and fading in');
                $(this).text('Hand Picked Just for You').fadeIn('slow', 'swing');
            });
        },
        // Mouseout function
        function() {
            console.log('Slogan mouseout - starting fade out');
            // Fade out fast with swing easing
            $(this).fadeOut('fast', 'swing', function() {
                // Callback: change text back and fade in slowly with linear
                console.log('Fade out complete - restoring original text');
                $(this).text('The Power of Flowers').fadeIn('slow', 'linear');
            });
        }
    );
    
    // ✅ REQUIREMENT 4: Animate rose from right side
    console.log('Starting rose animation');
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
    
    // ✅ REQUIREMENT 5: Form submission event
    $('#newsSignup').submit(function(e) {
        e.preventDefault(); // Stop default form submission
        
        console.log('Form submission prevented');
        
        // Display alert message
        alert('Thank you for registering');
        
        // Hide the form
        $('#newsSignup').hide();
        console.log('Form hidden');
        
        // Fade signup link to 30% opacity
        $('#signuplink').fadeTo('normal', 0.3);
        console.log('Signup link faded to 30% opacity');
        
        // Reset the +/- symbol
        $('#openclose').text('+');
    });
    
    // ✅ ADDITIONAL ENHANCEMENTS
    
    // Add smooth transitions to various elements
    $('a').hover(
        function() {
            $(this).fadeTo('fast', 0.7);
        },
        function() {
            $(this).fadeTo('fast', 1.0);
        }
    );
    
    // Add click effect to specials section
    $('#specials').click(function() {
        $(this).effect('bounce', {times: 2}, 300);
    });
    
    console.log('=== ALL JQUERY EFFECTS INITIALIZED ===');
    console.log('✅ Newsletter slide toggle ready');
    console.log('✅ Slogan hover effects ready');
    console.log('✅ Rose animation started');
    console.log('✅ Form submission handler ready');
});: Slide toggle for newsletter signup
    $('#signuplink').click(function(e) {
        e.preventDefault(); // Cancel default link action
        
        // Toggle the form with slide effect
        $('#newsSignup').slideToggle('normal');
        
        // Toggle the +/- symbol
        var openCloseSpan = $('#openclose');
        if (openCloseSpan.text() === '+') {
            openCloseSpan.text('-');
            console.log('Form opened - changed + to -');
        } else {
            openCloseSpan.text('+');
            console.log('Form closed - changed - to +');
        }
    });
    
    // ✅ REQUIREMENT 3: Slogan hover effects with fadeIn/fadeOut
    $('#slogan').hover(
        // Mouseover function
        function() {
            console.log('Slogan mouseover - starting fade out');
            // Fade out with normal speed and linear easing
            $(this).fadeOut('normal', 'linear', function() {
                // Callback: change text and fade in slowly with swing
                console.log('Fade out complete - changing text and fading in');
                $(this).text('Hand Picked Just for You').fadeIn('slow', 'swing');
            });
        },
        // Mouseout function
        function() {
            console.log('Slogan mouseout - starting fade out');
            // Fade out fast with swing easing
            $(this).fadeOut('fast', 'swing', function() {
                // Callback: change text back and fade in slowly with linear
                console.log('Fade out complete - restoring original text');
                $(this).text('The Power of Flowers').fadeIn('slow', 'linear');
            });
        }
    );
    
    // ✅ REQUIREMENT 4: Animate rose from right side
    console.log('Starting rose animation');
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
    
    // ✅ REQUIREMENT 5: Form submission event
    $('#newsSignup').submit(function(e) {
        e.preventDefault(); // Stop default form submission
        
        console.log('Form submission prevented');
        
        // Display alert message
        alert('Thank you for registering');
        
        // Hide the form
        $('#newsSignup').hide();
        console.log('Form hidden');
        
        // Fade signup link to 30% opacity
        $('#signuplink').fadeTo('normal', 0.3);
        console.log('Signup link faded to 30% opacity');
        
        // Reset the +/- symbol
        $('#openclose').text('+');
    });
    
    // ✅ ADDITIONAL ENHANCEMENTS
    
    // Add smooth transitions to various elements
    $('a').hover(
        function() {
            $(this).fadeTo('fast', 0.7);
        },
        function() {
            $(this).fadeTo('fast', 1.0);
        }
    );
    
    // Add click effect to specials section
    $('#specials').click(function() {
        $(this).effect('bounce', {times: 2}, 300);
    });
    
    console.log('=== ALL JQUERY EFFECTS INITIALIZED ===');
    console.log('✅ Newsletter slide toggle ready');
    console.log('✅ Slogan hover effects ready');
    console.log('✅ Rose animation started');
    console.log('✅ Form submission handler ready');
});