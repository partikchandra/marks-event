$(document).ready(function(){ 

var $videoSrc;  
var $videoContent;  

$('.video-btn').click(function() {
    $videoSrc = $(this).data( "src" );
    $videoContent = $(this).data( "content" );
	$('#modal-title').html($videoContent);
});
//console.log($videoContent);


// when the modal is opened autoplay it  
$('#testimonials').on('shown.bs.modal', function (e) {
    
// set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
$("#video").attr('src',$videoSrc + "?rel=0&amp;showinfo=0&amp;modestbranding=1&amp;autoplay=1" ); 
})
  
  
// stop playing the youtube video when I close the modal
$('#testimonials').on('hide.bs.modal', function (e) {
    // a poor man's stop video
    $("#video").attr('src',$videoSrc); 
}) 


$('#slider').owlCarousel({
                loop: true,
				nav: true,
				dots: false,
                margin: 0,
				autoplay:true,
				animateOut: 'fadeOut',
				lazyLoad:true,
				 items: 1,
              });
			  
			  $('#ourTeam').owlCarousel({
                loop: true,
				nav: true,
				navText: ["<img src='images/nav_left.png' alt='left icon'>","<img src='images/nav_right.png' alt='right icon'>"],
				dots: false,
                margin: 0,
				autoplay:false,
				lazyLoad:true,
                responsive: {
                  0: {
                    items: 1
                  },
                  600: {
                    items: 2
                  },
                  1000: {
                    items: 4
                  }
                }
              }); 
			  $('#brands').owlCarousel({
                loop: true,
				nav: false,
				navText: ["<img src='images/nav_left.png' alt='left icon'>","<img src='images/nav_right.png' alt='right icon'>"],
				dots: true,
                margin: 10,
				autoplay:true,
				lazyLoad:true,
                responsive: {
                  0: {
                    items: 2
                  },
                  600: {
                    items: 3
                  },
                  1000: {
                    items: 6
                  }
                }
              });
$('#gallery').owlCarousel({
                loop: true,
				nav: false,
				dots: false,
                margin: 10,
				autoplay:true,
				lazyLoad:true,
                responsive: {
                  0: {
                    items: 1
                  },
                  600: {
                    items: 2
                  },
                  1000: {
                    items: 5
                  }
                }
              });

	/* var slideHeight = $('.cb-slideshow').height() + 'px';
	$('.services').css('margin-top', slideHeight); */
	
	$('.querybtn').click(function(){
		$(this).toggleClass('openBox');
		$('.queryFormBox').toggleClass('openBox');
	});
});
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();    
    if (scroll <= 350) {
        $("header").removeClass("blackFixed");
    }else{
		 $("header").addClass("blackFixed");
	}
});
var a = 0;
$(window).scroll(function() {

  var oTop = $('#counter').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.counter-value').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    a = 1;
  }

});