const timerButton = document.querySelectorAll('.timer__button')
const timerDisplay = document.querySelector('.display__time-left')
const endTimer = document.querySelector('.display__end-time')
const form = document.querySelector('form')
    // 计时器
let countdown = null

function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60)
    const sec = seconds % 60
    timerDisplay.textContent = `${minutes}:${sec < 10 ? 0 : ''}${sec}`
}

function displayEndTime(timestamp) {
    const end = new Date(timestamp)
    const hour = end.getHours()
    const adjustedHour = hour < 10 ? '0' + hour : hour
    const minutes = end.getMinutes()
    const adjustedMinutes = minutes < 10 ? '0' + minutes : minutes
    const seconds = end.getSeconds()
    const adjustedseconds = seconds < 10 ? '0' + seconds : seconds
    endTimer.textContent = `Be Back At ${adjustedHour} : ${adjustedMinutes} : ${adjustedseconds}`
}

function timer(seconds) {
    // 清除上一个计时器
    clearInterval(countdown)
    const now = Date.now()
        // 计算结束时间的时间戳
    const end = now + seconds * 1000
    displayTimeLeft(seconds)
        // endTimer.textContent = new Date(end).toLocaleTimeString("en-US", { hour12: false });
    displayEndTime(end)

    countdown = setInterval(() => {
        // 还剩多少秒
        const times = Math.round((end - Date.now()) / 1000)
            // 检查计时器是否超时
        if (times < 0) {
            clearInterval(countdown)
            return
        }
        displayTimeLeft(times)
    }, 1000)
}

function startTimer() {
    // 倒计时 单位 s
    const times = this.dataset.time
    timer(times)
}
// 点击按钮开始计时
timerButton.forEach(timer => { timer.addEventListener('click', startTimer) })
form.addEventListener('submit', function(e) {
    e.preventDefault()
        // 获取表单属性值 this[name].value
    const minutes = this.minutes.value;
    timer(minutes * 60)
        // 清除 input 中的文本
    this.reset();
})