function onYouTubeIframeAPIReady() {
    const playersList = document.querySelectorAll(".m-player")

   playersList.forEach(item => {
      let player = new YT.Player(item, {
          events: {
              'onReady': onPlayerReady
          }
      });
    })
}

function onPlayerReady(event) {
    console.log("видео готово")
    console.log(event.target)
    event.target.mute();
    event.target.playVideo();
}