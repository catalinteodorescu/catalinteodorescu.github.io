$( document ).ready( function(){
	console.log('%cYou\'re one of mine!', 'color: #eb5b41; font-weight: bold; font-size: 20px;' );

	activeMenu();
	clickMenu();
	timeline();
	baby();
});

function activeMenu() {
	var wHeight = $(window).height();
	var sections = $('#content section').length;

	$(window).scroll(function() {
		var wScroll = $(this).scrollTop();
		for(var i = 0; i < sections; i++) {
			var elemTop = $('#content section').eq(i).offset().top;
			var elemReachBottom = elemTop - wHeight;
	        if ( wScroll >= elemReachBottom + 80) {
	            $('#menu li').eq(i).addClass('active');
	        } else {
	        	$('#menu li').eq(i).removeClass('active');
	        }
	    }
	});
}

function clickMenu() {
	$('a[href*="#"]:not([href="#"])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: target.offset().top
				}, 700);
			return false;
			}
		}
	});
}

function timeline() {

	$('.timeline_dot').on({
	    mouseenter: function () {
	    	var index = $(this).index();
	    	if(index != 2 && index != 4) {
	    		console.log(index);
	    		$('.timeline_dot, .timeline_dot i, .timeline_dot em').removeClass('active');
	    		$('.timeline_text li').removeClass('active');
		        $(this).addClass('active');
		        $(this).children('i').addClass('active');
		        $(this).children('em').addClass('active');
		        $('.timeline_dot').eq(index + 1).addClass('active');
		        $('.timeline_dot').eq(index + 1).children('i').addClass('active');
		        $('.timeline_text li').eq(index).addClass('active');
		    }
	    }
	});

	$('.timeline_text li').on({
	    mouseenter: function () {
	    	var index = $(this).index();
	    	if(index != 2 && index != 4) {
	    		$('.timeline_text li').removeClass('active');
	    		$('.timeline_dot, .timeline_dot i, .timeline_dot em').removeClass('active');
		        $(this).addClass('active');
		        $('.timeline_dot').eq(index).addClass('active');
		        $('.timeline_dot').eq(index).children('i').addClass('active');
		        $('.timeline_dot').eq(index).children('em').addClass('active');
		        $('.timeline_dot').eq(index + 1).addClass('active');
		        $('.timeline_dot').eq(index + 1).children('i').addClass('active');
		        $('.timeline_text li').eq(index).addClass('active');
		    }
	    }
	});
}

function baby() {
	$('#i').click(function() {
		$(this).html('<img src="assets/img/baby.png" /><span onclick="$(this).parent().remove();">x</span>');
		setTimeout(function() {
			alert('Congrats! You just found a photo with me when I was a baby!');
		},200);
		$(this).unbind('click');
	})
}