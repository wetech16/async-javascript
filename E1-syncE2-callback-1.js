//sync code example run node async.js
//callback example to get data back
console.log("Start");

function loginUser (email, password, callback){
    setTimeout(() => {
        callback({userEmail: email});
    },1500);
}
const user = loginUser('devedf@goomail.com', 123456, (user) => {
    console.log(user);
});
console.log("Finish");