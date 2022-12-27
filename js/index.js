import Sound from './sound.js'
import Controls from './controls.js'
import { minutes, seconds, play, stop, plus, less, florest, rain, coffe, fireplace } from './elements.js';

const controls = Controls({ minutesLabel: minutes, secondsLabel: seconds })
const sound = Sound();

play.addEventListener('click', () => {
    controls.play()
})

stop.addEventListener('click', () => {
    controls.stop()
})

plus.addEventListener('click', () => {
    controls.addMinutes()
})


less.addEventListener('click', () => {
    controls.removeMinutes()
})

florest.addEventListener('click', () => {
    unselect_all()
    florest.classList.add('item-selected')
    sound.play('music/florest.wav')
});

rain.addEventListener('click', () => {
    unselect_all()
    rain.classList.add('item-selected')
    sound.play('music/rain.wav')
})

coffe.addEventListener('click', () => {
    unselect_all()
    coffe.classList.add('item-selected')
    sound.play('music/coffe.wav')
})

fireplace.addEventListener('click', () => {
    unselect_all()
    fireplace.classList.add('item-selected')
    sound.play('music/fireplace.wav')
})


function unselect_all(){
    florest.classList.remove('item-selected')
    rain.classList.remove('item-selected')
    coffe.classList.remove('item-selected')
    fireplace.classList.remove('item-selected')
}
