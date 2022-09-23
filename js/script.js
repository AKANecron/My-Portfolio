let path = document.querySelector('path')
let pathLength = path.getTotalLength()

path.style.strokeDasharray = pathLength + ' ' + pathLength;

path.style.strokeDashoffset = pathLength;

window.addEventListener('scroll', ()=>{
	var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

	var drawLength = pathLength * scrollPercentage;

	path.style.strokeDashoffset = pathLength - drawLength;
})

const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
	header.classList.toggle ("sticky", window.scrollY >0);
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navbar.classList.toggle('active');
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navbar.classList.remove('active');
};

const sr = ScrollReveal ({
	distance: '25px',
	duration: 2500,
	reset: true
})

function openResume(){
	window.open("file/ResumeDhruvKakadiya.pdf", "_blank");
}

sr.reveal('.home-text',{delay:190, origin:'bottom'})

sr.reveal('.about,.services,.portfolio,.contact',{delay:200, origin:'bottom'})