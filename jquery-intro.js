// create a months array
var months = ['January', 'February','March','April','May','June','July','August','September','October','November', 'December'];

// create a specials array
var specials = [
    '<h3>January Special</h3><p><strong>Winter Protection:</strong> Get 20% off frost covers and winter plant protection supplies!</p>',
    '<h3>February Special</h3><p><strong>Valentine\'s Day:</strong> Beautiful rose arrangements and romantic garden packages available!</p>',
    '<h3>March Special</h3><p><strong>Spring Prep:</strong> Early bird discounts on spring bulbs and garden preparation services!</p>',
    '<h3>April Special</h3><p><strong>Easter Blooms:</strong> Colorful Easter lily arrangements and spring container gardens!</p>',
    '<h3>May Special</h3><p><strong>Mother\'s Day:</strong> Gorgeous hanging baskets and perennial flower collections!</p>',
    '<h3>June Special</h3><p><strong>Summer Ready:</strong> Heat-tolerant plants and automatic irrigation system installation!</p>',
    '<h3>July Special</h3><p><strong>Beat the Heat:</strong> Drought-resistant plant varieties and summer garden maintenance!</p>',
    '<h3>August Special</h3><p><strong>Late Summer:</strong> End-of-season annuals and fall planting preparation services!</p>',
    '<h3>September Special</h3><p><strong>Fall Favorites:</strong> Autumn mums, asters, and seasonal decorative displays!</p>',
    '<h3>October Special</h3><p><strong>Halloween Fun:</strong> Pumpkins, gourds, and spooky garden decorations available!</p>',
    '<h3>November Special</h3><p><strong>Thanksgiving:</strong> Harvest-themed centerpieces and winter garden preparation!</p>',
    '<h3>December Special</h3><p><strong>Holiday Magic:</strong> Fresh wreaths, garlands, and festive arrangements!</p>'
];

// create a tips array
var tips = [
    '<h4>Winter Garden Care</h4><p>Protect tender plants from frost with covers or mulch. This is the perfect time to plan next year\'s garden layout. Prune dormant trees and shrubs, and don\'t forget to feed the winter birds!</p><ul><li>Protect plants from frost</li><li>Plan next year\'s garden</li><li>Prune dormant plants</li><li>Feed winter wildlife</li></ul>',
    
    '<h4>Spring Garden Revival</h4><p>Spring is here! Plant cool-season vegetables and flowers. Prepare your flower beds with fresh compost and start seeds indoors for summer blooms. Enjoy the spectacular display of tulips and daffodils!</p><ul><li>Plant cool-season crops</li><li>Prepare beds with compost</li><li>Start summer seeds indoors</li><li>Enjoy spring bulb displays</li></ul>',
    
    '<h4>Summer Garden Maintenance</h4><p>Keep your garden thriving in the heat! Water deeply and regularly during hot weather. Deadhead flowers for continuous blooms and harvest vegetables regularly. Plant heat-loving annuals like zinnias and marigolds.</p><ul><li>Water deeply and regularly</li><li>Deadhead spent flowers</li><li>Harvest vegetables frequently</li><li>Plant heat-tolerant flowers</li></ul>',
    
    '<h4>Fall Garden Preparation</h4><p>Autumn is perfect for planting! Add cool-season flowers like mums and pansies. Rake leaves for your compost pile and prepare garden beds for winter. Enjoy the beautiful colors of fall dahlias and chrysanthemums.</p><ul><li>Plant fall flowers</li><li>Rake leaves for compost</li><li>Prepare beds for winter</li><li>Enjoy autumn blooms</li></ul>'
];

// jQuery Document Ready Function
$(document).ready(function() {
    console.log('jQuery is ready!'); // Debug message
    
    // Get current date
    var currentDate = new Date();
    var currentMonth = currentDate.getMonth(); // 0-11
    var currentYear = currentDate.getFullYear();
    
    // Get month name using array index
    var monthName = months[currentMonth];
    
    // Check if current month is December (index 11) - use .after() method
    if (currentMonth === 11) {
        $('#slogan').after('<h3 style="color: #00f; text-align: center; margin: 10px 0;">Happy Holidays!</h3>');
    }
    
    // Modify h3 tag with id='month' to include current month name
    $('#month').text('Tips for ' + monthName);
    
    // Get current year and add to copyright paragraph using .append() method
    $('#copy').append(' ' + currentYear);
    
    // Use month number as index to specials array and modify #specials div
    $('#specials').html(specials[currentMonth]);
    
    // Switch statement for month number to identify season
    var season, backgroundImage, seasonColor, seasonIndex;
    
    switch (currentMonth) {
        case 11: // December
        case 0:  // January  
        case 1:  // February
            season = 'Winter';
            backgroundImage = 'winterbg.jpg';
            seasonColor = '#00f';
            seasonIndex = 0;
            break;
            
        case 2: // March
        case 3: // April
        case 4: // May
            season = 'Spring';
            backgroundImage = 'springbg.jpg';
            seasonColor = '#d7d';
            seasonIndex = 1;
            break;
            
        case 5: // June
        case 6: // July
        case 7: // August
            season = 'Summer';
            backgroundImage = 'summerbg.jpg';
            seasonColor = '#006400';
            seasonIndex = 2;
            break;
            
        case 8:  // September
        case 9:  // October
        case 10: // November
            season = 'Fall';
            backgroundImage = 'fallbg.jpg';
            seasonColor = '#930';
            seasonIndex = 3;
            break;
    }
    
    // Change page background image to seasonal image
    $('body').css('background-image', 'url(' + backgroundImage + ')');
    
    // Change #seasontips div to html and text from tips array using season index
    $('#seasontips').html(tips[seasonIndex]);
    
    // Change strong, h1, h2, and h3 tags to season color
    $('strong, h1, h2, h3').css('color', seasonColor);
    
    // Add class to 'specials' id using season as class name
    $('#specials').addClass(season);
    
    // Console log for debugging
    console.log('Current Month: ' + monthName);
    console.log('Season: ' + season);
    console.log('Background: ' + backgroundImage);
    console.log('Color: ' + seasonColor);
});