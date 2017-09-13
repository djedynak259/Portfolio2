// Loader

function load() {
    let myVar = setTimeout(showPage, 0050);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("allWrap").style.display = "block";
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

// Form 

document.getElementById('form').addEventListener('submit', function(e){
	e.preventDefault();
	// let el = document.getElementById('errorMsg')

	console.log(document.getElementById('form').elements)
})

document.getElementById('form').elements.name.addEventListener('blur',function(e){
	let el = document.getElementById('name');
	let msg = document.getElementById('errorMsg');
	console.log(el.value.length)
	if(el.value.length < 5 && el.value.length){
		let errorEl = document.createElement('p')
		errorEl.className='nameError';
		let error = document.createTextNode('Name must have more characters');
		errorEl.appendChild(error);
		msg.appendChild(errorEl);
	}
	else {
		while (document.getElementsByClassName('nameError')[0]) {
	    msg.removeChild(document.getElementsByClassName('nameError')[0]);
		}
	}
})

document.getElementById('form').elements.email.addEventListener('blur',function(){
	let el = document.getElementById('form').elements.email.value;
	let msg = document.getElementById('errorMsg');
	let at = 0;
	let period = 0;
	for(let i=0;i<el.length;i++){
		if(el[i] === '@'){
			at++
		}
		if(el[i] === '.'){
			period++
		}
	}
	if(el.length && (at !== 1 || period !== 1)){
		let errorEl = document.createElement('p')
		errorEl.className = 'emailError';		
		let error = document.createTextNode('Must be valid email');
		errorEl.appendChild(error);
		msg.appendChild(errorEl);
	}
	else{
		while (document.getElementsByClassName('emailError')[0]) {
	    msg.removeChild(document.getElementsByClassName('emailError')[0]);
		}	
	}
})



function validate(){
	console.log('test')

}

// contactsubmit

   $('.submit').click(function() {
   		console.log('test this')

      $('#image-loader').fadeIn();

      var contactName = $('#contactForm #contactName').val();
      var contactEmail = $('#contactForm #contactEmail').val();
      var contactSubject = $('#contactForm #contactSubject').val();
      var contactMessage = $('#contactForm #contactMessage').val();

      var data = 'contactName=' + contactName + '&contactEmail=' + contactEmail +
               '&contactSubject=' + contactSubject + '&contactMessage=' + contactMessage;

      $.ajax({

	      type: "POST",
	      url: "inc/sendEmail.php",
	      data: data,
	      success: function(msg) {

            // Message was sent
            if (msg == 'OK') {
               $('#image-loader').fadeOut();
               $('#message-warning').hide();
               $('#contactForm').fadeOut();
               $('#message-success').fadeIn();   
            }
            // There was an error
            else {
               $('#image-loader').fadeOut();
               $('#message-warning').html(msg);
	            $('#message-warning').fadeIn();
            }

	      }

      });
      return false;
   });


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