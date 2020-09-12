//sync code example run node async.js
//More callback examples to get data back
console.log("Start");

function loginUser(email, password, callback) {
  setTimeout(() => {
    callback({ userEmail: email });
  }, 1500);
}
function getUserVideos(email, callback) {
  setTimeout(() => {
    callback(["video1", "video2"]);
  }, 1000);
}
function videoDetails(video, callback) {
  setTimeout(() => {
    callback("title of the video");
  }, 1000);
}
const user = loginUser("devedf@goomail.com", 123456, (user) => {
  console.log(user);
  getUserVideos(user.userEmail, (video) => {
    console.log(video);
    videoDetails(video[0], (title) => {
      console.log(title);
    });
  });
});
console.log("Finish");
