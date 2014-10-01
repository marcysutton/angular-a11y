myStuff.directive('ngEnter', function () {
  return function (scope, element, attrs) {
    element.bind("keydown keypress", function (event) {
      if(event.which === 13) {
        scope.$apply(function (){
          scope.$eval(attrs.ngEnter);
        });
        event.preventDefault();
      }
    });
  };
})
.directive('ngArrow', function(){
  return function (scope, element, attrs) {
    element.bind("keydown keypress", function (event) {
      if(event.which === 40 || event.which === 38) {
        scope.$apply(function (){
          scope.$eval(attrs.ngArrow);
        });
        if(event.which === 40){
          scope.$index++;
        }
        if(event.which === 38){
          scope.$index--;
        }
        event.preventDefault();
      }
    })
  }
});