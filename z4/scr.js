let name = document.getElementById('name')
let surname = document.getElementById('surname')
let email = document.getElementById('email')
let age = document.getElementById('age')

const App = {
    data() {
        return {
            nameM: name.value,
            surnameM: surname.value,
            emailM: email.value,
            ageM: age.value,
            conclusion: false,
        }
    },
    methods: {
        toShow(e) {
            e.preventDefault();
            this.conclusion = true;
        },
        toClear(e) {
            e.preventDefault();
            this.nameM = "",
            this.surnameM = "",
            this.emailM = "",
            this.ageM = ""
            // this.conclusion = false;
        }
    }
}



Vue.createApp(App).mount('#app')