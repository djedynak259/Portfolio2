// Loader

window.addEventListener('load', function loaded(){
	window.removeEventListener('load',loaded,false)
	showPage()
})

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("allWrap").style.visibility = "visible";
}

showPage()
// Nav Button Go-To Section

document.getElementsByClassName('navBtn')[1].addEventListener('click',function(event){
	var builtIns = document.getElementById('builtIns');
		builtIns.scrollIntoView({behavior: 'smooth', block: 'start', inline:'nearest'});
})

document.getElementsByClassName('navBtn')[2].addEventListener('click',function(event){
	var reccommendations = document.getElementById('recommendations');
		reccommendations.scrollIntoView({behavior: 'smooth', block: 'start', inline:'nearest'});
})

document.getElementsByClassName('navBtn')[3].addEventListener('click',function(event){
	var projects = document.getElementById('projects');
		projects.scrollIntoView({behavior: 'smooth', block: 'start', inline:'nearest'});
})

document.getElementsByClassName('navBtn')[4].addEventListener('click',function(event){
	var contact = document.getElementById('contact');
		contact.scrollIntoView({behavior: 'smooth', block: 'start', inline:'nearest'});
})

document.getElementsByClassName('navMobile')[0].addEventListener('click',function(event){
	var nav = document.getElementsByClassName('navButtonList')[0]
	if(nav.style.display === 'block'){
		nav.style.display = 'none'	
	}
	else {
		nav.style.display = 'block'	
	}
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
		var e = elem.getBoundingClientRect()
		
		var slideHeight = (window.innerHeight) - 20;

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

	var projectRect = projectHeading[0].getBoundingClientRect()

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

var nav = document.getElementsByTagName('nav')[0];
var navList = document.getElementsByClassName('navButtonList')[0]
var sliders = document.querySelectorAll('.slide-in');
var projects = document.querySelectorAll('.projectWrap');
var projectHeading = document.querySelectorAll('#projects');

window.addEventListener('scroll', debounce(scrollEffects))


// Modal Actions

var projectBox = document.getElementsByClassName('projectBox')[0];

projectBox.addEventListener('click',function(e){

	var btn = e.target.closest('div')
	var openModal = document.querySelectorAll('.openModal');
	var modal1 = document.getElementById("myModal1");	
	var modal2 = document.getElementById("myModal2");
	var modal3 = document.getElementById("myModal3");
	var modal4 = document.getElementById("myModal4");

	var modalObj = {
		modal1:modal1,
		modal2:modal2,
		modal3:modal3,
		modal4:modal4
	}

	for(var i=1;i<=openModal.length;i++){
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


// DropDown Menu

var list = ['', 'Apples', 'Oranges', 'Bananas', 'Pears', 'Strawberries']

var input = document.getElementById('search')
var divList = document.getElementById('divList')  
var body = document.getElementsByTagName('body')[0]

input.addEventListener('click', function(event){
  input.style.borderColor = 'coral'
  input.style.borderWidth = '3px'
  var oldDrop = document.getElementsByTagName('select')[0];
  if(oldDrop !== undefined){
    divList.removeChild(oldDrop)  
  }

  console.log('clickon')
  event.stopPropagation()
  
  var dropDown = document.createElement('select');
  
  var filterList = list.filter(e=>{
    return e.includes(input.value)
  })
  
  dropDown.size = list.length
  
  if(filterList.length > 0){
    for (var i=0;i<filterList.length;i++){
      var option = document.createElement('option')
      option.text = filterList[i]
      option.value = filterList[i]
      option.classList.add('dropFont')
      dropDown.appendChild(option)
      divList.style.display = 'block'
    }   
  } 
  else {
    divList.style.display = 'none'
  }
  dropDown.size = filterList.length > 1 ? filterList.length : 2
  divList.appendChild(dropDown) 

})

body.addEventListener('click', function(event){
  input.style.borderColor = '#8094A0'
  input.style.borderWidth = '1px'
  console.log('clickAway')
  var oldDrop = document.getElementsByTagName('select')[0];
  if(oldDrop != undefined){
    divList.removeChild(oldDrop)  
    divList.style.display = 'none';
  }
})

input.addEventListener('keyup',function(){
  var oldDrop = document.getElementsByTagName('select')[0];
  divList.removeChild(oldDrop)  
  
  var dropDown = document.createElement('select');
 
  var filterList = list.filter(e=>{
    return e.toLowerCase().includes(input.value.toLowerCase())
  })
  
  if(filterList.length > 0){
    for (var i=0;i<filterList.length;i++){
      var fruit = document.createElement('option')
      var textNode = document.createTextNode(filterList[i])
      fruit.appendChild(textNode)
      fruit.classList.add('dropFont')
      dropDown.appendChild(fruit)
    }   
    dropDown.size = filterList.length > 1 ? filterList.length : 2 
    divList.style.display = 'block'
  } 
  else {
    divList.style.display = 'none'
  }
  divList.appendChild(dropDown)

})

divList.addEventListener('click', function(e){
  console.log(e)
  input.value = e.target.value
  divList.style.display = 'none';  
})
