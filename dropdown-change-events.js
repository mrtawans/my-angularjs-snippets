var app = angular.module("app", []);


    app.controller("ChangeController", function ($scope) {

        $scope.CheckBoxChanged = function () {
            $scope.CheckBoxStatus = $scope.chkValue;
        };

        $scope.TextBoxChanged = function () {
            $scope.TextBoxStatus = $scope.txtValue;
        };

        $scope.DropDownChnaged = function () {
            $scope.DropDownStatus = $scope.dropValue;
        };

    });


// html
<div ng-app="app" ng-controller="ChangeController">
    <input type="checkbox" name="chk1" ng-model="chkValue" ng-change="CheckBoxChanged()" />
    <p>Check box status: {{ CheckBoxStatus }}</p>
    
    <hr />
    <input type="text" name="txt1" ng-model="txtValue" ng-change="TextBoxChanged()" />
    <p>Text box status: {{ TextBoxStatus }}</p>

    <hr />
    <select name="dropChange" ng-model="dropValue" ng-change="DropDownChnaged()">
        <option value="M">Male</option>
        <option value="F">Female</option>
    </select>
    <p>Dropdown box status: {{ DropDownStatus }}</p>
</div>