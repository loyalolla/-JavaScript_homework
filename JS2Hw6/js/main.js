const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
    el: '#app',
    data: {
        userSearch: '',
        error: false,
    },
    methods: {
        getJson(url){
            return fetch(url)
                .then(response => {
                    if (response.ok) {
                        return response;
                    }

                    throw new Error(response.status);
                })
                .then(result => result.json())
                .catch(error => {
                    console.log(error);
                    this.error = true;
                    throw error;
                });
        },
    },
    mounted() {
        console.log(this);
    }
});
