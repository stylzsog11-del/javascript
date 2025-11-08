$(document).ready(function() {
    // Hide the newsletter signup form when page loads
    $('#newsSignup').hide();
    
    // Animate the rose image when page loads
    $('#rose').animate({
        right: '100px',
        opacity: 1
    }, 2000, 'swing');
    
    // Sign Up Link Click Event
    $('#signuplink').click(function(e) {
        e.preventDefault();
        $('#newsSignup').slideToggle();
        
        var openCloseSpan = $('#openclose');
        if (openCloseSpan.text() === '+') {
            openCloseSpan.text('-');
        } else {
            openCloseSpan.text('+');
        }
    });
    
    // Slogan Hover Effects
    $('#slogan').hover(
        function() {
            $(this).fadeOut('normal', 'linear', function() {
                $(this).text('Hand Picked Just for You').fadeIn('slow', 'swing');
            });
        },
        function() {
            $(this).fadeOut('fast', 'swing', function() {
                $(this).text('The Power of Flowers').fadeIn('slow', 'linear');
            });
        }
    );
    
    // Form Submission Event
    $('#newsSignup').submit(function(e) {
        e.preventDefault();
        alert('Thank you for registering');
        $(this).hide();
        $('#signuplink').fadeTo('slow', 0.3);
        $('#openclose').text('+');
    });
});