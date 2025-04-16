var video;

window.addEventListener("load", function () {
  console.log("Good job opening the window");

  // Access video element and set initial properties
  video = document.getElementById("player1");
  video.autoplay = false;
  video.loop = false;

  // Display initial volume on load
  document.getElementById("volume").innerHTML = video.volume * 100 + "%";

  // Optional logging: video event feedback
  video.addEventListener("play", function () {
    console.log("Play Video");
  });

  video.addEventListener("pause", function () {
    console.log("Pause Video");
  });

  video.addEventListener("ended", function () {
    console.log("Video has ended");
  });
});

// Play the video and show volume
document.querySelector("#play").addEventListener("click", function () {
  video.play();
  document.getElementById("volume").innerHTML = video.volume * 100 + "%";
});

// Pause the video
document.querySelector("#pause").addEventListener("click", function () {
  video.pause();
});

// Slow the playback by 10%
document.querySelector("#slower").addEventListener("click", function () {
  video.playbackRate *= 0.9;
  console.log("New speed is", video.playbackRate.toFixed(2));
});

// Speed up the playback (inverse of slower)
document.querySelector("#faster").addEventListener("click", function () {
  video.playbackRate /= 0.9;
  console.log("New speed is", video.playbackRate.toFixed(2));
});

// Skip ahead 10 seconds (loop to start if past end)
document.querySelector("#skip").addEventListener("click", function () {
  if (video.currentTime + 10 >= video.duration) {
    video.currentTime = 0;
  } else {
    video.currentTime += 10;
  }
  console.log("Current location:", video.currentTime.toFixed(2));
});

// Toggle mute/unmute and update button label
document.querySelector("#mute").addEventListener("click", function () {
  video.muted = !video.muted;
  this.textContent = video.muted ? "Unmute" : "Mute";
});

// Adjust volume with slider and show value
document.querySelector("#slider").addEventListener("input", function () {
  video.volume = this.value / 100;
  document.getElementById("volume").innerHTML = video.volume * 100 + "%";
});

// Apply vintage style by adding oldSchool class
document.querySelector("#vintage").addEventListener("click", function () {
  video.classList.add("oldSchool");
});

// Remove vintage style by removing oldSchool class
document.querySelector("#orig").addEventListener("click", function () {
  video.classList.remove("oldSchool");
});