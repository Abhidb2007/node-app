interface User{
    firstName: string;
    lastName: string;
    age: number;
};
function isLegalAge(user:User){
    if(user.age>=18){
        return true;
    }else{
        return false;
    }
}    
    function greet(user:User){
        console.log("hi there"+user.firstName);
    }
    isLegalAge({
    firstName: "John",
    lastName: "Doe",
    age: 20
    })


