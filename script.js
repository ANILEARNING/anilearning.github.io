// $(document).ready(function(){
//     $(window).scroll(function(){
//         // sticky navbar on scroll script
//         if(this.scrollY > 20){
//             $('.navbar').addClass("sticky");
//         }else{
//             $('.navbar').removeClass("sticky");
//         }
        
//         // scroll-up button show/hide script
//         if(this.scrollY > 500){
//             $('.scroll-up-btn').addClass("show");
//         }else{
//             $('.scroll-up-btn').removeClass("show");
//         }
//     });

//     // slide-up script
//     $('.scroll-up-btn').click(function(){
//         $('html').animate({scrollTop: 0});
//         // removing smooth scroll on slide-up button click
//         $('html').css("scrollBehavior", "auto");
//     });

//     $('.navbar .menu li a').click(function(){
//         // applying again smooth scroll on menu items click
//         $('html').css("scrollBehavior", "smooth");
//     });

//     // toggle menu/navbar script
//     $('.menu-btn').click(function(){
//         $('.navbar .menu').toggleClass("active");
//         $('.menu-btn i').toggleClass("active");
//     });

//     // typing text animation script
//     var typed = new Typed(".typing", {
//         strings: ["Data Science Mentor", "Sports Data Analyst", "Visualisation Specialist"],
//         typeSpeed: 100,
//         backSpeed: 60,
//         loop: true
//     });

//     var typed = new Typed(".typing-2", {
//         strings: ["Freelancer", "Blogger", "Instructor"],
//         typeSpeed: 100,
//         backSpeed: 60,
//         loop: true
//     });

//     // owl carousel script
//     $('.carousel').owlCarousel({
//         margin: 20,
//         loop: true,
//         autoplay: true,
//         autoplayTimeOut: 2000,
//         autoplayHoverPause: true,
//         responsive: {
//             0:{
//                 items: 1,
//                 nav: false
//             },
//             600:{
//                 items: 2,
//                 nav: false
//             },
//             1000:{
//                 items: 3,
//                 nav: false
//             }
//         }
//     });
// });
$(document).ready(function(){
    // Smooth scrolling speed adjustment
    const scrollSpeed = 800; // in milliseconds - higher is slower
    
    // On scroll events for navbar and scroll button
    $(window).scroll(function(){
        // Sticky navbar on scroll script with smoother transition
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
        
        // Scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
        
        // Fade-in animations for elements as they come into view
        $('.fade-in').each(function() {
            if($(this).offset().top < $(window).scrollTop() + $(window).height() * 0.9) {
                $(this).addClass('visible');
            }
        });
    });

    // Scroll-up button functionality
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0}, scrollSpeed);
        // Removing smooth scroll on slide-up button click for instant response
        $('html').css("scrollBehavior", "auto");
    });

    // Smooth scroll for menu items
    $('.navbar .menu li a').click(function(e){
        // Get the href attribute
        var targetSection = $(this).attr('href');
        
        // Only prevent default for page anchors
        if(targetSection.charAt(0) === '#') {
            e.preventDefault();
            
            // Applying smooth scroll on menu items click
            $('html').css("scrollBehavior", "smooth");
            
            // Custom smooth scrolling
            $('html, body').animate({
                scrollTop: $(targetSection).offset().top - 60 // Offset for fixed header
            }, scrollSpeed);
            
            // Close mobile menu when clicked
            $('.navbar .menu').removeClass("active");
            $('.menu-btn i').removeClass("active");
        }
    });

    // Toggle menu/navbar script with smoother animation
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    
    // Close menu when clicking outside
    $(document).click(function(event) {
        if (!$(event.target).closest('.navbar').length && 
            !$(event.target).is('.menu-btn') && 
            $('.navbar .menu').hasClass('active')) {
            $('.navbar .menu').removeClass("active");
            $('.menu-btn i').removeClass("active");
        }
    });

    // Updated typing text animation script with relevant skills
    var typed = new Typed(".typing", {
        strings: ["Data Scientist", "Sports Analyst", "Visualization Expert", "Cricket Analyst"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true,
        backDelay: 1500 // Delay after typing completes
    });

    var typed = new Typed(".typing-2", {
        strings: ["Freelancer", "Mentor", "Sports Analyst", "Data Visualization Expert"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true,
        backDelay: 1500 // Delay after typing completes
    });

    // Enhanced testimonial carousel with navigation and autoplay
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000, // Longer timeout for better readability
        autoplayHoverPause: true,
        smartSpeed: 800, // Transition speed
        dots: true,
        nav: true, // Enable navigation arrows
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'], // Custom navigation icons
        responsive: {
            0:{
                items: 1,
                nav: true
            },
            600:{
                items: 2,
                nav: true
            },
            1000:{
                items: 3,
                nav: true
            }
        }
    });
    
    // Handle LinkedIn button clicks in testimonials
    $('.testimonial-linkedin').on('click', function(e) {
        e.stopPropagation(); // Prevent triggering parent card click events
    });
    
    // Add fade-in class to elements for scroll animations
    $('.about-content, .serv-content .card, .skills-content .column, .contact-content .column').addClass('fade-in');
    
    // Form validation and submission
    $('form').submit(function(e) {
        e.preventDefault();
        let isValid = true;
        
        // Basic validation
        $(this).find('[required]').each(function() {
            if($(this).val().trim() === '') {
                isValid = false;
                $(this).addClass('error');
            } else {
                $(this).removeClass('error');
            }
        });
        
        if(isValid) {
            // Form submission animation
            $('.button-area button').text('Sending...');
            
            // Simulate form submission (replace with actual form submission)
            setTimeout(function() {
                $('form')[0].reset();
                $('.button-area button').text('Message Sent!');
                
                setTimeout(function() {
                    $('.button-area button').text('Send message');
                }, 3000);
            }, 1500);
        }
    });
    
    // Add CSS for fade-in animations
    const style = document.createElement('style');
    style.innerHTML = `
        .fade-in {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.8s ease, transform 0.8s ease;
        }
        .fade-in.visible {
            opacity: 1;
            transform: translateY(0);
        }
        .error {
            border-color: #e74c3c !important;
        }
    `;
    document.head.appendChild(style);
});