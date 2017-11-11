// Loader

window.addEventListener('load', function loaded(){
	window.removeEventListener('load',loaded,false)
	showPage()
})

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("allWrap").style.visibility = "visible";
}


// Nav Button Go-To Section

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

function scrollEffects(){

	// Nav
	if(document.body.scrollTop >= 10 || document.documentElement.scrollTop >= 10) {
		nav.classList.add("navScrolled")
		navList.classList.add("scrolled")
	}
  else {
    nav.classList.remove("navScrolled");
  	navList.classList.remove("scrolled")  
	}

	// Slide
	sliders.forEach(elem => {
		let e = elem.getBoundingClientRect()
		
		let slideHeight = (window.innerHeight) - 20;

		if(slideHeight < e.top) {
			elem.classList.add('slide-up')
		}

		if(slideHeight > e.top && e.bottom > 60) {
			elem.classList.remove('slide-up')
			// elem.classList.remove('slide-down')
		}

		if(e.bottom < 60){
			// elem.classList.add('slide-down')
		}
	})

	let projectRect = projectHeading[0].getBoundingClientRect()

	if(projectRect.top < window.innerHeight/1.5){
		projects.forEach(elem => {
			elem.classList.remove('smaller')
		})
	} else {
		projects.forEach(elem => {
			elem.classList.add('smaller')
		})
	}

}

let nav = document.getElementsByTagName('nav')[0];
let navList = document.getElementsByClassName('navButtonList')[0]
let sliders = document.querySelectorAll('.slide-in');
let projects = document.querySelectorAll('.projectWrap');
let projectHeading = document.querySelectorAll('#projects');

window.addEventListener('scroll', debounce(scrollEffects))


// Modal Actions

let projectBox = document.getElementsByClassName('projectBox')[0];

projectBox.addEventListener('click',function(e){

	let btn = e.target.closest('div')
	let openModal = document.querySelectorAll('.openModal');
	var modal1 = document.getElementById("myModal1");	
	var modal2 = document.getElementById("myModal2");
	var modal3 = document.getElementById("myModal3");
	var modal4 = document.getElementById("myModal4");

	let modalObj = {
		modal1:modal1,
		modal2:modal2,
		modal3:modal3,
		modal4:modal4
	}

	for(let i=1;i<=openModal.length;i++){
		if(btn.id === `openModal${i}`){
			modalObj[`modal${i}`].style.display = 'block'
		}
	}

	if(e.target.classList.contains('modal-close') || e.target.classList.contains('modal')){
		var modalClosers = document.querySelectorAll(".modal-close");
		modalClosers.forEach((e,i)=>{
			modalObj[`modal${i+1}`].style.display = 'none';
		})
	}
})
