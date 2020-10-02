//Async examples to get data back
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
  });
}

async function displayUser() {
  const loggedUser = await loginUser("ed", 12345);
  const videos = await getUserVideos(loggedUser.userEmail);
  const detail = await videoDetails(videos[0]);
  console.log(detail);
}
displayUser();
console.log("Finish");
