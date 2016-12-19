<template>
    <div>
        <h1>Home page de {{ user.name }}</h1>
        <hr>
        <div v-html="resumeMarkdown" class="resume-section"></div>
    </div>
</template>

<style lang="scss">
    $color: #ccc;

    body {
        background: darken($color, 10%);
    }

    .resume-section > h1,
    .resume-section > hr
    {
        display: none;
    }
</style>

<script>
    import marked from 'marked'

    const apiUrl = 'https://api.github.com/users/cagartner'
    const resumeUrl = 'https://raw.githubusercontent.com/cagartner/me/master/README.md'

    export default{
        name: 'HomePage',
        mounted() {
            this.getUserInfo()
            this.getResumeFromRepo()
        },

        data(){
            return{
                user: {
                },
                resume: '# Resume',
                error: false,
                errorMessage: ''
            }
        },

        computed: {
            resumeMarkdown () {
                return marked(this.resume)
            }
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
            },

            getResumeFromRepo() {
                var me = this

                this.$http.get(resumeUrl).then((response) => {
                    // success callback
                    me.$set(me, 'resume', response.body)
                }, (response) => {
                    // error callback
                });
            }
        }
    }
</script>
