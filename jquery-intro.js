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

$(document).ready(function() {
    console.log('Ready!'); // debug to verify jQuery working
    
    // ✅ REQUIREMENT 1: Get the current date
    // REPLACE THIS LINE WITH ONE OF THE TEST DATES BELOW:
    
    // For normal operation (current date):
    // var currentDate = new Date();
    
    // FOR TESTING - Choose ONE of these lines:
    var currentDate = new Date(2024, 11, 25); // Test December to see "Happy Holidays!" message
    // var currentDate = new Date(2024, 3, 15);  // Test April (Spring)
    // var currentDate = new Date(2024, 7, 15);  // Test August (Summer)
    // var currentDate = new Date(2024, 9, 15);  // Test October (Fall)
    
    console.log('Current date object:', currentDate);
    
    // ✅ REQUIREMENT 2: Use a date function to get current month and use as index to months array
    var currentMonth = currentDate.getMonth(); // Returns 0-11
    var monthName = months[currentMonth]; // Use month as index to get month name
    console.log('Current month index:', currentMonth);
    console.log('Month name from array:', monthName);
    
    // ✅ REQUIREMENT 3: Use if statement for December - add h3 below h2 slogan using .after() method
    if (currentMonth === 11) { // December is index 11 (0-based)
        $('#slogan').after('<h3 style="color: #ff0000; text-align: center; margin: 15px 0; font-style: italic;">Happy Holidays!</h3>');
        console.log('December detected - Happy Holidays message added!');
    }
    
    // ✅ REQUIREMENT 4: Modify h3 with id='month' to include current month name
    $('#month').text('Tips for ' + monthName);
    console.log('Month heading updated to: Tips for ' + monthName);
    
    // ✅ REQUIREMENT 5: Get current year and add to copyright using .append() method
    var currentYear = currentDate.getFullYear();
    $('#copyright').append(' ' + currentYear);
    console.log('Current year appended:', currentYear);
    
    // ✅ REQUIREMENT 6: Use month number as index to specials array and modify #specials div
    $('#specials').html(specials[currentMonth]);
    console.log('Specials updated with month index:', currentMonth);
    
    // ✅ REQUIREMENT 7: Use switch statement for month number to identify season and create variables
    var season, backgroundImage, seasonColor, seasonIndex;
    
    switch (currentMonth) {
        case 11: // December
        case 0:  // January
        case 1:  // February
            season = 'Winter';
            backgroundImage = 'winterbg.jpg';
            seasonColor = '#00f';
            seasonIndex = 0;
            console.log('Season detected: Winter');
            break;
            
        case 2: // March
        case 3: // April
        case 4: // May
            season = 'Spring';
            backgroundImage = 'springbg.jpg';
            seasonColor = '#d7d';
            seasonIndex = 1;
            console.log('Season detected: Spring');
            break;
            
        case 5: // June
        case 6: // July
        case 7: // August
            season = 'Summer';
            backgroundImage = 'summerbg.jpg';
            seasonColor = '#006400';
            seasonIndex = 2;
            console.log('Season detected: Summer');
            break;
            
        case 8:  // September
        case 9:  // October
        case 10: // November
            season = 'Fall';
            backgroundImage = 'fallbg.jpg';
            seasonColor = '#930';
            seasonIndex = 3;
            console.log('Season detected: Fall');
            break;
    }
    
    // ✅ REQUIREMENT 8: Change page background image to seasonal image
    $('body').css('background-image', 'url(' + backgroundImage + ')');
    console.log('Background image set to:', backgroundImage);
    
    // ✅ REQUIREMENT 9: Change #seasontips to html and text from tips array using season index
    $('#seasontips').html(tips[seasonIndex]);
    console.log('Seasonal tips updated with season index:', seasonIndex);
    
    // ✅ REQUIREMENT 10: Change strong, h1, h2, h3 tags to season color
    $('strong, h1, h2, h3').css('color', seasonColor);
    console.log('Heading colors changed to:', seasonColor);
    
    // ✅ REQUIREMENT 11: Add class to 'specials' id using season as class name
    $('#specials').addClass(season);
    console.log('Season class added to specials:', season);
    
    // Final summary console output
    console.log('=== JQUERY SEASONAL WEBSITE SUMMARY ===');
    console.log('Month: ' + monthName + ' (Index: ' + currentMonth + ')');
    console.log('Season: ' + season + ' (Index: ' + seasonIndex + ')');
    console.log('Background: ' + backgroundImage);
    console.log('Color: ' + seasonColor);
    console.log('Year: ' + currentYear);
    console.log('All requirements implemented successfully!');
});