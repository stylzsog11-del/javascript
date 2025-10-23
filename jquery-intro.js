$(document).ready(function() {
    // Arrays for months, specials, and tips
    var months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    
    var specials = [
        '<strong>January Special:</strong> New Year fitness packages available!',
        '<strong>February Special:</strong> Valentine\'s Day romantic getaway deals!',
        '<strong>March Special:</strong> Spring cleaning service discounts!',
        '<strong>April Special:</strong> Easter celebration packages!',
        '<strong>May Special:</strong> Mother\'s Day spa treatments!',
        '<strong>June Special:</strong> Father\'s Day outdoor adventure deals!',
        '<strong>July Special:</strong> Summer vacation packages!',
        '<strong>August Special:</strong> Back-to-school supply discounts!',
        '<strong>September Special:</strong> Fall harvest festival events!',
        '<strong>October Special:</strong> Halloween costume and decoration sales!',
        '<strong>November Special:</strong> Thanksgiving dinner catering!',
        '<strong>December Special:</strong> Holiday gift wrapping services!'
    ];
    
    var tips = [
        '<h4>Winter Tips</h4><p>Stay warm with layered clothing. Keep emergency supplies in your car. Check heating systems regularly.</p>',
        '<h4>Spring Tips</h4><p>Start your garden planning. Clean gutters and check for winter damage. Prepare for allergy season.</p>',
        '<h4>Summer Tips</h4><p>Stay hydrated and use sunscreen. Maintain your air conditioning. Plan outdoor activities early or late in the day.</p>',
        '<h4>Fall Tips</h4><p>Rake leaves regularly. Prepare your home for winter. Enjoy seasonal foods and activities.</p>'
    ];
    
    // Get current date
    var currentDate = new Date();
    var currentMonth = currentDate.getMonth(); // 0-11
    var currentYear = currentDate.getFullYear();
    
    // Get month name using array index
    var monthName = months[currentMonth];
    
    // Check if current month is December (index 11)
    if (currentMonth === 11) {
        $('h2').after('<h3>Happy Holidays!</h3>');
    }
    
    // Modify h3 tag to include current month name
    $('#month').text('Tips for ' + monthName);
    
    // Add current year to copyright
    $('#copyright').append(' ' + currentYear);
    
    // Display specials based on current month
    $('#specials').html(specials[currentMonth]);
    
    // Switch statement for seasons
    var season, backgroundImage, seasonColor, seasonIndex;
    
    switch (currentMonth) {
        case 11: // December
        case 0:  // January
        case 1:  // February
            season = 'Winter';
            backgroundImage = 'images/winterbg.jpg';
            seasonColor = '#00f';
            seasonIndex = 0;
            break;
            
        case 2: // March
        case 3: // April
        case 4: // May
            season = 'Spring';
            backgroundImage = 'images/springbg.jpg';
            seasonColor = '#d7d';
            seasonIndex = 1;
            break;
            
        case 5: // June
        case 6: // July
        case 7: // August
            season = 'Summer';
            backgroundImage = 'images/summerbg.jpg';
            seasonColor = '#006400';
            seasonIndex = 2;
            break;
            
        case 8:  // September
        case 9:  // October
        case 10: // November
            season = 'Fall';
            backgroundImage = 'images/fallbg.jpg';
            seasonColor = '#930';
            seasonIndex = 3;
            break;
    }
    
    // Change page background image
    $('body').css('background-image', 'url(' + backgroundImage + ')');
    
    // Change seasonal tips content
    $('#seasontips').html(tips[seasonIndex]);
    
    // Change heading colors
    $('strong, h1, h2, h3').css('color', seasonColor);
    
    // Add season class to specials div
    $('#specials').addClass(season);
});