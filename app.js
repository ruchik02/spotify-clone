console.log("Welcome to Spotify");
// Intialize the variables
let songIndex=0;
let audioElement=new Audio('songs/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let progessBar=document.getElementById('progressBar');
let gif=document.getElementById('gif');
let masterSongName=document.getElementById('master-song-name');
let songItems=Array.from(document.getElementsByClassName('song-item'));


// list of songs,title,filepath,imgpath
let songs=[
    { songName:"Arijit Singh -khairiyat",filePath:"songs/1.mp3",coverPath:"img/1.jpg"},
    { songName:"Arijit Singh -Enna Sona",filePath:"songs/2.mp3",coverPath:"img/2.jpg"},
    { songName:"Arijit Singh -Soch Na Sake",filePath:"songs/3.mp3",coverPath:"img/3.jpg"},
    { songName:"Arijit Singh -Channa Mereya",filePath:"songs/4.mp3",coverPath:"img/4.jpg"},
    { songName:"Arijit Singh -Hawayein",filePath:"songs/5.mp3",coverPath:"img/5.jpg"},
    { songName:"Arijit Singh -Agar Tum Sath Ho",filePath:"songs/6.mp3",coverPath:"img/6.jpg"},
    { songName:"Arijit Singh -Hamdard",filePath:"songs/7.mp3",coverPath:"img/7.jpg"},
    { songName:"Arijit Singh -Phir Kabhi",filePath:"songs/8.mp3",coverPath:"img/8.jpg"},
    { songName:"Arijit Singh -Galti Se Mistake",filePath:"songs/9.mp3",coverPath:"img/9.jpg"},
    { songName:"Arijit Singh -Kabira",filePath:"songs/10.mp3",coverPath:"img/10.jpg"},
    { songName:"Arijit Singh -Naina",filePath:"songs/11.mp3",coverPath:"img/11.jpg"},
]

// show cover and song 
songItems.forEach((element,i)=>{
    // console.log(element,i);
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("song-name")[0].innerText=songs[i].songName;
})
// Handle play/pause click
 masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }else
    {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})


// listen to events
audioElement.addEventListener('timeupdate',()=>{
    // console.log("timeupdate");
    // update seekbar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    progessBar.value=progress;
})
// change 
progessBar.addEventListener('change',()=>{
    audioElement.currentTime=progessBar.value * audioElement.duration/100;
})
// song item play 
const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('song-item-play')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}


// change song using id 
Array.from(document.getElementsByClassName('song-item-play')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src=`songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

// next
document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})
// previous
document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

