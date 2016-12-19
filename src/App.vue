<template>
    <div class="container page">
        <router-view></router-view>
    </div>
</template>

<script>
    const apiUrl = 'https://api.github.com/users/cagartner'

    export default {
        name: 'App',
        data () {
            return {
                user: {}
            }
        },
        mounted() {
            this.getUserInfo()
            document.getElementById('loader').style.display = 'none';
        },
        methods: {
            getUserInfo() {
                var me = this
                this.$http.get(apiUrl).then((response) => {
                    // success callback
                    me.$set(me, 'user', response.body)
                }, (response) => {
                    // error callback
                });
            }
        }
    }
</script>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,700');
    /** Import bootstrap classes */
    @import "../node_modules/bootstrap/scss/bootstrap-flex.scss";

    $black-cl: #656D6F;
    $light-cl: #fff;
    $secundary-cl: #C2D1D5;

    #app * {
        font-weight: 300;
    }

    body {
        //background-color: $black-cl;
        color: $light-cl;
        font-family: 'Roboto', sans-serif;
        padding-top: 5rem;
        font-weight: 300;
        @extend .gradient;
    }

    h1 {
        font-size: 2rem;
        font-weight: 300;
    }

    a {
        color: #348AC7;
    }
    
    .gradient {
        background: #7474BF; /* fallback for old browsers */
        background: -webkit-linear-gradient(to left, #7474BF , #348AC7); /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to left, #7474BF , #348AC7); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    }

    .page {
        background-color: $light-cl;
        min-height: 40vh;
        box-shadow: 1px 3px 3px  darken($black-cl, 10%);
        padding: 5rem;
        margin-bottom: 3rem;
        color: $black-cl;
        position: relative;

        @media (max-width: 700px) {
            padding: 5rem 2rem 2rem;
        }
    }

    .page-header small {
        font-size: 1rem;
    }

    .sections {
        margin-top: 2rem;
        border-top: solid 1rem $secundary-cl;
        padding-top: 1rem;
    }
</style>
