$(document).ready(function() {
	// Header Scroll
	$(window).on('scroll', function() {
		var scroll = $(window).scrollTop();

		if (scroll >= 50) {
			$('#header').addClass('fixed');
		} else {
			$('#header').removeClass('fixed');
		}
	});

	// Waypoints
	$('.work').waypoint(function() {
		$('.work').addClass('animated fadeIn');
	}, {
		offset: '75%'
	});
	$('.download').waypoint(function() {
		$('.download .btn').addClass('animated tada');
	}, {
		offset: '75%'
	});

	// Fancybox
//	$('.work-box').fancybox();

	// Flexslider
	$('.flexslider').flexslider({
		animation: "fade",
		directionNav: false,
	});

	// Page Scroll
	var sections = $('section')
		nav = $('nav[role="navigation"]');

	$(window).on('scroll', function () {
	  	var cur_pos = $(this).scrollTop();
	  	sections.each(function() {
	    	var top = $(this).offset().top - 76
	        	bottom = top + $(this).outerHeight();
	    	if (cur_pos >= top && cur_pos <= bottom) {
	      		nav.find('a').removeClass('active');
	      		nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
	    	}
	  	});
	});
	nav.find('a').on('click', function () {
	  	var $el = $(this)
	    	id = $el.attr('href');
		$('html, body').animate({
			scrollTop: $(id).offset().top - 75
		}, 500);
	  return false;
	});

	// Mobile Navigation
	$('.nav-toggle').on('click', function() {
		$(this).toggleClass('close-nav');
		nav.toggleClass('open');
		return false;
	});	
	nav.find('a').on('click', function() {
		$('.nav-toggle').toggleClass('close-nav');
		nav.toggleClass('open');
	});
});

//Toggle class
$(".original").click(function(){
    $(this).toggleClass("overlay");
    
});

//pay button

var payB = document.getElementById("pay");
var payCount = document.getElementsByClassName("original overlay");
var count = 0;
var arry=[];



document.querySelector('#pay').onclick = function(){
    var checkL = document.querySelectorAll(".overlay").length;
	swal({
		title: "Are you sure?",
		text: "You will have "+checkL+" items",
		type: "success",
		showCancelButton: true,
		confirmButtonColor: '#66ff66',
		confirmButtonText: 'Yes, go to online banking',
		cancelButtonText: "No, let me think about it",
		closeOnConfirm: false,
		closeOnCancel: false
	},
	function(isConfirm){
    if (isConfirm){
  
      swal({
  title: "Billing",
  text: "Is your address same as billing address?",
  type: "warning",
  showCancelButton: true,
  confirmButtonClass: "btn-danger",
  confirmButtonText: "Yes, same as billing address.",
  cancelButtonText: "No, I will enter new adress",
  closeOnConfirm: false,
  closeOnCancel: false
},
function(isConfirm) {
  if (isConfirm) {
    
      location.href ="pages/sucess.html";
  } else {
    swal({   title: "Address",  
              text: "Please enter your new delivery address",  
              type: "input",  
              showCancelButton: true,  
              closeOnConfirm: false, 
              animation: "slide-from-top",  
              inputPlaceholder: "Write something" },
             function(inputValue){   
            if (inputValue === false) 
                return false;     
            if (inputValue === "") {  
                swal.showInputError("Please enter your new address");  
                return false   }    
            swal("Nice!", "You wrote: " + inputValue, "success"); 
            swal({   
                title: "Nice!", 
                text: "You wrote: " + inputValue, 
                type: "success",  
                showCancelButton: true,   
                confirmButtonColor: "#66ff66",   
                confirmButtonText: "Yes, go to bank!",  
                }, 
                 function(){   
                location.href ="pages/sucess.html"; }
                
                );
        });
  }
});
        
    } else {
      swal("Cancelled", "Look forward to click me.", "error");
    }
	});
};



//map
 function initMap(){
        // console.log(google);
        var vancouver = {lat:63, lng:-123.1194621};
        var map = new google.maps.Map(document.getElementById("maps"),{
            center: vancouver,
            zoom:3

        });
        
        var infoWindow = new google.maps.InfoWindow({map: map});

         if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('<h4>'+'Location Confirmed!'+'<h4>');
            map.panTo(pos);
            map.setZoom(16);
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }

      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
      }
    }
