angular.module("ContactListApp", [])

// .run(function($templateCache) {
//   $templateCache.put('/templates/contact-card.html');
// })

.controller('ListCtrl', function($scope){
	$scope.contacts = contactListArr;

})

.controller('AddCntCtrl', function($scope){
	
	$scope.addContact = function(newcont) {
		contactListArr.push(newcont);
		console.log(contactListArr);
		$scope.newcont = {
			firstName: '',
			lastName: '',
			cellNum: ''
		}
		// resetCreateForm();
	}

	// $scope.addContact = addContact;

	// function resetCreateForm(){
	// 	$scope.newcont = {
	// 		firstName: '',
	// 		lastName: '',
	// 		cell: ''
	// 	}
	// };

})

// .controller('SearchCntCtrl', function($scope){

// 	$scope.isDefault = true;
// 	$scope.isTyping = true;

// 	// function startTyping() {
// 	// 	$scope.isTyping= true;
// 	// 	$scope.isDefault = true;
// 	// }

// })

.directive ('myContact', function() {
	function link() {
	}
	
	function controller() {
		init();
	}

	return {
		restrict: 'E',
		template: "<div class='col-md-2 contactCard' ng-repeat='contact in contacts | filter:searchBox'><h4>{{contact.firstName}}</h4><h4>{{contact.lastName}}</h4><h4>{{contact.cellNum}}</h4></div>",
		scope: {
			contacts: '='
		},
		controller: controller,
		link: link
		// scope: {
		// 	contacts: '='
		// }
		// // templateUrl: 'contact_card.html'
	};
})

;

var contactListArr = [
	{
	firstName:"dan",
	lastName:"theman",
	cellNum:"(123)-123-1234"
	}, 
	{
	firstName:"ben",
	lastName:"randy",
	cellNum:"(123)-223-2234"
	},
	{
	firstName:"sara",
	lastName:"randy",
	cellNum:"(123)-223-2234"
	},
	{
	firstName:"sam",
	lastName:"randy",
	cellNum:"(123)-223-2234"
	},
	{
	firstName:"zach",
	lastName:"randy",
	cellNum:"(123)-223-2234"
	},
	{
	firstName:"pat",
	lastName:"randy",
	cellNum:"(123)-223-2234"
	},
	{
	firstName:"ben",
	lastName:"randy",
	cellNum:"(123)-223-2234"
	},
	{
	firstName:"phil",
	lastName:"johnson",
	cellNum:"(123)-223-2234"
	},
	{
	firstName:"ben",
	lastName:"johnson",
	cellNum:"(123)-223-2234"
	},
	{
	firstName:"ben",
	lastName:"johnson",
	cellNum:"(123)-223-2234"
	},
	{
	firstName:"chris",
	lastName:"randy",
	cellNum:"(123)-223-2234"
	},									
];






// function addContact(){
// 	var first = document.getElementById("firstName").value;
// 	var last = document.getElementById("lastName").value;
// 	var cell = document.getElementById("cell").value;
// 	var newContact = {firstName:first, lastName:last, cellNum:cell};
// 	addressBook.push(newContact);
// 	console.log(newContact);
// 	document.getElementById("addText").textContent = 'Contact Added: ' +
// 	newContact.firstName + ' ' + newContact.lastName + ' - ' + newContact.cellNum;
// 	document.forms[0].reset();
// 	return;
// }
	
// function searchContacts(){
// 	var first = document.getElementById("s-firstName").value;
// 	var last = document.getElementById("s-lastName").value;
// 	var searched =[];
// 	for (var i = 0; i < addressBook.length; i++) {
// 		if(first.toLowerCase()===addressBook[i].firstName.toLowerCase() || 
// 			last.toLowerCase()===addressBook[i].lastName.toLowerCase()){
// 			console.log(addressBook[i]);
// 			searched.push(addressBook[i]);
// 		} 	
// 	}
// 	if(searched.length===0){
// 		console.log("not found");
// 		document.getElementById("searchText").textContent = "Contact not found.";
//     	document.forms[1].reset();
//     	return;
// 	} else {
// 		var contacts ="";
// 		for (var i = 0; i < searched.length; i++) {
// 			contacts = contacts + searched[i].firstName + ' ' +
// 			searched[i].lastName + ' - ' + searched[i].cellNum + "<br/>";
// 		}	
// 		document.getElementById("searchText").innerHTML = contacts;
// 		document.forms[1].reset();
// 		return;
// 	}
// }