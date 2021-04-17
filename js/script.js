$(function(){  
  $("#waterfallArea img").click(function(){
    var N = $(this).attr("id").substr(3);
    $("#bigimg").attr( "src" , "img/item_" + N + ".jpg" );
  });
});
function imgbig() { 
  $("#big").css("display","block");
  $("#bigimg").css("display","block");
}
function closeimg() {
    $("#big").css("display","none");
    $("#bigimg").css("display","none");
}



$(function() { 
      $('#waterfallArea').imagesLoaded(function() {
           $('#waterfallArea').masonry({
              itemSelector: '.item',
              columnWidth: 30, 
               animate: true,
               horizontalOrder: true,
               originTop: true
           });
      });
      $('#waterfallArea').imagesLoaded().always( function( instance ) {
           $('.product').fadeOut();
      });
});


$('#waterfallArea').masonry({
  itemSelector: '.item'
})
