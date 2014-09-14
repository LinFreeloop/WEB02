$(document).ready(function(){
	var bt = $('#toolBackTop');   
		$(window).scroll(function() {
            var st = $(window).scrollTop();

           	if(st > 30){bt.show(); }else{ bt.hide();}
         	 if ($(document).scrollTop() >= $(document).height() - $(window).height()) {
                    $.ajax({
                    	url: 'data.json',
                    	type: 'GET',
                    	dataType: 'json',
                    	success: function(data){
                    		$.each(data,function(entryindex,entry){
                    			var str='<li><div class="block"><a href="'+entry.address+'" target="_blank"><img src="'+entry.src01;
                    			str+='" /></a><p class="overTime">结束时间:<span>'+entry.times;
                    			str+='</span></p><a href="'+entry.address+'" target="_blank" class="descrip">'+entry.descrip;
                    			str+='</a><p class="price"><span class="currentPrice"><em>￥</em>'+entry.currentPrice;
                    			str+='</span><span class="del"><em>￥</em>'+entry.del;
                    			str+='</span><span class="discount">('+entry.discount;
                    			str+=')</span><a href="'+entry.address;
                    			str+='" target="_blank" class="shopping"><span>立即抢购</span></a></p></div></li>';
                    			$('.item_list').append(str);
                    		})
                    	}
                    });
                }

        });


  $('.nav li a').click(function(){
    $(this).addClass('current');
    $(this).parent().animate({height:'10px',opacity:'0.6'},"fast");
    $(this).parent().animate({height:'52px',opacity:'1.0'},"fast");   
    $(this).parent().animate({height:'42px',opacity:'1.0'},"fast");
    $(this).parent().siblings().find('a').removeClass('current');
    $(this).parents().find('.leftNav ul li a').removeClass('current');
  });
  $('.leftNav ul li a').click(function(){
    $(this).addClass('current');
     $(this).parent().animate({height:'30px',opacity:'0.6'},"fast");
    $(this).parent().animate({height:'83px',opacity:'1.0'},"fast");   
    $(this).parent().animate({height:'73px',opacity:'1.0'},"fast");
    $(this).parent().siblings().find('a').removeClass('current');
    $(this).parents().find('.nav a').removeClass('current');
  })

	$('.sort a').click(function(){
			$(this).addClass('now');
			$(this).siblings().removeClass('now');
		});
		$('.new').click(function(){
			$(this).siblings().find('b').css("display","none");
		});
		$('.discount1').click(function(){
			$(this).find('b').css("display","block");
			$(this).siblings().find('b').css("display","none");
		});
		$(".down").toggle(
  			function(){
  				$(this).find('b').css({"display":"block","background-position":"0px 0px"});
				  $(this).siblings().find('b').css("display","none");
  			},function(){
  				$(this).find('b').css({"display":"block","background-position":"0px -15px"});
				$(this).siblings().find('b').css("display","none");
  			}
		);
})