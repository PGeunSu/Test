
  

$(function () {

  var w;
  var h;
  $(window).resize(function(){
    w = $(window).width();
        h = $(window).height();
    $('article').width(w);
    $('article').height(h);
  });
  $(window).trigger('resize');

$('.lnb > li').click(function(){
  var i = $(this).index();
  var nowLeft = $('.section').eq(i).offset().left;
  $('html,body').stop().animate({'scrollLeft':nowLeft},1300);
  return false;
});

$(window).scroll(function () {
    
   var sct = ($(this).scrollLeft())


if(sct >= $("article").eq(0).offset().left){
    $("nav ul li").removeClass("on");
    $("nav ul li").eq(0).addClass("on");
  }
  if(sct >= $("article").eq(1).offset().left){
    $("nav ul li").removeClass("on");
    $("nav ul li").eq(1).addClass("on");
  }
  if(sct >= $("article").eq(2).offset().left){
    $("nav ul li").removeClass("on");
    $("nav ul li").eq(2).addClass("on");
  }
  if(sct >= $("article").eq(3).offset().left){
    $("nav ul li").removeClass("on");
    $("nav ul li").eq(3).addClass("on");
  }

 });

 $('article').mousewheel(function(event,d){
   
    if(d>0){
      var prev = $(this).prev().offset().left;
      $('html,body').stop().animate({scrollLeft:prev},1300,'easeOutBounce');
   
    }
    if(d<0){
      var next = $(this).next().offset().left;
      $('html,body').stop().animate({scrollLeft:next},1300,'easeOutBounce');
     
    }
});



});
