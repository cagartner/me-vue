<template>
    <div>
        <img-avatar :src="$parent.user.avatar_url" :title="$parent.user.name" />

        <header class="page-header">
            <h1 class="display-3">{{ $parent.user.name }}</h1>
            <small>{{ $parent.user.bio }}</small>
        </header>

        <div class="sections">
            <h3>Repositórios de Carlos</h3>

            <div class="row">

                <div class="col-xs-4" v-for="repo in sorted()">
                    <div class="card card-block" >
                        <h4 class="card-title">{{ repo.full_name }}</h4>
                        <a href="#" class="card-link">
                            <i class="fa fa-star-o"></i>
                            <span class="badge">{{ repo.stargazers_count }}</span>
                        </a>
                        <a href="#" class="card-link">

                        </a>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>
<style>
</style>
<script>
    import Avatar from '../layouts/Avatar.vue'

    export default{
        name: 'Repositories',

        data(){
            return{
                user: {},
                repositories: []
            }
        },

        mounted() {
            this.getRepositoriesList()
        },

        methods: {
            getRepositoriesList() {
                var me = this
                this.$http.get(this.$parent.user.repos_url).then((response) => {
                    // success callback
                    me.$set(me, 'repositories', response.body)
                }, (response) => {
                    // error callback
                });
            },

            sorted() {
                return this.repositories.sort(function(a, b){
                    if(a.stargazers_count < b.stargazers_count) return 1;
                    if(a.stargazers_count > b.stargazers_count) return -1;
                    return 0;
                });
            }
        },

        components: {
            'img-avatar': Avatar
        }
    }
</script>
