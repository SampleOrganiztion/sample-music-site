const song = document.getElementById('song');
const startTime = document.getElementById('start-time');
const trackBar = document.getElementById('track-bar');
const endTime = document.getElementById('end-time');
const playPause = document.getElementById('play-pause');

song.onloadedmetadata = () => {
    trackBar.max = Math.trunc(song.duration);
    // endTime.innerHTML = trackBar.max;

    const durationInMinutes = () => {
        const minutes = Math.floor(song.duration / 60);
        const remainingSeconds = Math.floor(song.duration % 60);
        endTime.innerHTML = `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    }
    durationInMinutes();
}

song.ontimeupdate = () => {
    trackBar.value = song.currentTime;

    const currentTimeInMinutes = () => {
        const minutes = Math.floor(song.currentTime / 60);
        const remainingSeconds = Math.floor(song.currentTime % 60);
        startTime.innerHTML = `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    }
    currentTimeInMinutes();
}

trackBar.oninput = () => {
    song.currentTime = trackBar.value;
}

playPause.onclick = () => {
    if (song.paused) {
        song.play();
        playPause.classList.remove('fa-play');
        playPause.classList.add('fa-pause');
    } else {
        song.pause();
        playPause.classList.remove('fa-pause');
        playPause.classList.add('fa-play');
    }
}