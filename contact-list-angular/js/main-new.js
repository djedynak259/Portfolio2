angular.module("ContactListApp", [])

// .run(function($templateCache) {
//   $templateCache.put('/templates/contact-card.html');
// })

.factory('ContactsUtil', function(ContactsDataset) {
	return {
		searchQuery: '',
		addContact: addContact,
		removeContact: removeContact
	};

	function addContact(contact) {
		ContactsDataset.push(contact);
	}

	function removeContact(contact) {
		// ContactsDataset.forEach(function(c, i) {
		// 	if (c.firstName === contact.firstName &&
		// 		c.lastName === contact.lastName) {
		// 		ContactsDataset.splice(i, 1);
		// 	}
		// });
	}
})

.controller('ListCtrl', function($scope, ContactsDataset) {
	$scope.contacts = ContactsDataset;
})	

.controller('SearchCtrl', function($scope, ContactsUtil) {
	//ContactsUtil.searchQuery = $scope.query;
	$scope.$watch('query', function(newValue, old) {
		ContactsUtil.searchQuery = newValue;
	});
})

.controller('AddCntCtrl', function($scope, ContactsUtil){
	
	$scope.saveContact = function() {
		ContactsUtil.addContact($scope.newcont);
		$scope.newcont = {};
	}
})


.directive ('myContact', function() {
	
	function controller($scope, ContactsUtil) {
		$scope.query = ContactsUtil;
	}

	return {
		restrict: 'E',
		// templateUrl: 'contact-card.html';
		template: "<div class='col-md-2 contactCard' ng-repeat='contact in dataset | filter:query.searchQuery'><h4>{{contact.firstName}}</h4><h4>{{contact.lastName}}</h4><h4>{{contact.cellNum}}</h4></div>",
		scope: {
			dataset: '='
		},
		controller: controller
	
	};
})

.factory('ContactsDataset', function() {
	return [
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
		}					
	];
})

;