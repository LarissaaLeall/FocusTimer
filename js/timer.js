export default function({ minutes, seconds, update }) {

    let interval = null


    function play(){
        interval = setInterval(() => {
            minutes = seconds == 0 ? minutes - 1 : minutes
            seconds = seconds == 0 ? 59 : seconds - 1
            update(minutes, seconds)

            if(minutes == 0 && seconds == 0) {
                stop()
            }
        }, 1000)
    }


    function stop(){
        interval = clearInterval(interval)
    }


    return {
        play,
        stop
    }


}