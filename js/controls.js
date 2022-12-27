import Timer from './timer.js'

export default function({
    minutesLabel,
    secondsLabel
}){

    

    let minutes = 0;
    let seconds = 0;
    let timer = null;

    function play(){
        if(minutes == 0 && seconds == 0){
            return
        }

        if(timer){
            return
        }

        timer = Timer({
            minutes,
            seconds,
            update        
        });
        timer.play()
    }

    function stop(){
        timer.stop()
        timer = null;
    }
    

    function addMinutes(){
        if(timer){
            return
        }
        minutes += 5
        update(minutes, seconds)
    }

    function removeMinutes(){
        if(timer){
            return
        }

        if(minutes > 5){
            minutes -= 5
            update(minutes, seconds)
        }
    }


    function update(min, sec){
        minutesLabel.innerText = min < 10 ? `0${min.toString()}` : min.toString()
        secondsLabel.innerText = sec < 10 ? `0${sec.toString()}` : sec.toString()

        minutes = min
        seconds = sec
    }


    return {
        play,
        stop,
        addMinutes,
        removeMinutes
    }

}