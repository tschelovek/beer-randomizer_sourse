import { defineStore } from "pinia";
import axios from "axios";

export const useBeerStore = defineStore("beer", {
    state: () => ({
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
    }),
    getters: {
    },
    actions: {

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
