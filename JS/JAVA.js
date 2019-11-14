// PopUp
function signIn() {
	var x = document.getElementById("signUpcontainer");
	var y = document.getElementById("signIncontainer");
	if (y.style.display == "none") {
		y.style.display = "block"
		x.style.display = "none"
		document.body.style.overflowY = "hidden"
	}else{
		y.style.display = "none"
	}
}

function signUp() {
	var x = document.getElementById("signUpcontainer");
	var y = document.getElementById("signIncontainer");
	if (y.style.display == "block") {
		y.style.display = "none"
		x.style.display = "block"
	}
}
function Close() {
	var x = document.getElementById("signUpcontainer");
	var y = document.getElementById("signIncontainer");
	if (x.style.display == "block" || y.style.display == "block") {
		x.style.display = "none"
		y.style.display = "none"
		document.body.style.overflowY = "scroll"
	}
}

// HEADER
var height = (window.innerHeight) - (110);

	window.onscroll = function() {
		if (document.documentElement.scrollTop >= height) {
			document.getElementById('navbar').style.background="rgba(0,100,255,1";
		}else{
			document.getElementById('navbar').style.background="transparent";
		}
	}


// NavSlide
const navSlide = () => {
	const bar = document.querySelector('.bar');
 	const nav = document.querySelector('.menu');
 	const navLinks = document.querySelectorAll('.menu li');
 	const userLog = document.querySelector('.user-log');

 	bar.addEventListener('click', () => {
 		nav.classList.toggle("nav-active");
 		userLog.classList.toggle("userFade");

	 	navLinks.forEach((link, index) => {
	 		if (link.style.animation) {
	 			link.style.animation = '';
	 		}else{
	 			link.style.animation = `navFade 0.5s ease forwards ${index / 10 + 0.4}s`;
	 		}
	 	});

	 	bar.classList.toggle('toggle');

 	});

}

navSlide();

	// HEADER CUSTOM
// var hideScroll = window.pageYOffset;

// 	window.onscroll = function () {
// 		var currentScrollpos = window.pageYOffset;

// 			if (hideScroll > window.pageYOffset) {
// 				document.getElementById('navbar').style.background="transparent";
// 			}else{
// 				document.getElementById('navbar').style.background="red";
// 			}
// 		hideScroll = currentScrollpos
// 	}

	// JAVA SCROLL WISNU
// var slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//     showSlides(slideIndex += n);
// }

// function showSlides(n) {
//     var i;
//     var slides = document.getElementsByClassName("content");
//     if (n > slides.length) {slideIndex = 1}    
//     if (n < 1) {slideIndex = slides.length}
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none"; 
//     }
//     slides[slideIndex-1].style.display = "block";  
// }



// GESER KANAN KIRI
// let slider = document.querySelectorAll('.content'),
// 	arrowLeft = document.querySelector('#arrow-left'),
// 	arrowRight = document.querySelector('#arrow-right'),
// 	current1 = 0;
// 	current2 = 1;
// 	current3 = 2;

// function reset() {
// 	for (let i = 0; i < slider.length; i++) {
// 		slider[i].style.display="none";
// 	}
// }

// function start() {
// 	reset();
// 	slider[0].style.display="inline-block"
// 	slider[1].style.display="inline-block"
// 	slider[2].style.display="inline-block"
// }


// function sideLeft() {
// 	reset();
// 	slider[current1-1].style.display="inline-block";
// 	slider[current2-1].style.display="inline-block";
// 	slider[current3-1].style.display="inline-block";
// 	current1--;
// 	current2--;
// 	current3--;
// }

// function sideRight() {
// 	reset();
// 	slider[current1+1].style.display="inline-block";
// 	slider[current2+1].style.display="inline-block";
// 	slider[current3+1].style.display="inline-block";
// 	current1++;
// 	current2++;
// 	current3++;
// }

// arrowLeft.addEventListener('click', function(){
// 	if (current1==0) {
// 		current1 = slider.length
// 	}else if (current2==0) {
// 		current2 = slider.length
// 	}else if(current3==0) {
// 		current3 = slider.length
// 	}
// 	sideLeft();
// });

// arrowRight.addEventListener('click', function(){
// 	if (current1==slider.length-1) {
// 		current1 = -1
// 	}else if (current2==slider.length-1) {
// 		current2 = -1
// 	}else if(current3==slider.length-1) {
// 		current3 = -1
// 	}
// 	sideRight();
// });

// start();


// SCROLL MOUSE
// const slider = document.querySelector('.contents');
// let isDown = false;
// let startX;
// let scrollLeft;

// slider.addEventListener('mousedown', (e) => {
//   isDown = true;
//   slider.classList.add('active');
//   startX = e.pageX - slider.offsetLeft;
//   scrollLeft = slider.scrollLeft;
// });
// slider.addEventListener('mouseleave', () => {
//   isDown = false;
//   slider.classList.remove('active');
// });
// slider.addEventListener('mouseup', () => {
//   isDown = false;
//   slider.classList.remove('active');
// });
// slider.addEventListener('mousemove', (e) => {
//   if(!isDown) return;
//   e.preventDefault();
//   const x = e.pageX - slider.offsetLeft;
//   const walk = (x - startX) * 3; //scroll-fast
//   slider.scrollLeft = scrollLeft - walk;
//   console.log(walk);
// });



// SCROLL REPEAT
// var doc = window.document,
//   context = doc.querySelector('.contents'),
//   clones = context.querySelectorAll('.clone'),
//   disableScroll = false,
//   scrollWidth = 0,
//   scrollPos = 0,
//   clonesWidth = 0,
//   i = 0;

// function getScrollPos () {
//   return (context.pageXOffset || context.scrollLeft) - (context.clientLeft || 0);
// }

// function setScrollPos (pos) {
//   context.scrollLeft = pos;
// }

// function getClonesWidth () {
//   clonesWidth = 0;

  // for (i = 0; i < clones.length; i += 1) {
  //   clonesWidth = clonesWidth + clones[i].offsetWidth;
  // }

//   return clonesWidth;
// }

// function reCalc () {
//   scrollPos = getScrollPos();
//   scrollWidth = context.scrollWidth;
//   clonesWidth = getClonesWidth();

//   if (scrollPos <= 0) {
//     setScrollPos(1); // Scroll 1 pixel to allow upwards scrolling
//   }
// }

// function scrollUpdate () {
//   if (!disableScroll) {
//     scrollPos = getScrollPos();

//     if (clonesWidth+ 950 + scrollPos >= scrollWidth) {
//       // Scroll to the top when you’ve reached the bottom
//       setScrollPos(1); // Scroll down 1 pixel to allow upwards scrolling
//       disableScroll = true;
//     } else if (scrollPos <= 0) {
//       // Scroll to the bottom when you reach the top
//       setScrollPos(scrollWidth - clonesWidth);
//       disableScroll = true;
//     }
//   }

//   if (disableScroll) {
//     // Disable scroll-jumping for a short time to avoid flickering
//     window.setTimeout(function () {
//       disableScroll = false;
//     }, 40);
//   }
// }

// function init () {
//   reCalc();
  
//   context.addEventListener('scroll', function () {
//     window.requestAnimationFrame(scrollUpdate);
//   }, false);

//   window.addEventListener('resize', function () {
//     window.requestAnimationFrame(reCalc);
//   }, false);
// }

// if (document.readyState !== 'loading') {
//   init()
// } else {
//   doc.addEventListener('DOMContentLoaded', init, false)
// }
