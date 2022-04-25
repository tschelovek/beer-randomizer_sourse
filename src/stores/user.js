import { defineStore } from "pinia";
import axios from "axios";

export const useUserStore = defineStore("user", {
    state: () => ({
        users: [],
    }),
    getters: {
        getUsers(state){
            return state.users
        }
    },
    actions: {
        async fetchBeer () {
            try {
                const data = await axios.get('https://random-data-api.com/api/beer/random_beer')
                this.users = data.data
            }
            catch (error) {
                alert(error)
                console.log(error)
            }
        },
        async fetchUser () {
            try {
                const data = await axios.get('https://random-data-api.com/api/users/random_user')
                this.users = data.data
            }
            catch (error) {
                alert(error)
                console.log(error)
            }
        },
    },
})
