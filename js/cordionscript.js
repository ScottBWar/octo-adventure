$(document).ready(function() {
    function close_cordion_section() {
        $('.cordion .cordion-section-title').removeClass('act');
        $('.cordion .cordion-section-content').slideUp(300).removeClass('open');
    }
 
    $('.cordion-section-title').click(function(e) {
        // Grab current anchor value
        var currentAttrValue = $(this).attr('href');
 
        if($(e.target).is('.act')) {
            close_cordion_section();
        }else {
            close_cordion_section();
 
            // Add active class to section title
            $(this).addClass('act');
            // Open up the hidden content panel
            $('.cordion ' + currentAttrValue).slideDown(300).addClass('open'); 
        }
 
        e.preventDefault();
    });
});