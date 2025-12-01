/**
 * About Us Page - Custom JavaScript Functions and jQuery Effects
 * Meets assignment requirements:
 * - At least 1 JavaScript custom function
 * - At least 2 jQuery Effects
 * - No prompt() or alert() functions
 */

$(document).ready(function() {
    console.log('🚀 About Us page loaded - Interactive features ready!');
    
    // Initialize page animations
    initializePageAnimations();
    
    // Setup interactive demo buttons
    setupDemoButtons();
    
    // Setup navigation enhancements
    setupNavigationEffects();
    
    // Setup project link interactions
    setupProjectLinkEffects();
    
    // Setup scroll animations
    setupScrollAnimations();
});

// ===== CUSTOM JAVASCRIPT FUNCTION #1: Professional Summary Generator =====
function generateProfessionalSummary() {
    const skills = ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'Form Validation', 'Responsive Design'];
    const goals = ['Front-end Development', 'User Experience Design', 'Interactive Web Applications'];
    
    let summary = "Professional Summary: ";
    summary += `Skilled in ${skills.slice(0, 3).join(', ')} with expertise in ${skills.slice(3).join(' and ')}. `;
    summary += `Career focus on ${goals.join(', ')} to create engaging user experiences.`;
    
    return {
        summary: summary,
        skillCount: skills.length,
        goalCount: goals.length,
        timestamp: new Date().toLocaleTimeString()
    };
}

// ===== CUSTOM JAVASCRIPT FUNCTION #2: Technology Experience Calculator =====
function calculateTechnologyExperience() {
    const techData = {
        'HTML5': { hours: 40, projects: 5, proficiency: 85 },
        'CSS3': { hours: 35, projects: 5, proficiency: 80 },
        'JavaScript': { hours: 50, projects: 4, proficiency: 75 },
        'jQuery': { hours: 30, projects: 3, proficiency: 70 },
        'Git/GitHub': { hours: 20, projects: 5, proficiency: 65 }
    };
    
    let totalHours = 0;
    let totalProjects = 0;
    let avgProficiency = 0;
    let techCount = Object.keys(techData).length;
    
    for (let tech in techData) {
        totalHours += techData[tech].hours;
        totalProjects += techData[tech].projects;
        avgProficiency += techData[tech].proficiency;
    }
    
    avgProficiency = Math.round(avgProficiency / techCount);
    
    return {
        technologies: techCount,
        totalHours: totalHours,
        totalProjects: totalProjects,
        averageProficiency: avgProficiency,
        mostExperienced: 'JavaScript',
        recentFocus: 'jQuery Form Validation'
    };
}

// ===== CUSTOM JAVASCRIPT FUNCTION #3: Learning Progress Tracker =====
function trackLearningProgress() {
    const milestones = [
        { week: 1, topic: 'HTML Fundamentals', completed: true },
        { week: 2, topic: 'CSS Styling', completed: true },
        { week: 3, topic: 'JavaScript Basics', completed: true },
        { week: 4, topic: 'DOM Manipulation', completed: true },
        { week: 5, topic: 'jQuery Introduction', completed: true },
        { week: 6, topic: 'Form Validation', completed: true },
        { week: 7, topic: 'Final Project', completed: true }
    ];
    
    const completedCount = milestones.filter(m => m.completed).length;
    const progressPercentage = Math.round((completedCount / milestones.length) * 100);
    
    return {
        totalMilestones: milestones.length,
        completed: completedCount,
        progressPercentage: progressPercentage,
        currentPhase: 'Portfolio Development',
        nextGoals: ['Advanced JavaScript', 'React Framework', 'Backend Development']
    };
}

