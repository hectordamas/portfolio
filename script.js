$('.bar-link, .mail').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate(
      {
        scrollTop: $($(this).attr('href')).offset().top,
      },
      1000,
      'linear'
    )
  });

$(".bar").each(function() {
    $(this).waypoint(function() {
        var progress = $(".progress");
        progress.each(function(index){
            $(this).css("width", $(this).attr("aria-valuenow") + "%");
        });
    }, 
{
    triggerOnce: true,
    offset: '15%'
  });
});