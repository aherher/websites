$(document).ready(function(e) {
		//�޴�
	$(".menu > .gs03").mouseenter(function (){	
	   $(".gsub").hide();
       $(this).find(".gsub").show();
	   $(".gsub_bg").show();	   
		   });	
    $(".menu > .gs03").mouseleave(function (){
		$(".gsub").hide();
		$(".gsub_bg").hide();
		});

/*    $(".header_wrap").hover(function (){
		$(this).addClass("on_head");		
		}, function (){
			$(this).removeClass("on_head");		
			});*/
	
	$(window).scroll(function (){
     if ($(window).scrollTop() < 110) {	
				$(".the_top").fadeOut(300);
				} else if ($(window).scrollTop() > 110){			      
					$(".the_top").fadeIn(300); 
			    }; 				
	 });
	 
//���� �̹��� �Ѹ�
	$(".slide li").first().show();
	var i = 0;	
	var ims = $(".slide li").length -1; // �� ����
	var total = $(".slide li").length;
	var count = i + 1; 
	$(".img_nums .current").text("0" + count);
	$(".img_nums .alls").text("0" + total);
	var onplay = true;
	//$(".slide_wrap").css("height", $(window).height());
	
	//�⺻ �Ѹ� ���
	function rolling (){
		$(".slide li").fadeOut(1000);
		$(".slide li").eq(i).fadeIn(1000);	
		var count = i + 1; 		
		$(".img_nums .current").text("0" + count);
		};
		
	//�̹��� �� ���� �� ��Ʈ. ����.	
	function fade() {
	  if(onplay == true){
		 if (i < ims){i++;}
		 else if (i >= ims){i = 0;};
		 rolling ();
	  } else if (onplay == false){
		  return false;
		  };
		};	
		
	//��Ŭ��
	function click_right (){
		if(i < ims){
		i++;
		rolling ();
		} else if (i >= ims){
		i = 0;
		rolling ();
			};		
		};	
	$(".next").on("click",function (){
		click_right();
		});
		
	//��Ŭ��
	function click_left (){
		if(i == 0){
		i = ims;
		rolling ();
		} else if (i <= ims){
		i -= 1;
		rolling ();
			};
		};	
	$(".prev").on("click",function (){
		click_left ();
		});	
		
	//����, �����ư
	$(".control .the_stop").click(function (){
		onplay = false;
		$(this).hide();
		$(this).removeClass("cotr_on");
		$(".next").off();
		$(".prev").off();
		$(".control .the_play").css("display", "block");
		$(".play_on").removeClass("play_on");
		$(".next").removeClass("play_on");
		$(".prev").removeClass("play_on");			
		});
		
	$(".control .the_play").click(function (){
		onplay = true;
		$(this).hide();
		$(this).addClass("cotr_on");
		$(".next").on("click",function (){
		click_right();
		});
		$(".prev").on("click",function (){
		click_left ();
		});	
		$(".control .the_stop").css("display", "block");
		$(".slide_btns .control").addClass("play_on");
		$(".next").addClass("play_on");
		$(".prev").addClass("play_on");			
		});
	
	
	//�߿�. ó�� ������ �ε� �� �� ���͹� �۵�. ���͹� ���� ����. ��, ���̵� �Ǵ� �����ִ� �ð� - �ٲ�� �ð�(1��)	
	var thefades = setTimeout(function (){
		fade();
		thefades2 = setInterval (fade,6000);
		}, 5000);
		
	//��Ʈ�� ���콺 ���� �� �ڵ� ���� ���	
	$(".play_on").hover(
	function (){
		clearTimeout(thefades);
		clearInterval(thefades2);
		},
	function (){
		thefades = setTimeout(function (){
		fade();
		thefades2 = setInterval (fade,6000);
		}, 5000);	
	});		
	
	$(".the_top > img").click(function (){
		    $("html,body").stop().animate({scrollTop:0}, 300);		 
		   });
	
	
	$(window).resize(function (){
	 var w_width = $(window).width()
	 $(".the_artist").css("width", w_width);
	});
	
	//��Ƽ��Ʈ �������� - Ŀ����
	$("#career01").show();
	$(".info_lists li a").click(function (){
		$(".on_careers").hide();
		$($(this).attr("href")).show();
		$(".info_lists li").removeClass("thison");
		$(this).parent("li").addClass("thison");		
		return false;			
		});
		
		
  //��Ƽ��Ʈ �̹��� �����̵�
  var thums = $(".thums");
  var thums_li = $(".thums > li");
  var thueq = $(thums_li).length;
  var thuwidth = $(thums_li).height() + 6;
  
  var ap = 0;
  
  if (thueq <= 4) {
	  $(".thum_arr").hide();	  
	  } else if (thueq >= 5){
		  $(thums).css("height", thueq * thuwidth);  
          $(thums).css("margin-top", -thuwidth);
          $(thums_li).last().prependTo(thums);
		  };
  
  //��Ŭ��
  $(".ta_up").click(function (){
	 $(".thums:not(:animated)").animate({marginTop:parseInt($(thums).css("margin-top"))+thuwidth}, 300, function (){
		$(".thums > li").last().prependTo(thums);
		$(thums).css("margin-top", -thuwidth);			
		});
		ap++;		
	  });
	  
  //�Ʒ�Ŭ��  
  $(".ta_down").click(function (){
	 $(".thums:not(:animated)").animate({marginTop:parseInt($(thums).css("margin-top"))-thuwidth}, 300, function (){
		$(".thums > li").first().appendTo(thums);
		$(thums).css("margin-top", -thuwidth);	
		});
				
		if (ap > 0){
			ap -= 1;					
			} else if (ap == 0){
				ap = thueq -1;
				};
	  });
	  	
   //��Ƽ��Ʈ �̹��� �����̵� Ŭ�����
   $(".thums li a").click(function (){
	   var img_src = $($(this).attr("href"));
	   var input_img = '<img src="' + $(this).attr("href") + '"alt=""/>';
	   $(".photo_on").find("img").remove();
	   $(input_img).appendTo(".photo_on");
	   return false;
	   });		
	   
   //�̵�� ä��
   	$("#video").show(); 
	$(".media_tabs li a").click(function (){
		$(".media_list").hide();
		$($(this).attr("href")).show();
		$(".media_tabs li").removeClass("media_on");
		$(this).parent("li").addClass("media_on");
		return false;
		});  
	
	//������ ���󺸱� ���
   $("#video li a").click(function (){
	  
	 var movurl = $(this).attr("href"); 
	 var iframe = '<iframe width="100%" height="100%" src="' + movurl + '" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';

	 $(".vod_pop").fadeIn(300); 
	 $(".vod_area").fadeIn(300); 
     $(iframe).appendTo(".vod_area");

	 $("body, html").css("overflow","hidden");
	 return false;
	  }); 
   $(".close-vod").click(function (){
	  $(".vod_pop").fadeOut(300); 
	  $(".vod_area").fadeOut(300); 
	  $(".vod_area").find("iframe").remove();
	  $("body, html").css("overflow","auto");
	   });
   
	
	
});