import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(onTime,1000));
function onTime(e) {
    localStorage.setItem('videoplayer-current-time',JSON.stringify(e.seconds));
}
function onPlay(){
    const savedTime =  localStorage.getItem('videoplayer-current-time');
    if(savedTime){
        player.setCurrentTime(savedTime).then(function(seconds) {
            // seconds = the actual time that the player seeked to
        }).catch(function(error) {
            switch (error.name) {
                case 'RangeError':
                    // the time was less than 0 or greater than the video’s duration
                    break;
        
                default:
                    // some other error occurred
                    break;
            }
        });
    }
}
player.on('play',onPlay)