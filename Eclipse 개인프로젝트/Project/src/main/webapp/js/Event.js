$(function(){ //메뉴바 리스트 구현
	$(".s598-gnb-pc .s598-gnb-wrap .navi .menu-1depth:nth-child(2)").mouseenter(function(){
		$(".s598-gnb-pc .s598-gnb-wrap .navi").css("box-shadow","rgb(0,0,0,0.2) 0px 13px 25px -10px").css("height","345px")
		$(".s598-gnb-pc .s598-gnb-wrap .s598-navi .menu-1depth:nth-child(2) > .menu-panel").css("display","block").css("z-index","2").css("opacity","1")
	});
	
	$(".s598-gnb-pc .s598-gnb-wrap .navi .menu-1depth:nth-child(2)").mouseleave(function(){
		$(".s598-gnb-pc .s598-gnb-wrap .navi").css("box-shadow","none").css("height","86px")
		$(".s598-gnb-pc .s598-gnb-wrap .s598-navi .menu-1depth:nth-child(2) > .menu-panel").css("display","none").css("z-index","1").css("opacity","0")
	});
	$(".s598-gnb-pc .s598-gnb-wrap .navi .menu-1depth:nth-child(3)").mouseenter(function(){
		$(".s598-gnb-pc .s598-gnb-wrap .navi").css("box-shadow","rgb(0,0,0,0.2) 0px 13px 25px -10px").css("height","464px")
		$(".s598-gnb-pc .s598-gnb-wrap .s598-navi .menu-1depth:nth-child(3) > .menu-panel").css("display","block").css("z-index","2").css("opacity","1")
	});
	
	$(".s598-gnb-pc .s598-gnb-wrap .navi .menu-1depth:nth-child(3)").mouseleave(function(){
		$(".s598-gnb-pc .s598-gnb-wrap .navi").css("box-shadow","none").css("height","86px")
		$(".s598-gnb-pc .s598-gnb-wrap .s598-navi .menu-1depth:nth-child(3) > .menu-panel").css("display","none").css("z-index","1").css("opacity","0")
	});
	$(".s598-gnb-pc .s598-gnb-wrap .navi .menu-1depth:nth-child(4)").mouseenter(function(){
		$(".s598-gnb-pc .s598-gnb-wrap .navi").css("box-shadow","rgb(0,0,0,0.2) 0px 13px 25px -10px").css("height","345px")
		$(".s598-gnb-pc .s598-gnb-wrap .s598-navi .menu-1depth:nth-child(4) > .menu-panel").css("display","block").css("z-index","2").css("opacity","1")
	});
	
	$(".s598-gnb-pc .s598-gnb-wrap .navi .menu-1depth:nth-child(4)").mouseleave(function(){
		$(".s598-gnb-pc .s598-gnb-wrap .navi").css("box-shadow","none").css("height","86px")
		$(".s598-gnb-pc .s598-gnb-wrap .s598-navi .menu-1depth:nth-child(4) > .menu-panel").css("display","none").css("z-index","1").css("opacity","0")
	});
	$(".s598-gnb-pc .s598-gnb-wrap .navi .menu-1depth:nth-child(5)").mouseenter(function(){
		$(".s598-gnb-pc .s598-gnb-wrap .navi").css("box-shadow","rgb(0,0,0,0.2) 0px 13px 25px -10px").css("height","345px")
		$(".s598-gnb-pc .s598-gnb-wrap .s598-navi .menu-1depth:nth-child(5) > .menu-panel").css("display","block").css("z-index","2").css("opacity","1")
	});
	
	$(".s598-gnb-pc .s598-gnb-wrap .navi .menu-1depth:nth-child(5)").mouseleave(function(){
		$(".s598-gnb-pc .s598-gnb-wrap .navi").css("box-shadow","none").css("height","86px")
		$(".s598-gnb-pc .s598-gnb-wrap .s598-navi .menu-1depth:nth-child(5) > .menu-panel").css("display","none").css("z-index","1").css("opacity","0")
	});
	$(".s598-gnb-pc .s598-gnb-wrap .navi .menu-1depth:nth-child(6)").mouseenter(function(){
		$(".s598-gnb-pc .s598-gnb-wrap .navi").css("box-shadow","rgb(0,0,0,0.2) 0px 13px 25px -10px").css("height","345px")
		$(".s598-gnb-pc .s598-gnb-wrap .s598-navi .menu-1depth:nth-child(6) > .menu-panel").css("display","block").css("z-index","2").css("opacity","1")
	});
	
	$(".s598-gnb-pc .s598-gnb-wrap .navi .menu-1depth:nth-child(6)").mouseleave(function(){
		$(".s598-gnb-pc .s598-gnb-wrap .navi").css("box-shadow","none").css("height","86px")
		$(".s598-gnb-pc .s598-gnb-wrap .s598-navi .menu-1depth:nth-child(6) > .menu-panel").css("display","none").css("z-index","1").css("opacity","0")
	});
	$(".s598-gnb-pc .s598-gnb-wrap .navi .menu-1depth:nth-child(7)").mouseenter(function(){
		$(".s598-gnb-pc .s598-gnb-wrap .navi").css("box-shadow","rgb(0,0,0,0.2) 0px 13px 25px -10px").css("height","345px")
		$(".s598-gnb-pc .s598-gnb-wrap .s598-navi .menu-1depth:nth-child(7) > .menu-panel").css("display","block").css("z-index","2").css("opacity","1")
	});
	
	$(".s598-gnb-pc .s598-gnb-wrap .navi .menu-1depth:nth-child(7)").mouseleave(function(){
		$(".s598-gnb-pc .s598-gnb-wrap .navi").css("box-shadow","none").css("height","86px")
		$(".s598-gnb-pc .s598-gnb-wrap .s598-navi .menu-1depth:nth-child(7) > .menu-panel").css("display","none").css("z-index","1").css("opacity","0")
	});
	
	
	//footer select option	
	$(document).on(	"click",".s593 .family-site .combobox__button",function(){ 
		
		$(this).toggleClass("is-opened") 
		if($(".s593 .footer-site .combobox__scroll").hasClass("is-opened") == false){ //닫혀있을 때
		$(".s593 .footer-site .combobox__scroll").addClass("has-scrollbar").addClass("is-opened").css("display","block").css("touch-action","none")			
		}else{ //열려 있을 때
			$(".s593 .footer-site .combobox__scroll").removeClass("is-opened").css("display","none")
		};
	});
	
	
	
	});
	
	//swiper
	 var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
		
