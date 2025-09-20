interface User{
    name:string,
    age: number,
    greet:()=>string,
}
let user:User={
    name:"ahu",
    age:34,
    greet:()=>{
        return "hi"
    }
    
}
const greeting=user.greet()
console.log(greeting)