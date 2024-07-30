function onYouTubeIframeAPIReady() {
    const playersList = document.querySelectorAll(".m-player")
    let player;
    playersList.forEach(item => {
        player = new YT.Player(item, {
            events: {
                'onReady': onPlayerReady
            }
        });

        console.log(player)
    })
}

function onPlayerReady(event) {
    console.log("видео готово")
    console.log(event.target)
    event.target.mute();
    event.target.playVideo();
}

function onYouTubeIframeAPIReady() {
    const playersList = document.querySelectorAll(".m-player")
    let player;
    player = new YT.Player('m-player', {
        events: {
            'onReady': onPlayerReady
        }
    });

}

