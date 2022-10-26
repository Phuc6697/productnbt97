// header truot
$("header .header2 .container button").click(function (e) { 
    e.preventDefault();
    $("header .header2 .container1").slideToggle();
});

// click vao button o gallery thi cac hinh cua button dc chon
$("#gallery .button-box button").click(function (e) { 
	e.preventDefault();
	if($(this).hasClass('active')){
		return;
	}
	$(this).siblings('button.active').removeClass("active");
	$(this).addClass('active');
	var data = $(this).attr("data");
	var data2 =$(`#gallery .button-img >div`);
	if(data == "all"){
		data2.show();
	}
	else{
		var data1 =$(`#gallery .button-img > div[data=${data}]`);
		data1 .show();
		data2.not(data1).hide();
	}
});	

// back to top button
$(window).scroll(function (event) { 		
    toggleBackToTop()
});
toggleBackToTop()

function toggleBackToTop(){
	if($(window).scrollTop()==0){
		$(".back-to-top").fadeOut(); //Ẩn
	}
	else{
		$(".back-to-top").fadeIn(); //Hiện
	}
}

// fixed-top bar
// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("myHeader");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

// PLUGIN
// As A Vanilla JavaScript Plugin
var gallery =new SimpleLightbox('.gallery97 a', {
    /* options */
});
// As A jQuery Plugin -->

var gallery = $('.gallery97 a').simpleLightbox({
    /* options */
});




