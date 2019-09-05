<template>
    <div class="album">
        <div class="albumWrap">
            <div class="albumbox" v-for="(list,index) in album" :key="list.id">
                <div class="imgsbox">
                    <div class="imgsSize" @click="toSong">
                        <img class="imgs" :src="album[index].img" width="300px" height="300px">
                        <div class="mask-shadow">
                        </div>
                        <div class="mask">
                            <img :src="imgUrl" width="100px" height="100px">
                        </div>

                    </div>
                    <div class="albumname">
                        <span>{{album[index].name}}</span>
                    </div>
                </div>
            </div>


        </div>

    </div>




</template>

<script>
    export default {
        data() {
            return {
                imgUrl: require('../imgs/cover.png'),
                album: [{
                        img: require('../imgs/TS/lover.png'),
                        name: "lover"
                    },
                    {
                        img: require('../imgs/TS/reputation.png'),
                        name: "reputation"
                    },
                    {
                        img: require('../imgs/TS/1989.png'),
                        name: "1989"
                    },
                    {
                        img: require('../imgs/TS/red.png'),
                        name: "red"
                    },
                    {
                        img: require('../imgs/TS/ts.png'),
                        name: "Taylor Swift"
                    },
                    {
                        img: require('../imgs/TS/specknow.png'),
                        name: "Speak now"
                    },
                    {
                        img: require('../imgs/TS/fearless.png'),
                        name: "Speak now"
                    }
                ]
            }
        },
        methods: {
            toSong() {
                this.$router.push('/Taylor/song');
            },
        },
    };
</script>

<style scoped lang="stylus">
    .album {

        // margin-top: 150px;
        position: relative;
        top: 150px;

        min-height: 500px;

    }

    .albumWrap {
        position: absolute;

        width: 85%;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        justify-content: center;
        flex-wrap: wrap;

    }

    .albumbox {

        position: relative;
        width: 400px;
        height: 400px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .albumname {
        font-size: 20px;
        padding-top: 10px;
        text-align: center;
    }

    .albumname::after {

        content: "";
        display: block;
        width: 60px;
        height: 2px;
        background-color: #fdd200;
        margin: auto;
        margin-top: 6px;
        margin-bottom: 11px;
    }

    .imgsSize {
        width: 300px;
        height: 300px;
        overflow: hidden;
        position: relative
    }

    .mask {
        border-radius: 50%;
        opacity: 0;
        position: absolute;
        // transform: scale(2);
        transition: all 0.2s ease;
        top: 50%;
        left: 50%;

        transform: translate(-50%, -50%);
        z-index: 150;

        background-color: rgb(253, 210, 0, 0.4);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .imgs {
        transition: all 0.2s ease;
    }

    .imgsbox:hover .mask {
        opacity: 0.8;
    }

    .imgsbox:hover .imgs {
        transform: scale(1.1);
    }

    // .imgsbox:hover .albumname {

    //     opacity: 0;

    // }
    .imgsbox:hover .mask-shadow {

        opacity: 1;

    }



    .mask-shadow {
        transition: all 0.2s ease;
        position: absolute;
        top: 0;
        width: 100%;
        height: 300px;

        opacity: 0;
        background: rgba(0, 0, 0, .3);
    }
</style>