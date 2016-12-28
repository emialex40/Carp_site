
$(document).ready(function() {

// **************hovers******************
	$('.top-line-nav a').hover(
	 function() {
	 	$(this).css("color", "#F59546");
	},

	 function() {
 		$(this).css("color", "#fff");
	 });

	$('.top-line-regblog a').hover(
	 function() {
	 	$(this).css("color", "#F59546");
	},

	 function() {
 		$(this).css("color", "#fff");
	 });

	$('#footer a').hover(
	 function() {
	 	$(this).css("color", "#F59546");
	},

	 function() {
 		$(this).css("color", "#fff");
	 });

	$('.content-hot-in-bascket, .rods-bascket').hover(
	 function() {
	 	$(this).css("background", "#27b68f");
	},

	 function() {
 		$(this).css("background", "#5cdcb9");
	 });

	$('.content-hot li, .action-block li, .rods-block-list li ').hover(
	 function() {
	 	$(this).css("box-shadow", "0 2px 20px 2px #6C6C6C");
	},

	 function() {
 		$(this).css("box-shadow", "none");
	 });

	$('.qty-block, .issue, .confirm button').hover(
	 function() {
	 	$(this).css("background", "#F78B2C");
	},

	 function() {
 		$(this).css("background", "#fc6303");
	 });
// **********hovers end**************
	
// *******in top************
var top_show = 50;//при каком положении кнопка появляется
  var delay = 500; // Задержка прокрутки
  $(document).ready(function() {
    $(window).scroll(function () {
      if ($(this).scrollTop() > top_show) $('#top').fadeIn();
      else $('#top').fadeOut();
    });
    $('#top').click(function () {
      $('body, html').animate({
        scrollTop: 0
      }, delay);
    });
  });
// *******in top end************


// ***********menu****************
function main() {
	$('.icon-menu').click(function() {
		$('.menu').animate({
			'left': '0px'
		}, 600);

// *********close-menu**********
	$('.icon-close').click(function() {
		$('.menu').animate({
			'left': -285
		}, 600);
	});

	});
};
   main();
// *********close-menu end**********

// ****************blink**********************

function blink(selector) {
	$(selector).fadeOut('slow',function() {
		$(this).fadeIn('slow',function() {
			blink(this);
		});
	});
}

	blink('.content-hot h2');

// ****************end blink*****************

// ************change background************
var imgHead = [
'img/slider/fishing4.jpg',
'img/slider/prelesti-letnej-i-zimnej-rybalki.jpg',
'img/slider/elitefon.jpg'
], i = 1;



function csaHead() {
	if(i > (imgHead.length - 1)) {
		$('#header').animate({'opacity': '0'}, 500, function() {
			i = 0;
			$('#header').css({
				'background':'url('+imgHead[0]+') no-repeat center center fixed'});
		});
		$('#header').animate({'opacity':'1'}, 500);
	}else{
		$('#header').animate({'opacity':'0'}, 500, function() {
			$('#header').css({
				'background':'url('+imgHead[i]+') no-repeat center center fixed'});
			i++
		});
		$('#header').animate({'opacity':'1'}, 500);
	}
}

var intervalCsaHead = setInterval(csaHead, 8000);
// ************change background end*****************

// *********pop up window
 
$('.enter').on('click', function() {
  $('#parent_popup, #popup').show();
});

  $('.popup-menu i, #parent_popup').on('click', function() {
    $('#parent_popup, #popup').hide();
});

// ***************************

// *********** bascket snipper****************
  $('.qty-minus').click(function () {
                var $input = $(this).parent().find('input');
                var count = parseInt($input.val()) - 1;
                count = count < 1 ? 1 : count;
                $input.val(count);
                $input.change();
                return false;
            });
            $('.qty-plus').click(function () {
                var $input = $(this).parent().find('input');
                $input.val(parseInt($input.val()) + 1);
                $input.change();
                return false;
            });

// ****************timer**************************************

var zoomMargin = 15;

function startZoom(e) {
	$('.large').css('left', $(this).width() + zoomMargin).show();
}

function moveZoom(e) {
	var offset = $(this).offset(),
		x = (e.pageX - offset.left),
		y = (e.pageY - offset.top);
		w = $(this).width(),
		h = $(this).height(),
		$('.large').css({'background-position': (x / w * 100) + '% ' + (y / h * 100) + '%'});
}

function endZoom(e) {
	$('.large').hide();
}

$('.small').on({
	'mouseenter': startZoom,
	'mousemove': moveZoom,
	'mouseleave': endZoom
});

// ******************timer end**************************

// **************end script************************************
});