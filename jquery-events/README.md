# jQuery Events Demo

An interactive flower glossary demonstrating various jQuery event handlers and DOM manipulation techniques.

## 🌸 Live Demo

Open `jquery-events.html` in your browser to see the interactive demo in action!

## ✨ jQuery Events Requirements

### Assignment Requirements Implemented:

1. **✅ Mouseover and Mouseout Events on Headings**
   - Hover over any heading (h1, h2) to see color change to orange
   - Mouse out to reset color back to original

2. **✅ Hide Botanical Names and Display Individual Ones on Click**
   - All botanical names are hidden when page loads
   - Click any flower name to reveal its botanical name
   - Only one botanical name shows at a time

3. **✅ Hover Events to Display Images for Select Flowers**
   - Hover over underlined flowers (coneflower, mum, rose) to see images
   - Images appear beside the flower name at cursor position + 150px
   - Images hide when mouse moves off the flower

4. **✅ Keypress Events for Letter Navigation**
   - Type any letter (a-z) to jump to the first flower starting with that letter
   - Includes visual highlighting of the target section
   - Smooth scrolling for better user experience

### Interactive Events Implemented:
- **Mouseover/Mouseout Events**: Hover over headings to see color changes
- **Click Events**: Click on flower names to reveal botanical names
- **Hover Events with Images**: Hover over underlined flowers to see popup images
- **Keypress Events**: Press any letter (a-z) to jump to that section in the glossary
- **Dynamic CSS**: Real-time style changes and visual feedback

## 📁 Project Structure

```
jquery-events/
├── jquery-events.html      # Main demo page
├── glossary.html          # Complete flower glossary
├── glossary.js            # jQuery event handlers
├── glossary.css           # Styling and layout
├── script.js              # Additional JavaScript
├── coneflower.jpg         # Flower images
├── rose.jpg
├── yellow_pompom_mum.jpg
├── springbg.jpg           # Background images
├── fall.png
└── README.md              # This file
```

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Styling, backgrounds, and responsive design
- **jQuery 1.8.1**: Event handling and DOM manipulation
- **JavaScript**: Additional functionality and interactivity

## 🎯 jQuery Events Demonstrated

### 1. Document Ready
```javascript
$(document).ready(function() {
    // Initialize page state
    $('.botanic').hide();
    $('.imgdiv').hide();
});
```

### 2. Mouseover/Mouseout Events
```javascript
$('h1, h2').mouseover(function() {
    $(this).css('color', '#ff6600');
});
```

### 3. Click Events
```javascript
$('.flower').click(function() {
    $('.botanic').hide();
    $(this).children('.botanic').show();
});
```

### 4. Hover Events with Coordinates
```javascript
$('.pic').hover(function(evt) {
    var xPos = evt.pageX + 150;
    var yPos = evt.pageY;
    // Position and show image
});
```

### 5. Keypress Events
```javascript
$(document).keypress(function(evt) {
    var keyPressed = String.fromCharCode(evt.which).toLowerCase();
    window.location = "#" + keyPressed;
});
```

## 🚀 How to Use

1. **Clone or download** this repository
2. **Open** `jquery-events.html` in a web browser
3. **Interact** with the page:
   - Hover over headings
   - Click on flower names
   - Hover over underlined flowers
   - Press letter keys to navigate

## 📱 Browser Compatibility

- ✅ Chrome
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Internet Explorer 9+

## 🎓 Educational Purpose

This project was created for **Brookhaven College WebDev** to demonstrate:
- jQuery event handling
- DOM manipulation
- Interactive user interfaces
- Responsive design principles
- Clean code organization

## 📝 License

This project is for educational purposes. Feel free to use and modify for learning.

---

**Author**: Brookhaven College WebDev Student  
**Course**: Web Development  
**Date**: October 2025