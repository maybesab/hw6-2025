// Fixed and complete JS for HW#6 - JavaScript Video Basics

var video;

window.addEventListener("load", function () {
  console.log("Good job opening the window");

  video = document.querySelector("#player1");
  video.autoplay = false;
  video.loop = false;
  video.volume = 1.0; // initialize volume to 100%

  document.getElementById("volume").innerHTML = video.volume * 100 + "%";
});

// Play

document.querySelector("#play").addEventListener("click", function () {
  video.play();
  document.getElementById("volume").innerHTML = video.volume * 100 + "%";
});

// Pause

document.querySelector("#pause").addEventListener("click", function () {
  video.pause();
});

// Slow Down

document.querySelector("#slower").addEventListener("click", function () {
  video.playbackRate *= 0.9;
  console.log("New speed is", video.playbackRate);
});

// Speed Up

document.querySelector("#faster").addEventListener("click", function () {
  video.playbackRate /= 0.9;
  console.log("New speed is", video.playbackRate);
});

// Skip Ahead

document.querySelector("#skip").addEventListener("click", function () {
  if (video.currentTime + 10 >= video.duration) {
    video.currentTime = 0;
  } else {
    video.currentTime += 10;
  }
  console.log("Current location:", video.currentTime);
});

// Mute/Unmute

document.querySelector("#mute").addEventListener("click", function () {
  video.muted = !video.muted;
  this.textContent = video.muted ? "Unmute" : "Mute";
});

// Volume Slider

document.querySelector("#slider").addEventListener("input", function () {
  video.volume = this.value / 100;
  document.getElementById("volume").innerHTML = video.volume * 100 + "%";
});

// Style: Vintage

document.querySelector("#vintage").addEventListener("click", function () {
  video.classList.add("oldSchool");
});

// Style: Original

document.querySelector("#orig").addEventListener("click", function () {
  video.classList.remove("oldSchool");
});
