import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


    const iframe = document.querySelector('iframe');
    const player = new Player(this.iframe);

     function updateTime()  {
       const currentTime = player.setCurrentTime().then(function(seconds) {
        localStorage.setItem("videoplayer-current-time", seconds);
        }).catch(function(error) {
            switch (error.name) {
                case 'RangeError':
                    console.log(`Error`)
                    break;
                default:
                    player.on('timeupdate', throttle(this.updateTime, 1000));
                    break;
            }});
    };


player.on('play',updateTime);
