<template>
    <div>
        <img :src="src" :alt="title" class="avatar rounded-circle">
    </div>
</template>

<style lang="scss">
    .avatar {
        width: 150px;
        position: absolute;
        top: calc(-150px/2);
        left: 50%;
        margin-left: calc(-150px/2);
    }
</style>

<script>
    export default{
        name: 'Avatar',
        data(){
            return {}
        },
        props: {
            src: '',
            title: ''
        }
    }
</script>
