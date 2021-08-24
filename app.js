const CountdownTimer = {
    selectorDays: document.querySelector('#timer-1 .value-days'),
    selectorHours: document.querySelector('#timer-1 .value-hours'),
    selectorMins: document.querySelector('#timer-1 .value-mins'),
    selectorSecs: document.querySelector('#timer-1 .value-secs'),
    targetDate: new Date('Aug 26, 2021'),
  };

const timer = {
    start() {
        const startTime = CountdownTimer.targetDate;

        setInterval(() => {
            const currentTime = new Date().getTime();
            const distance = CountdownTimer.targetDate - currentTime;
            const { days, hours, mins, secs } = getTimeComponents(distance)
            CountdownTimer.selectorDays.innerHTML = days
            CountdownTimer.selectorHours.innerHTML = hours
            CountdownTimer.selectorMins.innerHTML = mins
            CountdownTimer.selectorSecs.innerHTML = secs
            console.log(`${days}:${hours}:${mins}:${secs}`)
        }, 1000)
    }
}

timer.start()

function pad(value) {
    return String(value).padStart(2, '0')
}

function getTimeComponents(time) {
    const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

    return { days, hours, mins, secs }
}