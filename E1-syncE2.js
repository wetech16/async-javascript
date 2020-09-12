//Example for not getting data back
console.log("Start");
function loginUser (email, password){
    setTimeout(() => {
        console.log("We see log but can't get data back");
        return {userEmail: email};
    },1500);
}
const user = loginUser('devedf@goomail.com', 123456);
console.log(user);
console.log("Finish");