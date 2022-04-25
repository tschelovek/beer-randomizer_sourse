import { defineStore } from "pinia";
import axios from "axios";

export const useUserStore = defineStore("user", {
    state: () => ({
        user: [],
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
    },
})
