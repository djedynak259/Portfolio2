// Loader

window.addEventListener('load', function loaded(){
	window.removeEventListener('load',loaded,false)
	showPage()
})

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("allWrap").style.visibility = "visible";
}


// Button GoTo

document.getElementsByClassName('navBtn')[0].addEventListener('click',function(event){
	let reccommendations = document.getElementById('recommendations');
		reccommendations.scrollIntoView(true);
})

document.getElementsByClassName('navBtn')[2].addEventListener('click',function(event){
	let aboutMe = document.getElementById('aboutMe');
		projects.scrollIntoView(true);
})

document.getElementsByClassName('navBtn')[3].addEventListener('click',function(event){
	let contact = document.getElementById('projects');
		contact.scrollIntoView(true);
})

document.getElementsByClassName('navBtn')[4].addEventListener('click',function(event){
	let contact = document.getElementById('contact');
		contact.scrollIntoView(true);
})

// Scroll Effects

function debounce(func, wait = 10, immediate = true) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

function checkScrollThings(){
	if(document.body.scrollTop >= 10 || document.documentElement.scrollTop >= 10) {
		nav.classList.add("navScrolled")
		navList.classList.add("scrolled")
	}
  else {
    nav.classList.remove("navScrolled");
  	navList.classList.remove("scrolled")  
	}

	sliders.forEach(elem =>{
		let e = elem.getBoundingClientRect()
		
		let slideHeight = (window.innerHeight) - 20;

		if(slideHeight < e.top) {
			elem.classList.add('slide-up')
		}

		if(slideHeight > e.top && e.bottom > 60) {
			elem.classList.remove('slide-up')
			elem.classList.remove('slide-down')
		}

		if(e.bottom < 60){
			elem.classList.add('slide-down')
		}
	})
}

let nav = document.getElementsByTagName('nav')[0];
let navList = document.getElementsByClassName('navButtonList')[0]
let sliders = document.querySelectorAll('.slide-in');

window.addEventListener('scroll', debounce(checkScrollThings))


// Modal  

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myModal1");

var close = document.getElementsByClassName("modal-close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

close.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
