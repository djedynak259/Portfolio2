// Loader

// function load() {
//     let myVar = setTimeout(showPage, 0050);
// }

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

document.getElementsByClassName('navBtn')[0].addEventListener('click',function(){
	let el = document.getElementsByClassName('contentWrap')[0];
	el.scrollIntoView(true);
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

!function(){

	function get(url){
		return new Promise(function(succeed,fail){
			var xhr = new XMLHttpRequest();
			xhr.open('get',url,true);
			xhr.addEventListener('load',function(){
				if(xhr.status < 400){
					succeed(xhr.responseText)
				} else fail(new Error('reQuest failed ' + xhr.statusText))
			})
			xhr.addEventListener('fail', function(){
				fail(new Error('Network error'))
			})
			xhr.send(null)
		})
	}

	let url = 'http://api.giphy.com/v1/gifs/search?q=ryan&api_key=a5c163ee9c29473580e365c6cc226a99&limit=6';

	get(url).then(function(text) {
		  console.log(JSON.parse(text));
		}, function(error) {
		  console.log("Failed to fetch data.txt: " + error);
	})


	// var xhr = new XMLHttpRequest();
	// xhr.open('get',`http://api.giphy.com/v1/gifs/search?q=ryan&api_key=a5c163ee9c29473580e365c6cc226a99&limit=6`, false);
	// xhr.addEventListener('load',function(){
	// 		console.log(JSON.parse(xhr.response), xhr.status)
	// })
	// xhr.send(null);

}();