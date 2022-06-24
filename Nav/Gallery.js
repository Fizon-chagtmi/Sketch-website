$(function () {
    $(window).on('scroll', function () {
        if ( $(window).scrollTop() > 10 ) {
            $('.navbar').addClass('active');
        } else {
            $('.navbar').removeClass('active');
        }
    });
});
$('.gallery-nav ul li').click(function(){
       $('.gallery-nav ul li').removeClass('current');
       $(this).addClass('current');

       var data = $(this).attr('data-filter');
       $grid.isotope({
         filter: data
       })
     });


     if(document.getElementById("project-gallery")){
           var $grid = $(".grid").isotope({
             itemSelector: ".all",
             percentPosition: true,
             masonry: {
               columnWidth: ".all"
             }
           })
     };
