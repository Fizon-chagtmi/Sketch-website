$(function () {
    $(window).on('scroll', function () {
        if ( $(window).scrollTop() > 10 ) {
            $('.navbar').addClass('active');
        } else {
            $('.navbar').removeClass('active');
        }
    });
});

let timeline = gsap.timeline();

timeline.to(".image-wrap", {
  height: "550px",
  backgroundSize: "100%",
  duration: 1.5,
  ease: "power4.inOut",
})
.to(
  ".image-wrap", {
    height: "250px",
    backgroundPosition: "50% 58%",
    duration: 1.3,
    y: "0",
    ease: "power3.inOut",
  }, 1.5)
  .from(".big-name", {
    y: "1000px",
    duration: 1.3,
    ease: "power3.inOut",
  }, 1.5)
  .from(".hide", {
    opacity: "0",
    duration: 1.3,
    ease: "power3.inOut",
  }, 1.5);

function getYDistance(el) {
  return ( window.innerheight - document.querySelector(el).getBoundingClientRect().top );
}
