const day = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота']
const getRandom = (min, max) => {
    if (min > max) [min, max] = [max, min]
    return Math.floor(Math.random() * (max - min) + min);
}

const App = {
    data() {
        return {
            hello: 'Everyone hello!',
            x: getRandom(10, 100),
            y: getRandom(-20, 25),
            res: 0,
            countClick: 0,
            img: 'dunder.gif',
            today: new Date(),
            nextDay: new Date(new Date().getTime() + (24 * 60 * 60 * 1000)),
            toDWeek: day[new Date().getDay()],
            ch: 0,
            chet: '',
            ch3: 0,
            chP3: getRandom(1, 100),
            res3: '',

        }
    },
    methods: {
        getSum() {
            this.res = this.x + this.y;
        },
        calcClick() {
            this.countClick++;
        },
        getDayTom() {
            return day[(this.nextDay).getDay()];
        },
        getChet() {
            if (this.ch % 2 == 0) {
                this.chet = 'Чет'
            }
            else {this.chet = 'Нечет'}
        },
        getCh3(){
            if (this.ch3 < this.chP3) this.res3 = 'Больше'
            else if(this.ch3 > this.chP3) this.res3 = 'Меньше'
            else this.res3 = 'Оно!'
        }
    }
}
Vue.createApp(App).mount('#app')