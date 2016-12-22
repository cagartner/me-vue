<template>
    <div>
        <img-avatar :src="user.avatar_url" :title="user.name" />

        <header class="page-header">
            <h1 class="display-3">{{ user.name }}</h1>
            <small>{{ user.bio }}</small>
        </header>

        <section class="grid-statics row sections">

            <div class="column">
                <h3 class="column--title">Repositórios</h3>
                <router-link class="rounded-circle align-middle gradient" to="/repositories">
                    <i class="fa fa-github-alt"></i>
                    <span class="tag">{{ user.public_repos }}</span>
                </router-link>
            </div>

            <div class="column">
                <h3 class="column--title">Gists</h3>
                <router-link class="rounded-circle align-middle gradient" to="/gists">
                    <i class="fa fa-code"></i>
                    <span class="tag">{{ user.public_gists }}</span>
                </router-link>
            </div>

            <div class="column">
                <h3 class="column--title">Seguidores</h3>
                <router-link class="rounded-circle align-middle gradient" to="/followers">
                    <i class="fa fa-users"></i>
                    <span class="tag">{{ user.followers }}</span>
                </router-link>
            </div>

        </section>

        <div v-html="resumeMarkdown" class="resume sections"></div>
    </div>
</template>

<style lang="scss">
    /** Import bootstrap classes */
    @import "../../node_modules/bootstrap/scss/bootstrap-flex.scss";

    .grid-statics {
        margin-left: 0px !important;
        margin-right: 0px !important;

        .column {
            @include make-col(4);
            text-align: center;

            &--title {
                font-size: 1.3rem;
            }

            .rounded-circle {
                width: 5rem;
                height: 5rem;
                display: inline-block;
                margin: 1rem auto;
                padding-top: 1rem;
                text-align: center;
                position: relative;

                color: white;
                &:hover {
                    color: white;
                }

                .fa {
                    font-size: 3rem;
                }

                .tag {
                    position: absolute;
                    top: 0px;
                    right: 0px;
                    background: #7474BF;
                }
            }
        }
    }

    .resume {

        h1 {
            display: none;
        }

        hr:first-of-type {
            display: none;
        }
    }
</style>

<script>
    import marked from 'marked'
    import Avatar from '../layouts/Avatar.vue'

    const resumeUrl = 'https://raw.githubusercontent.com/cagartner/me/master/README.md'

    export default{
        name: 'HomePage',
        mounted() {
            this.getResumeFromRepo()
        },

        data() {
            return{
                resume: '# Resume',
                error: false,
                errorMessage: ''
            }
        },

        computed: {
            resumeMarkdown() {
                return marked(this.resume)
            },

            user() {
                return this.$store.state.user;
            }
        },

        methods: {
            getResumeFromRepo() {
                var me = this
                this.$http.get(resumeUrl).then((response) => {
                    // success callback
                    me.$set(me, 'resume', response.body)
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
