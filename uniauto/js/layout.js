$(document).ready(function(e) {
 //�Ǳ��
 $(".the_tab > a").click(function (){
	 $(".the_tab").slideDown(300);
	 $(this).parent(".the_tab").slideUp(300);
	 $(".opened").slideUp(300);
	 $($(this).attr("href")).slideDown(300);	 
	 return false;
	 });
	 
  $(".close_btn").click(function (){ 	  
	  $(".opened").slideUp(300);
	  $($(this).attr("href")).slideDown(300);	
	  return false;
	  });
	  
 //����Ʈ �ڽ�
 $(".sub_sel").change(
    function () {
	var in_val = $(this).children("option:selected").text();
    $(this).parent(".select_wrap").find("span").text(in_val);	
	});

//����������޹�ħ
 $(".view_all").click(function (){	 
	if($(".input_area").css("display") == "none"){ 
	 $(this).children("span").addClass("text_close");
	 $(".input_area").slideDown(300);
	} else {
		 $(this).children("span").removeClass("text_close");
	     $(".input_area").slideUp(300);	
		};
	 
	 });

	  
});