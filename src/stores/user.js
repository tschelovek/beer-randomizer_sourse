import { defineStore } from "pinia";
import axios from "axios";

export const useUserStore = defineStore("user", {
    state: () => ({
        user: [],
        beer: [],
        beerCounter: 0,
        brand: '',
        name: '',
        style: '',
        hop: '',
        yeast: '',
        malts: '',
        ibu: '',
        alcohol: '',
        blg: '',
        avatar: '',
        first_name: '',
        last_name: '',
        date_of_birth: '',
        employment: '',
    }),
    getters: {
        fullUserName(state){
            return `${state.first_name} ${state.last_name}`
        },
        age(state) {
            const ageMsec = Date.now() - Date.parse(state.date_of_birth);
            const ageDate = new Date(ageMsec);

            return Math.abs(ageDate.getUTCFullYear() - 1970);
        }
    },
    actions: {
        async fetchUser () {
            try {
                const data = await axios.get('https://random-data-api.com/api/users/random_user')
                this.user = data.data;
                this.avatar = data.data.avatar;
                this.first_name = data.data.first_name;
                this.last_name = data.data.last_name;
                this.date_of_birth = data.data.date_of_birth;
                this.employment = data.data.employment.title;
            } catch (error) {
                alert(error)
                console.log(error)
            }
        },
        async fetchBeer () {
            try {
                const data = await axios.get('https://random-data-api.com/api/beer/random_beer')
                this.beer = data.data;
                this.brand = data.data.brand;
                this.name = data.data.name;
                this.style = data.data.style;
                this.hop = data.data.hop;
                this.yeast = data.data.yeast;
                this.malts = data.data.malts;
                this.ibu = data.data.ibu;
                this.alcohol = data.data.alcohol;
                this.blg = data.data.blg;
            } catch (error) {
                alert(error)
                console.log(error)
            }
        },

        async oneMoreBeer() {
            this.beerCounter++;
            if (this.beerCounter === 4 || this.beerCounter === 8) {
                document.querySelector('#modal').showModal();
            }
            await this.fetchBeer()
        },
    },
})
