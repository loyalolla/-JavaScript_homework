Vue.component('search', {
    props: ['value'],
    methods: {
        filter() {
            this.$root.$refs.products.filter();
        },
        onInput(event) {
            this.$emit('input', event.target.value);
        }
    },
    template: `
        <div class="cart">
            <div class="search">
                <form action="#" class="search-form" @submit.prevent="filter">
                    <input type="text" class="search-field" :value="value" @input="onInput">
                    <button class="btn-search" type="submit">
                        <i class="fas fa-search"></i>
                    </button>
                </form>
            </div>
        </div>
    `
});
