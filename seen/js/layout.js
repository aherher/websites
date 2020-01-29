$(document).ready(function(e) {
	var win_width = $(window).width();
	var win_height = $(document).height();
	//메뉴기능
    $(".menu_btn").click(function (){
		$("body").css("height",	win_height);
		$("body").css("overflow", "hidden");
		$(".menu_wrap").show();
		$(".blck_bg").fadeIn(300);
		$(".the_menus").animate({left:0+"%"}, 300);
		$(".quick_wrap").css("z-index", 0);
		});
	$(".close_btn").click(function (){
	    $("body").css("height", "auto");
		$("body").css("overflow", "inherit");
		$(".blck_bg").fadeOut(300);
		$(".quick_wrap").css("z-index", 1);
		/*if (win_width > 681){
		$(".the_menus").animate({right:-585+"px"}, 300, function (){
			$(".menu_wrap").hide();
			});
		} else if (win_width < 681){
			$(".the_menus").animate({right:-585+"px"}, 300, function (){
			$(".menu_wrap").hide();
			});
			};*/

		$(".the_menus").animate({left:-585+"px"}, 300, function (){
			$(".menu_wrap").hide();
			});
		});
	$(".menu_cover .blck_bg").click(function (){
		 $("body").css("height", "auto");
		$("body").css("overflow", "inherit");
		$(".blck_bg").fadeOut(300);
		$(".quick_wrap").css("z-index", 1);
		$(".the_menus").animate({left:-585+"px"}, 300, function (){
			$(".menu_wrap").hide();
			});
		});

	//검색창 기능
	$(".srch_box").click(function (){
	    $("body").css("height",	win_height);
		$("body").css("overflow", "hidden");
		//$(".the_sch").show().animate({opacity:1}, 300);
		//$(".blck_bg").show().animate({opacity:0.6}, 300);
		$(".the_sch").fadeIn(300);
		$(".blck_bg").fadeIn(300);
		});
	$(".close_srcpop").click(function (){
		$("body").css("height", "auto");
		$("body").css("overflow", "inherit");
		/*$(".blck_bg").animate({opacity:0}, 300, function (){
			$(".blck_bg").hide()
			})
		$(".the_sch").animate({opacity:0}, 300, function (){
			$(".the_sch").hide()
			})*/
		$(".the_sch").fadeOut(300);
		$(".blck_bg").fadeOut(300);
		});

	//선택요소 더보기 기능
	$(".ssre").click(function (){
		$(".more_view").slideToggle(300);
		var inname = $(this).find("span").attr("class");
		if (inname === "down_btn"){
			$(".down_btn").removeClass("down_btn").addClass("up_btn");
			} else if (inname === "up_btn"){
			$(".up_btn").removeClass("up_btn").addClass("down_btn");
			};
		});

	//색상
	$(".drop_wrap").click(function (){
		$(this).next(".drop_con").slideToggle(300);
		});

	$(".up_btn").click(function (){
		alert();
		$(".more_view").slideUp(300);
		$(this).removeClass("up_btn");
		$(this).addClass("down_btn");
		});

	//제품리스트 오버기능
	$(".product_list li:not(:animated)").mouseenter(function (){
		var more = $('<div class="in_over"><div class="in_more">MORE</div></div>');
		var img_dep = $(this).find(".om")
		$(more).prependTo(img_dep);
		$(".in_over").animate({opacity:1}, 300);
		});
	$(".product_list li").mouseleave(function (){
		$(this).find(".in_over").animate({opacity:0}, 200, function (){
			$(this).remove();
			});
		});

	//퀵메뉴기능
	/* $(window).scroll(function (){
		var inScroll = $(this).scrollTop();
		var theIt = inScroll;
		if (inScroll > 0){
		$(".sub_right").animate().stop();
		$(".sub_right").animate().animate({top:theIt}, 100);

		}else if (inScroll < 0){
		$(".sub_right").animate().stop().animate({top:100}, 100);
		};
        });	*/
	 $(".go_top").click(function (){
		 $(window).scrollTop(0);
		 });
	 $(".go_bottom").click(function (){

		 $(window).scrollTop($(document).height());
		 });

	//배너 즐겨찾기 별모양
		/*$(".favor").click(function (){
			var fav_img = $(this).children("img");
			var fav_cl = $(fav_img).attr("class");
			//alert(fav_id);
			if (fav_cl === "fav_on"){
				$(fav_img).attr("src", $(fav_img).attr("src").replace(/^(.+)_on(\.[a-z]+)$/, "$1$2"));
				$(fav_img).removeClass("fav_on");
				} else if (fav_cl !== "fav_on"){
			    $(fav_img).attr("src", $(fav_img).attr("src").replace(/^(.+)(\.[a-z]+)$/, "$1_on$2"));
			 	$(fav_img).addClass("fav_on");
			};
			return false;
			});	*/
		$(".fav_gray").click(function (){
			$(this).removeClass("fav_gray");
			$(this).addClass("fav_red");
			});
		$(".fav_red").click(function (){
			$(this).removeClass("fav_red");
			$(this).addClass("fav_gray");
			});

	//상품리스트페이지 검색 부분
	var head_h = $(".header_wrap").outerHeight();
	$(".src_area").css("top", head_h);
	var srcroll_top = $(window).scrollTop();

	if ($(window).width() > 620 && srcroll_top < 15){
		$(".src_area").css("padding-top", 60).css("padding-bottom", 60);
		} else if ($(window).width() < 620 && srcroll_top > 15){
			$(".src_area").css("padding-top", 10).css("padding-bottom", 10);
			};

	var topHeight = head_h + $(".src_area").outerHeight();
	$(".srced_con").css("margin-top", topHeight);

	$(window).scroll(function (){
		if($(window).scrollTop() > 15) {
			$(".src_area").css("padding-top", 10).css("padding-bottom", 10);
			} else if ($(window).width() > 620 && $(window).scrollTop() < 15){
				$(".src_area").css("padding-top", 60).css("padding-bottom", 60);
				};
		var topHeight = $(".header_wrap").outerHeight() + $(".src_area").outerHeight();
     	$(".srced_con").css("margin-top", topHeight);
		});


	$(window).resize(function (){
	   if ($(window).width() > 620 && $(window).scrollTop() < 15){
		$(".src_area").css("padding-top", 60).css("padding-bottom", 60);
		}; if ($(window).width() < 620){
			$(".src_area").css("padding-top", 10).css("padding-bottom", 10);
			};
		var head_h = $(".header_wrap").outerHeight();
     	$(".src_area").css("top", head_h);
		var topHeight = head_h + $(".src_area").outerHeight();
     	$(".srced_con").css("margin-top", topHeight);

		});

});
