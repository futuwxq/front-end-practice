const video = document.querySelector('.viewer')
const progress = document.querySelector('.progress')
const progressFilled = document.querySelector('.progress__filled')
const toggle = document.querySelector('.toggle')
const range = document.querySelectorAll('.player__slider')
const skip = document.querySelectorAll('.skip')

// play  pause
function togglePlay() {
    const method = video.paused ? 'play' : 'pause'
    video[method]()
}
// play 事件 和 pause 事件
function updateButton() {
    const icon = this.paused ? '►' : '❚ ❚'
    toggle.textContent = icon
}

// 快进 后退
function handleSkip() {
    video.currentTime += parseFloat(this.dataset.skip)
}

// progress__filled 进度条处理
function handleProgress() {
    const percent = this.currentTime / this.duration * 100
    progressFilled.style['flex-basis'] = `${percent}%`
}
// 点击，拖拉进度条
function handleProgressBar(e) {
    // console.log(e);
    const progressTime = e.offsetX / progress.offsetWidth * video.duration
    video.currentTime = progressTime
}
// 音量 和倍速播放
function handleRange() {
    video[this.name] = this.value
}
video.addEventListener('click', togglePlay)
video.addEventListener('play', updateButton)
video.addEventListener('pause', updateButton)

skip.forEach(skip => {
    skip.addEventListener('click', handleSkip)
})

video.addEventListener('timeupdate', handleProgress)
toggle.addEventListener('click', togglePlay)

let mousedown = false
progress.addEventListener('click', handleProgressBar)
    // progress.addEventListener('mousemove', mousedown && handleProgressBar)
progress.addEventListener('mousemove', e => mousedown && handleProgressBar(e))
progress.addEventListener('mousedown', () => mousedown = true)
progress.addEventListener('mouseup', () => mousedown = false)

range.forEach(range => {
    range.addEventListener('mousemove', handleRange)
    range.addEventListener('change', handleRange)
})