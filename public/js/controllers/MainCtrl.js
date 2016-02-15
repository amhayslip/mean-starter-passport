app.controller('MainCtrl', [
'$scope',
function($scope){
  $scope.questions = {}

  $scope.toggleAnswer = function (num) {
    this.questions[num] = !this.questions[num];
  }
}]);