// ===== JQUERY EFFECT #1: Animated Tech Skills Display =====
function animateTechSkills() {
    console.log('✅ jQuery Effect 1: Animating tech skills with multiple effects');
    
    // First, hide all tech items
    $('.tech-item').hide();
    
    // Show them with staggered fade-in and slide effects
    $('.tech-item').each(function(index) {
        $(this).delay(index * 200).fadeIn(600).queue(function() {
            $(this).addClass('bounce-in').dequeue();
        });
    });
    
    // Add hover enhancement with color change
    setTimeout(() => {
        $('.tech-item').hover(
            function() {
                $(this).animate({
                    backgroundColor: '#e8f5e8',
                    borderColor: '#4a7c59'
                }, 300);
            },
            function() {
                $(this).animate({
                    backgroundColor: '#f8f9fa',
                    borderColor: 'transparent'
                }, 300);
            }
        );
    }, 1500);
    
    return "Tech skills animation completed with fade-in, bounce, and hover effects!";
}

// ===== JQUERY EFFECT #2: Section Content Toggle with Slide Animation =====
function toggleSectionContent() {
    console.log('✅ jQuery Effect 2: Toggle section content with slide animations');
    
    const sections = $('.about-section .content-box');
    
    // Slide up all content boxes
    sections.slideUp(800, function() {
        // After sliding up, slide them back down with enhanced styling
        $(this).css({
            'background': 'linear-gradient(135deg, #f0f8f0 0%, #e8f5e8 100%)',
            'border': '2px solid #4a7c59'
        }).slideDown(800, function() {
            // Add pulse effect after sliding down
            $(this).addClass('pulse');
            
            // Remove pulse class after animation
            setTimeout(() => {
                $(this).removeClass('pulse');
            }, 1000);
        });
    });
    
    return "Section content toggled with slide and pulse animations!";
}

// ===== JQUERY EFFECT #3: Slide Demo with Multiple Animations =====
function performSlideDemo() {
    console.log('✅ jQuery Effect 3: Complex slide demonstration');
    
    const demoResult = $('#demo-result');
    
    // Create dynamic content for the demo
    const demoContent = `
        <div class="slide-demo-content">
            <h4>🎉 Interactive Slide Demo Active!</h4>
            <p>Experience: ${calculateTechnologyExperience().totalHours} hours of coding</p>
            <p>Progress: ${trackLearningProgress().progressPercentage}% complete</p>
            <div class="progress-bar-container">
                <div class="progress-bar"></div>
            </div>
        </div>
    `;
    
    // Slide up current content, replace, and slide down with new content
    demoResult.slideUp(400, function() {
        $(this).html(demoContent).addClass('active');
        $(this).slideDown(600, function() {
            // Animate the progress bar
            $('.progress-bar').animate({
                width: trackLearningProgress().progressPercentage + '%'
            }, 1500);
        });
    });
    
    // Add some CSS for the progress bar
    if (!$('#progress-bar-styles').length) {
        $('<style id="progress-bar-styles">')
            .html(`
                .progress-bar-container {
                    background: #e9ecef;
                    height: 10px;
                    border-radius: 5px;
                    margin: 10px 0;
                    overflow: hidden;
                }
                .progress-bar {
                    background: linear-gradient(135deg, #4a7c59 0%, #2c5f41 100%);
                    height: 100%;
                    width: 0%;
                    border-radius: 5px;
                    transition: width 1.5s ease-in-out;
                }
                .slide-demo-content h4 {
                    color: #2c5f41;
                    margin-bottom: 15px;
                }
            `)
            .appendTo('head');
    }
    
    return "Slide demo with progress animation completed!";
}

