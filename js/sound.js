export default function() {
    
    const audio = new Audio()

    function play(music_src) {
        audio.src = music_src
        audio.play()
    }

    return {
        play
    }

}