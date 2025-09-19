function delayedCall(anotherFn:() =>void){
    setTimeout(anotherFn,5000);
}
function log(){
    console.log("SFs")
}
delayedCall(log)