interface Admin{
    name:string;
    id:number;
    permission:string;
}
interface User{
    name:string;
    age: number;
}
type UserorAdmin=User|Admin;
function greet(user:UserorAdmin){
    console.log(user.name)
}
