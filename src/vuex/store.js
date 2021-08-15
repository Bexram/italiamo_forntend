import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

let store = new Vuex.Store({
    state: {
        content: []
    },
    mutations: {
        SET_CONTENT: (state, content) => {
            state.content = content;
        },
    },
    actions: {
        GET_CONTENT({ commit } ) {
            return axios({
                method: "GET",
                url: "https://bexram.pythonanywhere.com/getcontent/1/",
            })
                .then((response) => {
                    commit("SET_CONTENT", response.data);
                    return response;
                })
                .catch((error) => {
                    console.log(error);
                    return error;
                });
        },
    },
    getters: {
        CONTENT(state) {
            return state.content;
        },
    }
})

export default store;



