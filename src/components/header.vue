<template>
    <div class="header" :class="{ indexActive: isActive2 }">
        <div class="wrap">
            <div class="header-icon">
                <router-link to="/">
                    <img :src="imgUrl" width="201px" height="70px"></router-link>
            </div>
            <div class="header-ul">
                <li>
                    <router-link to="/">index</router-link>
                </li>
                <li>
                    <router-link to="/Taylor">Taylor</router-link>
                </li>
                <li>
                    <router-link to="/Gaga">Gaga</router-link>
                </li>
                <li>
                    <router-link to="/Adele">Adele</router-link>
                </li>
                <li>
                    <router-link to="/Rihanna">Rihanna</router-link>
                </li>
                <li>
                    <router-link to="/Katy">Katy</router-link>
                </li>
            </div>

        </div>

    </div>




</template>

<script>
    export default {

        data() {
            return {
                imgUrl: require('../imgs/logo.png'),

            }
        },
        computed: {
            isActive2: function () {
                if (this.$route.path === '/')
                    return false;
                else return true;
            }
        },


    };
</script>

<style scoped lang="stylus">
    .header {
        z-index: 500;
        position: fixed;
        top: 0;
        width: 100%;
        // transition: all 0.4s ease;

    }

    .wrap {
        position: relative;
        margin: 0 auto;

    }

    .header-icon {
        padding-left: 150px;
        padding-top: 30px;
        padding-bottom: 10px;
        float: left;
    }

    .header-ul {
        padding-top: 30px;
        float: right;
        padding-right: 100px;
    }

    .header-ul li {

        cursor: pointer;
        display: inline-block;
        text-align: center;
        font-family: Microsoft Yahei;
        font-size: 20px;
        font-weight: bold;
        text-transform: uppercase;
        color: #fff;
        padding: 2px 14px;
        vertical-align: middle;
    }

    .header-ul li a {
        padding-bottom: 2px;
        color: white;


    }


    .header-ul li :hover {
        opacity: 0.8;
        border-bottom: 2px solid rgba(255, 255, 255, 0.8);
    }

    .header-ul .router-link-exact-active {
        opacity: 0.8;
        border-bottom: 2px solid rgba(255, 255, 255, 0.8);
    }

    .indexActive {
        background-color: rgba(0, 0, 0, 0.8);
    }
</style>