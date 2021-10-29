let audioElement = new Audio('./songs/1.mp3');
let playsong = document.getElementById('play');
let nextsong = document.getElementById('next');
let prevsong = document.getElementById('previous');
let songIndex = 0;
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
})
progressbar.addEventListener('change' ,()=>{
audioElement.currentTime = progressbar.value*audioElement.duration/100;
})

const makeallplay = () => {
    Array.from(document.getElementsByClassName('clicktoplay')).forEach((element)=>{
    element.classList.remove('fa-pause-circle');
    element.classList.add('fa-play-circle');
    })
}
 
Array.from(document.getElementsByClassName('clicktoplay')).forEach((element)=>{
element.addEventListener('click',(e)=>{
    makeallplay();
    e.target.classList.remove('fa-play-circle');
    e.target.classList.add('fa-pause-circle');
    songIndex = parseInt(e.target.id);
    audioElement.src = `songs/${songIndex+1}.mp3`;
    songname.innerText = songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    playsong.classList.remove('fa-play-circle');
    playsong.classList.add('fa-pause-circle');
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
    
    playsong.classList.remove('fa-play-circle');
    playsong.classList.add('fa-pause-circle');
})