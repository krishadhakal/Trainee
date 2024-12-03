const content = document.querySelector('.container'),
playImage = content.querySelector('.music-image img'),
musicName = content.querySelector('.music-title .name'),
musicArtist = content.querySelector('.music-title .artist'),
Audio = document.querySelector('.main-song'),
playBtn = content.querySelector('.play-pause'),
playBtnIcon = content.querySelector('.play-pause i'),
prevBtn = content.querySelector('#prev'),
nextBtn = content.querySelector('#next'),
progressBar = content.querySelector('.progress-bar'),
progressDetails = content.querySelector('.progress-details'),
repeatBtn = content.querySelector('#repeat'),
Shuffle = content.querySelector('#shuffle');

let index = 1;

window.addEventListener('load', ()=>{
    loadData(index);
    // Audio.play();
});

function loadData(indexValue){
    musicName.innerHTML = songs[indexValue-1].name;
    musicArtist.innerHTML = songs[indexValue-1].artist;
    playImage.src = 'img/' + songs[indexValue-1].img + '.jpg';
    Audio.src = 'music/'+ songs[indexValue-1].audio+'.mp3';
}

playBtn.addEventListener('click', ()=>{
    const isMusicPaused = content.classList.contains('paused');
    if(isMusicPaused){
        pauseSong();
    }
    else{
        playSong();
    }
});

function playSong(){
    content.classList.add('paused');
    playBtnIcon.classList.replace('bi-play-fill', 'bi-pause-fill');
    Audio.play();
    document.querySelector('.music-image img').style.animationPlayState = 'running';
}

function pauseSong(){
    content.classList.remove('paused');
    playBtnIcon.classList.replace('bi-pause-fill', 'bi-play-fill');
    Audio.pause();
    document.querySelector('.music-image img').style.animationPlayState = 'paused';
}

nextBtn.addEventListener('click', ()=>{
    nextSong();
});

prevBtn.addEventListener('click', ()=>{
    prevSong();
});

function nextSong(){
    index++;if(index > songs.length){
        index = 1;
    }
    else{
        index = index;
    }
    loadData(index);
    playSong();
}

function prevSong(){
    index--;
    if(index <= 0){
        index = songs.length;
    }
    else{
        index = index;
    }
    loadData(index);
    playSong();
}

Audio.addEventListener('timeupdate', (e)=>{
    const initialTime = e.target.currentTime;
    const finalTime = e.target.duration;
    let BarWidth = (initialTime / finalTime) * 100;
    progressBar.style.width  = BarWidth + '%';

    progressDetails.addEventListener('click', (e)=>{
        let progressValue = progressDetails.clientWidth;
        let clickedOffsetX = e.offsetX;
        let MusicDuration = Audio.duration;
        Audio.currentTime = (clickedOffsetX / progressValue) * MusicDuration;
    });

    Audio.addEventListener('loadeddata', ()=>{
        let finalTimeData = content.querySelector('.final');
        let AudioDuration = Audio.duration;
        let finalMinutes = Math.floor(AudioDuration / 60);
        let finalSeconds = Math.floor(AudioDuration % 60);
        if(finalSeconds < 10){
            finalSeconds = '0' + finalSeconds;
        }
        finalTimeData.innerText = finalMinutes + ':' + finalSeconds;
    });

    let currentTimeData = content.querySelector('.current');
    let CurrentTime = Audio.currentTime;
    let currentMinutes = Math.floor(CurrentTime / 60);
    let currentSeconds = Math.floor(CurrentTime % 60);
    if(currentSeconds < 10) {
        currentSeconds = '0' + currentSeconds; 
    }
    currentTimeData.innerText = currentMinutes + ':' + currentSeconds;

    repeatBtn.addEventListener('click', () =>{
        Audio.currentTime = 0;
    });
});

// shuffle
Shuffle.addEventListener('click', () =>{
    var randIndex = Math.floor(Math.random() * songs.length) + 1;
    loadData(randIndex);
    playSong();
});

Audio.addEventListener("ended", ()=>{
    index++;
    if(index > songs.length){
        index = 1;
    }
    loadData(index);
    playSong();
});

