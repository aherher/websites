 // ���� �ϼ�
$(window).on('load', function() {
    $(".sub_contents > .section").first().addClass("active");		
	var s = 1;    
	var act = 1;
	 $("html,body").stop().animate({scrollTop:0}, 1);
	  
	//��ũ�� �ڵ��̵�
	 $(".sub_contents > .section").each(function () {
	  $(this).on("mousewheel DOMMouseScroll", function (e) {
	 if (e.originalEvent.wheelDelta >= 0) { // ��ũ�� ��	
	   if (s == 0) {
		     e.preventDefault();
		   } else if (s == 1){			  
			   s = 0;
			   $(".active").prev(".section").addClass("active");
	           $(".active").next(".section").removeClass("active");	 
	           var active = $(".sub_contents > .active").offset().top;		
	           $("html,body").stop().animate({scrollTop:active}, 500, function (){
				    s = 1;
				   });	
				 e.preventDefault();                      
			   };
    } else { // ��ũ�� �ٿ�  
	  
	  if (s == 0){
		    e.preventDefault();
		  } else if (s == 1){			
			  s = 0;
			  $(".active").next(".section").addClass("active");
	          $(".active").prev(".section").removeClass("active");
	          var active = $(".sub_contents > .active").offset().top;	
	          $("html,body").stop().animate({scrollTop:active}, 500, function (){
				  s = 1;
				  });
				 e.preventDefault();                   
			  };
	
    }
	 });
    });
	
	});	
 
 
