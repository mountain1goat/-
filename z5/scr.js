
const App = {
    data() {
        return {
            img: '',
            conclusion: false,
        }
    },
    methods: {
        toShow1(e) {
            
            e.preventDefault();
            this.img = 'jhn.jpg';
            this.conclusion = true;
        },
        toShow2(e) {
            e.preventDefault();
            this.img = 'tw.jpg';
            this.conclusion = true;
        },
        toShow3(e) {
            e.preventDefault();
            this.img = 'ец.jpg';
            this.conclusion = true;
        },
        toShow4(e) {
            e.preventDefault();
            this.img = 'они.jpg';
            this.conclusion = true;
        }
        // toClear(e) {
        //     e.preventDefault();
        //     img = "",
        //     // this.conclusion = false;
        // }
    }
}



Vue.createApp(App).mount('#app')