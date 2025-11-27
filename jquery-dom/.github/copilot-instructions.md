# Copilot Instructions - jQuery Learning Projects

## Project Overview
This is a collection of educational jQuery projects demonstrating DOM manipulation, form validation, and photo gallery features. The codebase follows academic assignment patterns with comprehensive requirement tracking and demo functionality.

## Architecture & Structure

### Core Components
- **DOM Manipulation Demo** (`jquery-dom.html` + inline styles) - Shopping cart with dynamic calculations
- **Form Validation** (`jquery-form-validation.html` + `orderform.js`) - Complete form with real-time validation
- **Photo Gallery** (`jquery-gallery.html` + `gallery.js`) - Interactive thumbnail gallery with preloading

### File Naming Conventions
- HTML files: `jquery-[feature].html` (main demos)
- JavaScript: `[feature].js` (dedicated logic) or inline `<script>` tags
- CSS: `[feature].css` (component-specific styling)
- Assets: Direct references (`pansy1.jpg`, `yellow_pompom_mum.jpg`, etc.)

## Development Patterns

### jQuery Implementation Style
```javascript
// Standard pattern: Document ready with requirement comments
$(document).ready(function() {
    console.log('🚀 [Feature Name] - Loading requirements...');
    
    // ===== REQUIREMENT: [Specific requirement] =====
    $('#selector').on('event', function() {
        // Implementation
        console.log('✅ [Requirement completed]');
    });
});
```

### Form Validation Approach
- **Real-time validation**: Use `blur` events for immediate feedback
- **Validation functions**: Individual functions per field type (`validateName()`, `validateEmail()`, `validateZip()`)
- **Error display**: Dedicated error span elements with class `error`
- **Copy address feature**: Checkbox-driven field population with state synchronization

### Event Handling Patterns
- Prevent default: `e.preventDefault()` for custom link behavior
- Hover effects: `.hover()` with CSS property manipulation
- Form submission: Comprehensive re-validation before allowing submit
- Calculation triggers: Multiple events (`blur`, `change`, `input`) for responsive updates

## Key Technical Details

### jQuery Version & CDN
Uses Google CDN: `https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js`
(Note: `shopping.html` uses older 1.11.3 version)

### Image Management
- **Preloading**: Programmatic `new Image()` creation for gallery performance
- **Dynamic src swapping**: Click handlers update large image via `.attr('src')`
- **Rollover effects**: CSS property manipulation for hover states

### Calculation Logic
- **Order totals**: Real-time calculation based on quantity inputs (`.qty` class)
- **Tax/Shipping**: State-dependent calculations in form validation demos
- **Dynamic DOM**: Cart items added/removed with fade animations

## Assignment-Specific Features

### Requirement Tracking
Each major feature includes visible requirement checklists with ✅ indicators. When adding features, maintain this documentation pattern for educational clarity.

### Console Logging
Extensive console output for debugging and requirement verification. Keep `console.log()` statements for educational value.

### Cross-Navigation
Navigation links between demos use `jquery-[feature].html` pattern. External links to GitHub repo are hardcoded.

## Common Pitfalls
- **Form validation**: Always re-validate all fields on submit, not just changed fields
- **Image paths**: Direct file references without subdirectories
- **State management**: Copy address feature requires both field copying AND dropdown synchronization
- **Event binding**: Use specific selectors (`.qty`, `.thumb`) rather than generic classes

## Testing Approach
Manual testing expected - try invalid inputs, use copy address checkbox, test all interactive features. No automated testing framework present.