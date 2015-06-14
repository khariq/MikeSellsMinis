
var newOfferController = app.controller('newOfferController', ['$scope', '$http', 'OfferFactory', function($scope, $http, OfferFactory){


	$scope.submit = function() {

		if ($scope.name == '' ||
			$scope.description == '' ||
			$scope.numberInLot <= 0 ||
			$scope.msrp <= 0 ||
			$scope.askingPrice <= 0)
		{
			return;
		}

		OfferFactory.create({
			name: $scope.name,
			description: $scope.description,
			numberInLot: $scope.numberInLot,
			msrp: $scope.msrp,
			askingPrice: $scope.askingPrice,
			images: $scope.images,
			tags: $scope.tags
		});

		$scope.tags = [];
		$scope.name = '';
		$scope.description = '';
		$scope.numberInLot = 0;
		$scope.msrp= 0.0;
		$scope.askingPrice = 0.0;
		$scope.images = [];

	}

	$scope.tags = [];
	$scope.name = '';
	$scope.description = '';
	$scope.numberInLot = 0;
	$scope.msrp= 0.0;
	$scope.askingPrice = 0.0;
	$scope.images = [];

	$scope.newTag = function() {
		$scope.tags.push($scope.tag);
	}

}]);