function greet(name:string):string{
    return "Hello" + name
}
function isEven(num: number):boolean{
    if(num%2==0){
        return true
        
    }else{
        return false
    }
}
const greeting=greet("123")
console.log(greeting)