// Loader

window.addEventListener('load', function loaded(){
	window.removeEventListener('load',loaded,false)
	showPage()
})

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("allWrap").style.visibility = "visible";
}


// Nav jump


// document.getElementById('navAlignLeft').addEventListener('click', function(){
// 	let el = document.getElementsByClassName('navButtonList')[0];
// 	el.style.animationName= 'navFlexLeft';
// })

// document.getElementById('navAlignRight').addEventListener('click', function(){
// 	let el = document.getElementsByClassName('navButtonList')[0];
// 	el.style.animationName= 'navFlexRight';
// })


// Button Zooming
document.getElementsByClassName('navBtn')[0].addEventListener('click',function(event){
	let reccommendations = document.getElementById('recommendations');
		reccommendations.scrollIntoView(true);
})

document.getElementsByClassName('navBtn')[1].addEventListener('click',function(event){
	let projects = document.getElementById('projects');
		projects.scrollIntoView(true);
})

document.getElementsByClassName('navBtn')[2].addEventListener('click',function(event){
	let contact = document.getElementById('contact');
		contact.scrollIntoView(true);
})

document.getElementsByClassName('navBtn')[2].addEventListener('click',function(event){
	let contact = document.getElementById('contact');
		contact.scrollIntoView(true);
})


// Modal  

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myModal1");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("modal-close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
// Modal  End
