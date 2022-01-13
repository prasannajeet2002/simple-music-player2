let audioElement = new Audio('./songs/1.mp3');
let playsong = document.getElementById('play');
let nextsong = document.getElementById('next');
let prevsong = document.getElementById('previous');
let current_Time = document.getElementById('current');
let totalTime = document.getElementById('total');
let songIndex = 0; 
let currentSong ;
let progressbar = document.getElementById('progressbar')
let songitems = Array.from(document.getElementsByClassName('song-capsule'));
let songname = document.getElementById('songname');

let songs = [
{songName: "Aashiq Banaya Aapne" , filepath: "songs/1.mp3"},
{songName: "Baarish Ban Jaana" , filepath: "songs/2.mp3"},
{songName: "Dil Ne Yeh Kaha Hain Dil Se" , filepath: "songs/3.mp3"},
{songName: "Humnava Mere" , filepath: "songs/4.mp3"},
{songName: "Mera Chand Mujhe Aaya Hai Nazar" , filepath: "songs/6.mp3"},
{songName: "Sang Hoon Tere" , filepath: "songs/5.mp3"},
{songName: "Tu Hi Mera" , filepath: "songs/7.mp3"},
{songName: "Tujhe Sochta Hoon" , filepath: "songs/8.mp3"},
{songName: "Tum Dil Ki Dhadkan Mein" , filepath: "songs/9.mp3"},
]

current_Time.innerText = audioElement.currentTime;
totalTime.innerText = audioElement.duration;

songitems.forEach((song , i)=>{
document.getElementsByClassName('song')[i].innerText = songs[i].songName;
})

playsong.addEventListener('click', ()=>{
    if (audioElement.paused || audioElement.currentTime<=0) {
        audioElement.play();
        playsong.classList.remove('fa-play-circle');
        playsong.classList.add('fa-pause-circle');
    }
    else{
        audioElement.pause();
        playsong.classList.remove('fa-pause-circle');
        playsong.classList.add('fa-play-circle');
    }
})
audioElement.addEventListener('timeupdate' , ()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    progressbar.value = progress;

    let minsduration = Math.floor(audioElement.duration/60);
    let secsduration = Math.floor(audioElement.duration%60);
    let total_duration =`${minsduration}:${secsduration}`;
    if (audioElement.duration) {
    
    totalTime.innerText = `${total_duration}` 
}

    let mins_duration = Math.floor(audioElement.currentTime/60);
    let secs_duration = Math.floor(audioElement.currentTime%60);
    if (secs_duration<10) {
        secs_duration =`0${secs_duration}`;
    }
    
    let current_duration =`${mins_duration}:${secs_duration}`;
    current_Time.innerText = `${current_duration}` 


})
progressbar.addEventListener('change' ,()=>{
audioElement.currentTime = progressbar.value*audioElement.duration/100;
})

audioElement.addEventListener('ended',()=>{
    if (songIndex>=8) {
        songIndex =0;
    }else{
        songIndex +=1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    songname.innerText = songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
  
    playsong.classList.remove('fa-play-circle');
    playsong.classList.add('fa-pause-circle');
})

const makeallplay = () => {
    Array.from(document.getElementsByClassName('clicktoplay')).forEach((element)=>{
    element.classList.remove('fa-pause-circle');
    element.classList.add('fa-play-circle');
    })
}
// const makeallpause = () => {
//     Array.from(document.getElementsByClassName('clicktoplay')).forEach((element)=>{
//     element.classList.remove('fa-play-circle');
//     element.classList.add('fa-pause-circle');
//     })
// }
 
Array.from(document.getElementsByClassName('clicktoplay')).forEach((element)=>{
element.addEventListener('click',(e)=>{
    console.log(e.target.className)
    if (e.target.className=='fas clicktoplay fa-1.2x fa-play-circle') {
        makeallplay();
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        songIndex = parseInt(e.target.id);
        audioElement.src = `songs/${songIndex+1}.mp3`;
        songname.innerText = songs[songIndex].songName;
        currentSong=songIndex;
        audioElement.currentTime=0;
        audioElement.play();
        // if (audioElement.currentTime>0) {
        //     AudioContext.resume();
        // }
        playsong.classList.remove('fa-play-circle');
        playsong.classList.add('fa-pause-circle');
    }
    
else{
        // makeallpause();
        audioElement.pause();
        // audioElement.currentTime=progress;
        e.target.classList.remove('fa-pause-circle');
        e.target.classList.add('fa-play-circle');
        playsong.classList.remove('fa-pause-circle');
        playsong.classList.add('fa-play-circle');
        

}
})
})

document.getElementById('next').addEventListener('click',()=>{
    if (songIndex>=8) {
        songIndex =0;
    }else{
        songIndex +=1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    songname.innerText = songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
  
    playsong.classList.remove('fa-play-circle');
    playsong.classList.add('fa-pause-circle');
})
document.getElementById('previous').addEventListener('click',()=>{
    if (songIndex<=0) {
        songIndex =8;
    }else{
        songIndex -=1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    songname.innerText = songs[songIndex].songName;
    
    audioElement.currentTime=0;
    audioElement.play();
    
    songs[songIndex].classList.remove('fa-play-circle');
    songs[songIndex].classList.add('fa-pause-circle');
    
    songs[songIndex+1].classList.remove('fa-pause-circle');
    songs[songIndex+1].classList.add('fa-play-circle');

    playsong.classList.remove('fa-play-circle');
    playsong.classList.add('fa-pause-circle');
})