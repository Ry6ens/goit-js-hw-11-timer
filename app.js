const refs = {
    selectorDays: document.querySelector('.value[data-value="days"]'),
    selectorHours: document.querySelector('.value[data-value="hours"]'),
    selectorMins: document.querySelector('.value[data-value="mins"]'),
    selectorSecs: document.querySelector('.value[data-value="secs"]'),
    targetDate: new Date('Aug 26, 2021'),
  };



class CountdownTimer {
    constructor({ selector, targetDate }) {
        this.selector = selector;
        this.targetDate = targetDate;
   }
    setInt = setInterval(() => {
        const currentTime = Date.now();
        const distance = this.targetDate - currentTime;
        this.getTimeComponents(distance)
        this.timeFinish(distance)
    }, 1000)
    getTimeComponents(time) {
        const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
        const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
        refs.selectorDays.innerHTML = days
        refs.selectorHours.innerHTML = hours
        refs.selectorMins.innerHTML = mins
        refs.selectorSecs.innerHTML = secs
    }
    pad(value) {
        return String(value).padStart(2, '0') 
    }
    timeFinish(time) {
        if (time < 0) {
            clearInterval(this.setInt);
            refs. clockFace .textContent = "Finish";
            }
        }
}

new CountdownTimer({
    selector: "#timer-1",
    targetDate: new Date("August 31, 2021"),
  });