<template>
  <div class="song">
     <div class="songWrap">
        <div class="albumImg" @click="backAlbum"> 
            <img :src="albumImg" width="450" height="450">
        </div>
        <div class="albumInfo">
            <div class="albumDesc">
                <span>{{infomation[0].album[0].albumDesc}}</span>
            </div>
            <div class="songlist">
                <div  v-for="(item,index) in infomation[0].album[0].songs" :key="item.id"  class="songItem">
                 <span class="songIndex">{{index+1}}</span><span>{{item.songName}}</span>
                </div>
            </div>
        </div>
     </div>
  </div>
</template>


<script>
  // import slide from './components/slide';
  import info from '../info';
  
  export default {
        data() {
            return {
                infomation:info,
                albumImg:require('../imgs/TS/lover.png'),
            }
        },
        methods:{
            backAlbum(){
                this.$router.push('/Taylor');
                },
        },


  }
</script>




<style lang="stylus">
.song
    top:150px;
    position: relative;
    .songWrap
        position: absolute;
        width: 80%;
        left: 50%;
        transform: translateX(-50%);
        .albumImg
            float left
        .albumInfo
            padding-top 20px
            font-size 15px
            line-height 1.7
            margin-left 600px   
            overflow hidden
            text-overflow ellipsis
            .albumDesc
                height  200px
            .songlist
                margin-left 100px;
                line-height 2.0
                .songItem
                    border 1px solid
                    .songIndex
                        text-align center
                        display inline-block
                        width 20px
                        padding-right 100px

  
</style>
