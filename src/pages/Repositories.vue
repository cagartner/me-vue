<template>
    <div>
        <img-avatar :src="user.avatar_url" :title="user.name"/>
        <router-link class="btn btn-outline-secondary button-back" to="/">
            <i class="fa fa-angle-left" aria-hidden="true"></i> voltar
        </router-link>

        <header class="page-header">
            <h1 class="display-3">{{ user.name }}</h1>
            <small>{{ user.bio }}</small>
        </header>

        <div class="sections">
            <h3>Repositórios de Carlos</h3>

            <div class="row">
                <div class="col-sm-6 col-md-4" v-for="repo in sorted">
                    <div class="card card-block repositorie-card">
                        <h4 class="card-title">{{ repo.full_name }}</h4>
                        <p>{{ repo.description }}</p>
                        <a href="#" class="card-link">
                            <i class="fa fa-star-o"></i>
                            <span class="badge">{{ repo.stargazers_count }}</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<style lang="scss">
    .repositorie-card {
        .card-title {
            font-size: 1.2rem;
        }
    }

    .button-back {
        border-radius: 3rem;
        position: absolute;
        top: -3.5rem;
        color: white;
        border: solid 1px white;

        &:hover,
        &:visited,
        &:focus,
        &:active {
            background: rgba(0, 0, 0, 0.2);
        }
    }
</style>

<script>
    import Avatar from '../layouts/Avatar.vue'

    export default{
        name: 'Repositories',

        data() {
            return {
                repositories: []
            }
        },

        mounted() {
            this.getRepositoriesList()
        },

        computed: {
            sorted() {
                return this.repositories.sort(function(a, b){
                    if(a.stargazers_count < b.stargazers_count) return 1;
                    if(a.stargazers_count > b.stargazers_count) return -1;
                    return 0;
                });
            },

            user() {
                return this.$store.state.user;
            }
        },

        methods: {
            getRepositoriesList() {
                var me = this
                this.$http.get(me.user.repos_url).then((response) => {
                    // success callback
                    me.$set(me, 'repositories', response.body)
                }, (response) => {
                    // error callback
                });
            }
        },

        components: {
            'img-avatar': Avatar
        }
    }

</script>
