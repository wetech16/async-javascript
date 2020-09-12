//Promise examples to get data back
console.log("Start");

function loginUser(email, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ userEmail: email });
    }, 1500);
  });
}
function getUserVideos(email) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["video1", "video2"]);
    }, 1000);
  });
}
function videoDetails(video) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("title of the video");
          }, 1000);
    })
}
loginUser("devedf@goomail.com", 123456,)
.then(user => getUserVideos(user.userEmail))
.then(videos => videoDetails(videos[0]))
.then(detail => console.log(detail))

console.log("Finish");
