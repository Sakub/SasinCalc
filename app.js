Vue.component('input-field', {
    template: `
    <div>
        <p class="app__number_input__label">Podaj liczbę:</p>
        <input type="number" @input="handleInput" v-model="userInput" class="app__number_input" max="20" onKeyDown="if(this.value.length==25 && event.keyCode!=8 || event.keyCode == 69 || event.keyCode == 188) return false;">

        <p class="app__result">{{sasins}} Sasin(a)</p>
    </div>`,
    data() {
        return {
            userInput: 0,
            sasins: 0
        };
    },
    methods: {
        handleInput() {
            const sasinValue = 70000000;
            const regexPattern = /\.0+$/;
            this.sasins = (this.userInput / sasinValue).toFixed(13).replace(regexPattern,'')
        }
    }
    
});

const app = new Vue({
    el: '#app'
});


