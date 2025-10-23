$(document).ready(function() {
    // --- ARRAYS ---
    var months = ["January", "February", "March", "April", "May", "June",
                  "July", "August", "September", "October", "November", "December"];

    var specials = [
        '<h3>January Special</h3><p><strong>Winter Warmth:</strong> Cozy indoor plants and bright winter blooms!</p>',
        '<h3>February Special</h3><p><strong>Valentine’s Blooms:</strong> Romantic roses and tulip bouquets!</p>',
        '<h3>March Special</h3><p><strong>Spring Awakening:</strong> Daffodils, pansies, and early bulbs!</p>',
        '<h3>April Special</h3><p><strong>April Showers:</strong> Discounts on watering cans and tools!</p>',
        '<h3>May Special</h3><p><strong>Mother’s Day:</strong> Flower baskets and garden gifts!</p>',
        '<h3>June Special</h3><p><strong>Summer Color:</strong> Vibrant petunias, geraniums, and zinnias!</p>',
        '<h3>July Special</h3><p><strong>Patriotic Petals:</strong> Red, white, and blue arrangements!</p>',
        '<h3>August Special</h3><p><strong>Late Summer:</strong> End-of-season annuals and fall planting prep!</p>',
        '<h3>September Special</h3><p><strong>Fall Favorites:</strong> Mums, asters, and seasonal décor!</p>',
        '<h3>October Special</h3><p><strong>Halloween Fun:</strong> Pumpkins and spooky decorations!</p>',
        '<h3>November Special</h3><p><strong>Thanksgiving:</strong> Harvest-themed centerpieces!</p>',
        '<h3>December Special</h3><p><strong>Holiday Magic:</strong> Wreaths, garlands, and festive arrangements!</p>'
    ];

    var tips = [
        '<h4>Winter Garden Care</h4><p>Protect tender plants from frost and plan next year’s garden layout.</p>',
        '<h4>Spring Garden Revival</h4><p>Plant cool-season flowers and prepare beds for new blooms.</p>',
        '<h4>Summer Garden Maintenance</h4><p>Water deeply, deadhead flowers, and enjoy colorful displays.</p>',
        '<h4>Fall Garden Preparation</h4><p>Plant mums, rake leaves, and get your garden ready for winter.</p>'
    ];

    // --- GET CURRENT DATE ---
    var today = new Date();
    var monthNum = today.getMonth();
    var year = today.getFullYear();
    var monthName = months[monthNum];

    // --- INSERT CURRENT MONTH IN PAGE HEADER ---
    $('#month').text("Tips for " + monthName);

    // --- INSERT COPYRIGHT YEAR ---
    $('p:contains("Copyright")').append(" " + year);

    // --- INSERT SPECIAL BASED ON MONTH ---
    $('#specials').html(specials[monthNum]);

    // --- ADD HOLIDAY MESSAGE FOR DECEMBER ---
    if (monthNum === 11) { // December
        $('h2').after('<h3 class="holiday">Happy Holidays!</h3>');
    }

    // --- DETERMINE SEASON ---
    var season, bgImage, color, seasonIndex;

    switch (monthNum) {
        case 11: case 0: case 1:
            season = 'Winter';
            bgImage = 'winterbg.jpg';
            color = '#00f';
            seasonIndex = 0;
            break;
        case 2: case 3: case 4:
            season = 'Spring';
            bgImage = 'springbg.jpg';
            color = '#d7d';
            seasonIndex = 1;
            break;
        case 5: case 6: case 7:
            season = 'Summer';
            bgImage = 'summerbg.jpg';
            color = '#006400';
            seasonIndex = 2;
            break;
        case 8: case 9: case 10:
            season = 'Fall';
            bgImage = 'fallbg.jpg';
            color = '#930';
            seasonIndex = 3;
            break;
    }

    // --- APPLY SEASONAL CHANGES ---
    $('body').css('background-image', 'url(images/' + bgImage + ')');
    $('#seasontips').html(tips[seasonIndex]);
    $('strong, h1, h2, h3').css('color', color);
    $('#specials').addClass(season.toLowerCase());
});
