class AlarmClock {
    constructor () {
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock(time, callBack, ) {
        if(time === null || callBack === undefined) {
            throw new Error ("Отсутствуют обязательные аргументы")
        }

        if(this.alarmCollection.some((element) => element.time === time)) {
            console.warn('Уже присутствует звонок на это же время')
        }

        this.alarmCollection.push({callback: callBack, time: time, canCall: true})
        
    }

    removeClock(time) {
        this.alarmCollection = this.alarmCollection.filter((el) => el.time !== time);
    }

    getCurrentFormattedTime () {
        let date = new Date();
        let hour = (date.getHours() < 10 ? '0' : '') + date.getHours();
        let minutes = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
        return `${hour}:${minutes}`
    }

    start () {
        if(this.intervalId !== null) {
            return;
        }

        this.intervalId = setInterval(() => {
            this.alarmCollection.forEach((call) => {
                if (call.time === this.getCurrentFormattedTime()) {
                    call.canCall = false;
                    call.callback();
                } 
            })
        }, 1000)
    }

    stop () {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    resetAllCalls () {
        this.alarmCollection.forEach((call) => call.canCall = true)
    }

    clearAlarms () {
        this.stop();
        this.alarmCollection = [];
    }

}

// let clock = new AlarmClock ();
// clock.addClock('17:26', () => console.log('hi'))
// clock.start();
// console.log(clock);
// setTimeout(() => console.log(clock), 7000);
// setTimeout(() => clock.stop(), 10000);
// setTimeout(() => console.log(clock), 12000);
