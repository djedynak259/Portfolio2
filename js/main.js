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

window.addEventListener('scroll', debounce(checkScrollThings))


// Modal  

let projectBox = document.getElementsByClassName('projectBox')[0];

projectBox.addEventListener('click',function(e){

	let btn = e.target.closest('div')

	var one = document.getElementById("myModal1");	
	var two = document.getElementById("myModal2");
	var three = document.getElementById("myModal3");
	var four = document.getElementById("myModal4");

	console.log(btn)

	if(btn.id === 'openModal1'){
		
		one.style.display = 'block';
	}
	if(btn.id === 'openModal2'){

		two.style.display = 'block';
	}	
	if(btn.id === 'openModal3'){
		
		three.style.display = 'block';
	}
	if(btn.id === 'openModal4'){
		
		four.style.display = 'block';
	}

	var modalClosers = document.querySelectorAll(".modal-close");
	modalClosers.forEach(e=>{
		one.style.display = 'none';
		two.style.display = 'none';
		three.style.display = 'none';
		four.style.display = 'none';
	})


	let openModal = document.querySelectorAll('.openModal');
	let modals = document.getElementsByClassName('modal');

	// console.log(openModal)

	// openModal.forEach((e,i)=>{
	// 	console.log(e)
	// 	if(e.classList.contains('openModal')){
	// 		modals[i].style.display = 'block'
	// 	}
	// })


})

// Get the modal
var modal1 = document.getElementById('myModal1');

window.onclick = function(event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
}
