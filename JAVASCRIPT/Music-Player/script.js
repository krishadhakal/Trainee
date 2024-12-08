const content = document.querySelector('.music-container');
const playPauseButton = document.querySelector(".play-paue i");
const prevButton = document.querySelector(".prev i");
const nextButton = document.querySelector(".next i");
const songName = document.querySelector(".music-title .name");
const artistName = document.querySelector(".music-title .artist");
const albumImage = document.querySelector(".top-bar"); 
const shuffleButton = document.querySelector('#shuffle');
const seekSlider = document.querySelector('.seek_slider'); // Assuming your seek slider has this class
const currentTimeDisplay = document.querySelector('.currentTime');
const totalTimeDisplay = document.querySelector('.totalTime');

let index = 1;
let audio = document.createElement('audio');
let updateTime;

// Load the first song
window.addEventListener('load', () => {
    loadData(index);
});

// Load song data
function loadData(indexValue) {
    songName.textContent = playlists[indexValue - 1].name;
    artistName.textContent = playlists[indexValue - 1].artist;
    albumImage.style.backgroundImage = `url(${playlists[indexValue - 1].image})`;
    audio.src = playlists[indexValue - 1].file;
    audio.load();
    audio.addEventListener('loadedmetadata', () => {
        totalTimeDisplay.textContent = formatTime(audio.duration);
        seekSlider.value = 0;
    });
    audio.addEventListener('ended', () => {
        nextSong(); 
    });
}

// Play or pause the song when the play/pause button is clicked
playPauseButton.addEventListener('click', () => {
    const isMusicPaused = content.classList.contains('playing');
    if (isMusicPaused) {
        pauseSong();
    } else {
        playSong();
    }
});

// Play the song
function playSong() {
    content.classList.add('playing');
    playPauseButton.classList.replace("bi-play-circle-fill", "bi-pause-circle-fill");
    audio.play();
}

// Pause the song
function pauseSong() {
    content.classList.remove('playing');
    playPauseButton.classList.replace("bi-pause-circle-fill", "bi-play-circle-fill");
    audio.pause();
}

// Go to the previous song
prevButton.addEventListener("click", () => {
    prevSong();
});

function prevSong() {
    index--;
    if (index <= 0) {
        index = playlists.length; 
    }
    loadData(index);
    playSong();
}

// Go to the next song
nextButton.addEventListener("click", () => {
    nextSong();
});

function nextSong() {
    index++;
    if (index > playlists.length) {
        index = 0; // Loop back to the first song
    }
    loadData(index);
    playSong();
}

// Shuffle the playlist
// shuffleButton.addEventListener('click', () => {
//     const randIndex = Math.floor(Math.random() * playlists.length);
//     loadData(randIndex + 1); // Add 1 to index for correct playlist entry
//     playSong();
// });

// Seek functionality
seekSlider.addEventListener('input', () => {
    seekTo(seekSlider.value);
});

function seekTo(value) {
    const seekTime = audio.duration * (value / 100);
    audio.currentTime = seekTime;
}

// Update the seek bar as the song plays
audio.addEventListener('timeupdate', () => {
    const progress = (audio.currentTime / audio.duration) * 100;
    seekSlider.value = progress;
    currentTimeDisplay.textContent = formatTime(audio.currentTime); // Display current time
});

// Format time from seconds to mm:ss
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

