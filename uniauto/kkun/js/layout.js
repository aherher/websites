$(document).ready(function(e) {
 //�׺� ���
 $(".menu li a").click(function (){
	 var moving = $($(this).attr("href")).offset().top;
	 var nonte = moving -= 30;
	 var evn = moving -= 140;
	 
	 if ($(".topevent").css("display") == "block"){
		 $('html, body').animate({scrollTop : evn}, 500); 
		 } else if ($(".topevent").css("display") == "none"){
			  $('html, body').animate({scrollTop : nonte}, 500); 
			 };
	
	 return false;
	 });
 
  //���� �̹��� �Ѹ�
	$(".slide li").first().show();
	var i = 0;	
	var ims = $(".slide li").length -1; // �� ����
	
	//�⺻ �Ѹ� ���
	function rolling (){
		$(".slide li").fadeOut(1000);
		$(".slide li").eq(i).fadeIn(1000);	
		$(".dot_wrap li").removeClass("dot_on");
		$(".dot_wrap li").eq(i).addClass("dot_on");
		};
		
	//�̹��� �� ���� �� ��Ʈ. ����.	
	function fade() {
		if (i < ims){i++;}
		else if (i >= ims){i = 0;};
		rolling ();
		};	
		
	//��Ŭ��
	$(".rightarr").click(function (){
		if(i < ims){
		i++;
		rolling ();
		} else if (i >= ims){
		i = 0;
		rolling ();
			};
		});
		
	//��Ŭ��
	$(".leftarr").click(function (){
		if(i == 0){
		i = ims;
		rolling ();
		} else if (i <= ims){
		i -= 1;
		rolling ();
			};
		});
	
	//���� ��Ʈ Ŭ�� ��
	$(".dot_wrap li").click(function (){
		var d = $(this).index(".dot_wrap li");
		i = d;			
		rolling ();		
		});	
	
	//�߿�. ó�� ������ �ε� �� �� ���͹� �۵�. ���͹� ���� ����. ��, ���̵� �Ǵ� �����ִ� �ð� - �ٲ�� �ð�(1��)	
	var thefades = setTimeout(function (){
		fade();
		thefademsa = setInterval (fade,6000);
		}, 5000);
		
	//��Ʈ�� ���콺 ���� �� �ڵ� ���� ���	
	$(".thestop").hover(
	function (){
		clearTimeout(thefades);
		clearInterval(thefademsa);
		},
	function (){
		thefades = setTimeout(function (){
		fade();
		thefademsa = setInterval (fade,6000);
		}, 5000);	
	});	
	
	//��� �̺�Ʈ ���
	$(".close_event").click(function (){
		$(".topevent").hide();
		$(".main_bg").css("margin-top", 0);
		$(".header_wrap").css("top", 0);
		});
		
	//�׺�κ� ��ũ�� ��
	$(window).scroll(function (){
		if ($(window).scrollTop() > 150){
			$(".header_wrap").addClass("scrolled");	
			} else if ($(window).scrollTop() < 150){
				$(".header_wrap").removeClass("scrolled");	
				}
		});
		
		
  //�⺻ �����̵� ����	
  var slide = $(".inter_slide");
  var side_li = $(".inter_slide > li");
  var theeq = $(side_li).length;
  var thewidth = $(side_li).width();
  $(slide).css("width", theeq * thewidth);
  $(slide).css("margin-left", -thewidth);
  $(side_li).last().prependTo(slide);
  var s = 0;
  
  //��Ŭ��
  $(".inter_right").click(function (){
	 $(".inter_slide:not(:animated)").animate({marginLeft:parseInt($(slide).css("margin-left"))-thewidth}, 300, function (){
		$(".inter_slide > li").first().appendTo(slide);
		$(slide).css("margin-left", -thewidth);			
		});
		s++;		 
		if (s < theeq){			
			} else if (s >= theeq -1){
				s = 0;				
				}
	  });
	  
  //��Ŭ��  
  $(".inter_left").click(function (){
	 $(".inter_slide:not(:animated)").animate({marginLeft:parseInt($(".inter_slide").css("margin-left"))+thewidth}, 300, function (){
		$(".inter_slide > li").last().prependTo(".inter_slide");
		$(".inter_slide").css("margin-left", -thewidth);	
		});

		if (s > 0){
			s -= 1;			
			} else if (s == 0){
				s = theeq -1;				
	
				};
	  });
	  
	 var interr =  function (){
		 $(".inter_slide:not(:animated)").animate({marginLeft:parseInt($(slide).css("margin-left"))-thewidth}, 300, function (){
		$(".inter_slide > li").first().appendTo(slide);
		$(slide).css("margin-left", -thewidth);			
		});
		s++;		 
		if (s < theeq){			
			} else if (s >= theeq -1){
				s = 0;				
				}
		}
	  
	 var theinterr = setInterval(interr, 3000);
		
		//ȭ��ǥ�� ���콺 ���� �� �ڵ� ���� ���	
	$(".inter_arr ").hover(
	function (){		
		clearInterval(theinterr);
		},
	function (){
		theinterr = setInterval (interr,6000);
			
	});	
	  
	 //���׸���
	 $(".six_img li a").click(function (){
		$($(this).attr("href")).fadeIn(300);
		$("body").css("height", $(window).height());
		$("body").css("overflow", "hidden");
		$("#inter_view").fadeIn(300);
		return false;
		 }); 
		$(".close_int").click(function (){
			$("#inter_view").fadeOut(300);
			$(".inter_imgs li").fadeOut(300);
			$("body").css("height", "auto");
	     	$("body").css("overflow", "auto");
			});
	  
	  
  //��ġ�� �����̵�
  var msle = $(".th_ms");
  var msle_li = $(".th_ms > div");
  var tmsq = $(msle_li).length;
  var mslewd = $(msle_li).width();
  $(msle).css("width", tmsq * 367);
  $(msle).css("margin-left", -367);
  $(msle_li).last().prependTo(msle);
  var msa = 0;
  
  //��Ŭ��
  $("#the_menu02 .sa_right").click(function (){
	    $(".th_ms:not(:animated)").animate({marginLeft:parseInt($(msle).css("margin-left"))-367}, 300, function (){
		$(".th_ms > div").first().appendTo(msle);
		$(msle).css("margin-left", -367);			
		});
		msa++;		 
		if (msa < theeq){			
			} else if (msa >= tmsq -1){ 
				msa = 0;				
				}
	  });
	  
  //��Ŭ��  
  $("#the_menu02 .sa_left").click(function (){
	 $(".th_ms:not(:animated)").animate({marginLeft:parseInt($(".th_ms").css("margin-left"))+367}, 300, function (){
		$(".th_ms > div").last().prependTo(".th_ms");
		$(".th_ms").css("margin-left", -367);	
		});
		if (msa > 0){
			msa -= 1;			
			} else if (msa == 0){
				msa = tmsq -1;				
					};
	  });
	  
	  
  //��Ʈ�� �����̵�
  var msle2 = $(".th_ms2");
  var msle_li2 = $(".th_ms2 > div");
  var tmsq2 = $(msle_li2).length;
  var mslewd2 = $(msle_li2).width();
  $(msle2).css("width", tmsq2 * 367);
  $(msle2).css("margin-left", -367);
  $(msle_li2).last().prependTo(msle2);
  var msa2 = 0;
  
  //��Ŭ��
  $("#the_menu03 .sa_right").click(function (){
	    $(".th_ms2:not(:animated)").animate({marginLeft:parseInt($(msle2).css("margin-left"))-367}, 300, function (){
		$(".th_ms2 > div").first().appendTo(msle2);
		$(msle2).css("margin-left", -367);			
		});
		msa2++;		 
		if (msa2 < theeq2){			
			} else if (msa2 >= tmsq2 -1){ 
				msa2 = 0;				
				}
	  });
	  
  //��Ŭ��  
  $("#the_menu03 .sa_left").click(function (){
	    $(".th_ms2:not(:animated)").animate({marginLeft:parseInt($(msle2).css("margin-left"))+367}, 300, function (){
		$(".th_ms2 > div").last().prependTo(msle2);
		$(".th_ms2").css("margin-left", -367);	
		});
		if (msa2 > 0){
			msa2 -= 1;			
			} else if (msa2 == 0){
				msa2 = tmsq2 -1;				
					};
	  }); 
	  
	   //���̵�� �����̵�
  var msle3 = $(".th_ms3");
  var msle_li3 = $(".th_ms3 > div");
  var tmsq3 = $(msle_li3).length;
  var mslewd3 = $(msle_li3).width();
  $(msle3).css("width", tmsq3 * 367);
  $(msle3).css("margin-left", -367);
  $(msle_li3).last().prependTo(msle3);
  var msa3 = 0;
  
  //��Ŭ��
  $("#the_menu04 .sa_right").click(function (){
	    $(".th_ms3:not(:animated)").animate({marginLeft:parseInt($(msle3).css("margin-left"))-367}, 300, function (){
		$(".th_ms3 > div").first().appendTo(msle3);
		$(msle3).css("margin-left", -367);			
		});
		msa3++;		 
		if (msa3 < theeq3){			
			} else if (msa3 >= tmsq3 -1){ 
				msa2 = 0;				
				}
	  });
	  
  //��Ŭ��  
  $("#the_menu04 .sa_left").click(function (){
	    $(".th_ms3:not(:animated)").animate({marginLeft:parseInt($(msle3).css("margin-left"))+367}, 300, function (){
		$(".th_ms3 > div").last().prependTo(msle3);
		$(".th_ms3").css("margin-left", -367);	
		});
		if (msa3 > 0){
			msa3 -= 1;			
			} else if (msa3 == 0){
				msa3 = tmsq3 -1;				
					};
	  }); 
	  
	  

	  
	 //�󼼺��� ���
	$(".the_view a").click(function (){		
		$($(this).attr("href")).fadeIn(300);
		$("body").css("height", $(window).height());
		$("body").css("overflow", "hidden");
		return false;
		});
	$(".close_btn").click(function (){
		$(".pop_wrap").fadeOut(300);
		$(".the_pop").fadeOut(300);
		$("body").css("height", "auto");
		$("body").css("overflow", "auto");
		});		 
	
	//�޴�
	$(".inm a").click(function (){
		$("#menu_view").fadeIn(300);
		});
	
	//����ȳ�
	/*$(".the_store a").click(function (){
		$("#store_view").fadeIn(300);
		});*/
	
	
	/*�޴� �Ǳ��*/
	 $("#menu .menu_tabs li a").click(function (){
		 $("#menu .menu_tabs li a").removeClass("tab_on");
		 $(this).addClass("tab_on");
		 $(".menu_slide").hide();
		 $($(this).attr("href")).show();		 
		 return false;
		 });
		  
	 /*���ͺ�� �Ǳ��*/
	 $("#stors .menu_tabs li a").click(function (){
		 $("#stors .menu_tabs li a").removeClass("tab_on");
		 $(this).addClass("tab_on");
		 $(".fri_box").hide();
		 $($(this).attr("href")).show();		 
		 return false;
		 });
	
});

