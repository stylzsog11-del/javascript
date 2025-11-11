$(document).ready(function() {
    console.log('jQuery DOM Manipulation Ready!');
    
    // ✅ REQUIREMENT 1: Variable to count items in shopping cart (initialized to zero)
    var itemCount = 0;
    
    // ✅ REQUIREMENT 2: Variable to hold HTML for delete button
    var deleteButton = "<span class='del'>Remove</span>";
    
    // ✅ REQUIREMENT 3: Click event for .add class (Add to Cart buttons)
    $('.add').click(function() {
        console.log('Add to Cart button clicked');
        
        // Increment shopping cart count by 1
        itemCount++;
        console.log('Item count incremented to: ' + itemCount);
        
        // If item count > 0, hide the '#empty' list item
        if (itemCount > 0) {
            $('#empty').hide();
            console.log('Empty cart message hidden');
        }
        
        // Get text from name and id attributes of clicked element
        var itemName = $(this).attr('name');
        var itemID = $(this).attr('id');
        console.log('Item Name: ' + itemName + ', Item ID: ' + itemID);
        
        // Create list item with class 'cartItem' and name attribute of id
        var cartLink = "<li class='cartItem' name='" + itemID + "'>" + itemName + " <span class='del'>Remove</span></li>";
        console.log('Created cart item: ' + cartLink);
        
        // Add (append) list item to the end of #cart ul
        $('#cart').append(cartLink);
        console.log('Item added to cart');
        
        // Hide the Add to Cart button
        $(this).hide();
        console.log('Add to Cart button hidden');
        
        // Update item count display
        $('#item-count').text(itemCount);
    });
    
    // ✅ REQUIREMENT 4: Delegate function for click event on remove buttons
    // Note: Using delegate because remove buttons are added dynamically
    $('#cart').on('click', '.del', function() {
        console.log('Remove button clicked');
        
        // Get the item ID from the parent li's name attribute
        var itemID = $(this).parent().attr('name');
        console.log('Removing item with ID: ' + itemID);
        
        // Remove the parent li from the page
        $(this).parent().remove();
        console.log('Item removed from cart');
        
        // Deduct 1 from item count
        itemCount--;
        console.log('Item count decremented to: ' + itemCount);
        
        // If item count is 0, show the #empty list item
        if (itemCount === 0) {
            $('#empty').show();
            console.log('Empty cart message shown');
        }
        
        // Show the Add to Cart button for the associated flower
        $('button[id="' + itemID + '"]').show();
        console.log('Add to Cart button shown for: ' + itemID);
        
        // Update item count display
        $('#item-count').text(itemCount);
    });
    
    // ✅ REQUIREMENT 5: Star rating system - click event for star images
    $('.rating img').click(function() {
        console.log('Star clicked');
        
        // Get the rating value from data-rating attribute
        var rating = $(this).data('rating');
        var productId = $(this).closest('.rating').data('product');
        console.log('Rating: ' + rating + ' for product: ' + productId);
        
        // Get all star images in this rating container
        var $stars = $(this).closest('.rating').find('img');
        
        // Change image source of all stars to staroff.gif (reset all)
        $stars.attr('src', 'staroff.gif');
        console.log('All stars reset to off');
        
        // Change image source of clicked star and all previous stars to staron.gif
        $stars.slice(0, rating).attr('src', 'staron.gif');
        console.log('Stars 1 through ' + rating + ' turned on');
        
        // Alternative implementation using siblings and prevAll as mentioned in requirements:
        // Change the image source of all siblings of the clicked star to staroff.gif
        // $(this).siblings('img').attr('src', 'staroff.gif');
        
        // Change the image source of the clicked star to staron.gif
        // $(this).attr('src', 'staron.gif');
        
        // Change the image source of all previous stars to staron.gif
        // $(this).prevAll('img').attr('src', 'staron.gif');
    });
    
    // ✅ BONUS: Additional jQuery DOM traversing techniques
    
    // Hover effects for products using DOM traversing
    $('.product').hover(
        function() {
            // On mouseenter, find the product image and add a glow effect
            $(this).find('.product-image').css('box-shadow', '0 0 15px rgba(0, 100, 0, 0.5)');
            $(this).find('h3').css('color', '#228B22');
        },
        function() {
            // On mouseleave, remove effects
            $(this).find('.product-image').css('box-shadow', 'none');
            $(this).find('h3').css('color', '#006400');
        }
    );
    
    // Cart item counter animation
    function updateCartDisplay() {
        $('#item-count').fadeOut(200, function() {
            $(this).text(itemCount).fadeIn(200);
        });
    }
    
    // Enhanced cart functionality with animations
    $('.add').click(function() {
        // Add visual feedback when item is added
        $(this).closest('.product').animate({
            backgroundColor: '#e6ffe6'
        }, 300, function() {
            $(this).animate({
                backgroundColor: '#ffffff'
            }, 300);
        });
    });
    
    // Shopping cart summary
    function updateCartSummary() {
        var cartItems = $('.cartItem');
        var summary = '';
        
        if (cartItems.length > 0) {
            summary = 'Cart contains: ';
            cartItems.each(function(index) {
                var itemName = $(this).text().replace(' Remove', '');
                summary += itemName;
                if (index < cartItems.length - 1) {
                    summary += ', ';
                }
            });
        } else {
            summary = 'Cart is empty';
        }
        
        console.log('Cart Summary: ' + summary);
    }
    
    // DOM traversing examples for additional functionality
    
    // Find all products and add data attributes
    $('.product').each(function(index) {
        $(this).attr('data-product-index', index + 1);
        
        // Use DOM traversing to find related elements
        var productName = $(this).find('h3').text();
        var productPrice = $(this).find('.price').text();
        
        console.log('Product ' + (index + 1) + ': ' + productName + ' - ' + productPrice);
    });
    
    // Advanced DOM manipulation - product filtering (bonus feature)
    $('<div id="filter-controls"><button id="show-all">Show All</button><button id="hide-expensive">Hide Expensive ($15+)</button></div>')
        .insertBefore('#products-section h2');
    
    $('#show-all').click(function() {
        $('.product').show();
    });
    
    $('#hide-expensive').click(function() {
        $('.product').each(function() {
            var priceText = $(this).find('.price').text();
            var price = parseFloat(priceText.replace('$', ''));
            if (price >= 15) {
                $(this).hide();
            }
        });
    });
    
    console.log('=== ALL JQUERY DOM FUNCTIONALITY INITIALIZED ===');
    console.log('✅ Shopping cart with add/remove functionality');
    console.log('✅ Star rating system with DOM traversing');
    console.log('✅ Advanced jQuery techniques implemented');
    console.log('✅ DOM manipulation and traversing ready');
});