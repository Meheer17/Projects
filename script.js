// This is the main js for the normal functioning of the website


$(window).on('scroll', function(){
if($(window).scrollTop()){
  $('header').addClass('nav-show');
} else {
  $('header').removeClass('nav-show');
}
})

const navSlide = () => {
	 const hamburger = document.querySelector(".hamburger");
	 const navbar = document.querySelector(".nav-bar");
	 const navLinks = document.querySelectorAll(".nav-bar li");

     hamburger.onclick = () => {
		
	 navbar.classList.toggle("nav-active");
		 
      //Animation links
	 navLinks.forEach((link, index) => {
		if (link.style.animation) {
			link.style.animation = "";
		} else {
			link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7+ 1}s`;
		   }
		});
	  //hamburger animation
	 hamburger.classList.toggle("toggle");
    }
	 
	}

window.onload = () => navSlide();

const body = document.querySelectorAll("body")[0];
const blocks = document.querySelectorAll("main div");

body.onscroll = function(){
	blocks.forEach( block => {
		if (document.documentElement.scrollTop >= block.offsetTop - 0.66 * window.screen.height && document.documentElement.scrollTop !== 0) {
			block.className = "show";
		} else {
			block.className = "";
		}
	});
}