// ===== CUSTOM FUNCTION DEMO: Display Professional Summary =====
function displayCustomFunctionDemo() {
    console.log('✅ Custom Function Demo: Professional summary generation');
    
    const demoResult = $('#demo-result');
    const summary = generateProfessionalSummary();
    const experience = calculateTechnologyExperience();
    const progress = trackLearningProgress();
    
    const customContent = `
        <div class="custom-function-demo">
            <h4>📊 Custom Function Results</h4>
            <div class="summary-grid">
                <div class="summary-item">
                    <strong>Professional Summary:</strong>
                    <p>${summary.summary}</p>
                    <small>Generated at: ${summary.timestamp}</small>
                </div>
                <div class="summary-item">
                    <strong>Experience Metrics:</strong>
                    <ul>
                        <li>${experience.totalHours} total learning hours</li>
                        <li>${experience.totalProjects} projects completed</li>
                        <li>${experience.averageProficiency}% average proficiency</li>
                        <li>Strongest in: ${experience.mostExperienced}</li>
                    </ul>
                </div>
                <div class="summary-item">
                    <strong>Learning Progress:</strong>
                    <ul>
                        <li>${progress.completed}/${progress.totalMilestones} milestones achieved</li>
                        <li>${progress.progressPercentage}% course completion</li>
                        <li>Current phase: ${progress.currentPhase}</li>
                    </ul>
                </div>
            </div>
        </div>
    `;
    
    // Fade out current content, replace with custom function results, fade in
    demoResult.fadeOut(400, function() {
        $(this).html(customContent).addClass('active');
        $(this).fadeIn(600);
        
        // Add staggered animation to summary items
        $('.summary-item').each(function(index) {
            $(this).css('opacity', 0).delay(index * 300).animate({
                opacity: 1
            }, 500);
        });
    });
    
    // Add styles for the custom function demo
    if (!$('#custom-demo-styles').length) {
        $('<style id="custom-demo-styles">')
            .html(`
                .summary-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 15px;
                    margin: 15px 0;
                }
                .summary-item {
                    background: white;
                    padding: 15px;
                    border-radius: 8px;
                    border-left: 4px solid #4a7c59;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
                }
                .summary-item strong {
                    color: #2c5f41;
                    display: block;
                    margin-bottom: 8px;
                }
                .summary-item ul {
                    margin: 8px 0;
                    padding-left: 20px;
                }
                .summary-item li {
                    margin: 4px 0;
                }
            `)
            .appendTo('head');
    }
    
    return "Custom function demo displaying professional metrics!";
}

// Initialize page animations
function initializePageAnimations() {
    // Animate sections on page load
    $('.about-section').each(function(index) {
        $(this).css('opacity', 0).delay(index * 200).animate({
            opacity: 1
        }, 800);
    });
}

// Setup demo button interactions
function setupDemoButtons() {
    $('#animateBoxes').click(function() {
        const result = animateTechSkills();
        console.log(result);
    });
    
    $('#toggleContent').click(function() {
        const result = toggleSectionContent();
        console.log(result);
    });
    
    $('#slideDemo').click(function() {
        const result = performSlideDemo();
        console.log(result);
    });
    
    $('#customFunction').click(function() {
        const result = displayCustomFunctionDemo();
        console.log(result);
    });
}

// Setup navigation effects
function setupNavigationEffects() {
    $('.nav-link').hover(
        function() {
            $(this).animate({
                paddingTop: '15px',
                paddingBottom: '15px'
            }, 200);
        },
        function() {
            $(this).animate({
                paddingTop: '10px',
                paddingBottom: '10px'
            }, 200);
        }
    );
}

// Setup project link effects
function setupProjectLinkEffects() {
    $('.project-btn').click(function(e) {
        // Add click animation
        $(this).animate({
            transform: 'scale(0.95)'
        }, 100, function() {
            $(this).animate({
                transform: 'scale(1)'
            }, 100);
        });
        
        // Don't prevent default - let links work normally
    });
}

// Setup scroll animations
function setupScrollAnimations() {
    $(window).scroll(function() {
        const scrollTop = $(window).scrollTop();
        const windowHeight = $(window).height();
        
        $('.about-section').each(function() {
            const elementTop = $(this).offset().top;
            const elementHeight = $(this).height();
            
            // Add highlight effect when section is in viewport
            if (scrollTop + windowHeight > elementTop + elementHeight / 4) {
                if (!$(this).hasClass('in-viewport')) {
                    $(this).addClass('in-viewport');
                    $(this).find('.section-header').addClass('slide-in');
                }
            }
        });
    });
}