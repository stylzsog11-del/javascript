$(document).ready(function() {
    // Hide the newsletter signup form when page loads
    $('#newsSignup').hide();
    
    // Animate the rose image when page loads - slide in from right side
    $('#rose').animate({
        right: '100px',
        opacity: 1
    }, 2000, 'swing');
    
    // Sign Up Link Click Event - slideToggle function
    $('#signuplink').click(function(e) {
        e.preventDefault(); // Cancel default link action
        
        // Toggle the form visibility with slide effect
        $('#newsSignup').slideToggle();
        
        // Toggle the +/- symbol
        var openCloseSpan = $('#openclose');
        if (openCloseSpan.text() === '+') {
            openCloseSpan.text('-');
        } else {
            openCloseSpan.text('+');
        }
    });
    
    // Slogan Hover Effects - fadeIn() and fadeOut() with callbacks
    $('#slogan').hover(
        // Mouse over function
        function() {
            $(this).fadeOut('normal', 'linear', function() {
                // Callback function - change text after fade out completes
                $(this).text('Hand Picked Just for You').fadeIn('slow', 'swing');
            });
        },
        // Mouse out function
        function() {
            $(this).fadeOut('fast', 'swing', function() {
                // Callback function - change text back after fade out completes
                $(this).text('The Power of Flowers').fadeIn('slow', 'linear');
            });
        }
    );
    
    // Form Submission Event
    $('#newsSignup').submit(function(e) {
        e.preventDefault(); // Prevent form submission
        
        // Display alert message
        alert('Thank you for registering');
        
        // Hide the newsletter signup form
        $(this).hide();
        
        // Fade the signup link to 30% opacity
        $('#signuplink').fadeTo('slow', 0.3);
        
        // Reset the +/- symbol back to +
        $('#openclose').text('+');
    });
});