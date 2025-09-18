"use Strict";
var Direction;
(function(Direction) {
    Direction[Direction["Up"]=0]="Up";
    Direction[Direction["Down"]=1]="Down";
    Direction[Direction["Right"]=2]="Right";
    Direction[Direction["left"]=3]="left";
})(Direction||(Direction={}));
function doSomething(keyPressed){
    if(keyPressed==Direction.Up){
   }
}
doSomething(Direction.Up);
doSomething(Direction.Down);
doSomething(Direction.Right);