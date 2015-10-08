
var a = angular.module('myApp', []);


a.controller('studentmain', ['$scope', function($scope) {
                 $scope.stname="";
                 $scope.stroll="";
        $scope.studenttable = [{
                name: "sai teja",
                roll: "11951A1238"
            }, {
                name: "karthik",
                roll: "11951A1254"
            }, {
                name: "santosh",
                roll: "11951A1240"
            }, {
                name: "nishanth",
                roll: "11951A1223"
            },

        ];
        $scope.addstudent = function(){
            console.log($scope.studenttable);
        	console.log("aaaa");
                 a=$scope.stname;
                 b=$scope.stroll;
            console.log(a);
            if(a.length == 0 || b.length == 0 || b.length < 10 )
               { alert("enter proper details")}
            else{
        	$scope.studenttable.push({
                name:a ,
                roll:b 

            })}

        };
    $scope.removeRow = function(name){				
		var index = -1;		
		var comArr = eval( $scope.studenttable );
        console.log(comArr);
		for( var i = 0; i < comArr.length; i++ ) {
			if( comArr[i].name === name ) {
				index = i;
				break;
			}
		}
		if( index === -1 ) {
			alert( "Something gone wrong" );
		}
		$scope.studenttable.splice( index, 1 );		
	};



    }




])
