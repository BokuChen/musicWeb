<template>
<div class="carousel-wrap" id="carousel">
    
    <transition-group tag="ul" class='slide-ul' name="list">
      <li v-for="(list,index) in slideList" :key="list.id" v-show="index===currentIndex" @mouseenter="stop" @mouseleave="go">
        <a :href="list.clickUrl" >
          <img :src="list.image" :alt="list.desc">
          <span class="font">Taylor Swift</span>
        </a>
      </li>
    </transition-group>
    <!-- <div class="slidecontrol">
      <span class="iconfont icon-weibiaoti6"></span>
    </div> -->
    <div class="carousel-items">
      <span v-for="(item,index) in slideList" :key="item.id" :class="{'active':index===currentIndex}" @mouseover="change(index)"></span>
    </div>
</div>




</template>

<script>
  export default {
    data(){  return {
        slideList: [
            {
                "id":1,
                "clickUrl": "#",
                "desc": "nhwc",
                "image": "../imgs/TS.jpg"
            },
            {
                "id":2,
                "clickUrl": "#",
                "desc": "hxrj",
                "image": "../imgs/KP.jpg"
            },
            {
                "id":3,
                "clickUrl": "#",
                "desc": "rsdh",
                "image": "../imgs/RI.jpg"
            },
            {
                "id":4,
                "clickUrl": "#",
                "desc": "nhwc",
                "image": "../imgs/LG.jpg"
            },
            {
                "id":5,
                "clickUrl": "#",
                "desc": "hxrj",
                "image": "../imgs/AD.PNG"
            },
        ],
        currentIndex: 0,
        timer: ''
    }
    },
    methods: {
 
        go() {
            this.timer = setInterval(() => {
                this.autoPlay()
            }, 4000)
        },
        stop() {
            clearInterval(this.timer)
            this.timer = null
        },
        change(index) {
            this.currentIndex = index
        },
        autoPlay() {
            this.currentIndex++
            if (this.currentIndex > this.slideList.length - 1) {
                this.currentIndex = 0
            }
        }
    },
    created() {
        this.$nextTick(() => {
            this.timer = setInterval(() => {
                this.autoPlay()
            }, 4000)
        })
    }

  };
</script>

<style scoped lang="stylus">
// .slidecontrol{
//     position: absolute;
//     top:360px;
//     left :0;
//     background-color: RGBA(255, 255, 255, .3);
// }
// .icon-weibiaoti6{
//     font-size: 42px;
//     color: #333;
// }
.font{
    position :absolute;
    top:50%;
    left :50%;
    transform :translate(-50%,-50%);
    font-size :100px;
    color: white ;
    text-shadow:2px 2px 8px #000000;
    display : none;
    transition  : all 0.5s;
}
.carousel-wrap {
  position: relative;
  width : 1280px;
  margin :40px auto 0 auto;
  height: 670px;
 
  overflow: hidden;
  background-color: #fff;
}

.slide-ul {
  width: 100%;
  height: 100%;}
.slide-ul li {
    position: absolute;
    width: 100%;
    height: 100%; }
    .slide-ul li img {
      width: 100%;
      height: 100%;
      transition  : all 0.5s;
     
    }
    .carousel-wrap:hover .font{
        display : block;  
        transition  : all 0.5s; 

    }
   .carousel-wrap:hover .slide-ul li img {
     transform :scale(1.2);
     transition  : all 0.5s;
     opacity : 0.7;

     background-color : rgba(0,0,0,0.5)
     
    }

.carousel-items {
  position: absolute;
  z-index: 10;
  top: 600px;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  font-size: 0; }
  .carousel-items span {
    display: inline-block;
    height: 6px;
    width: 30px;
    margin: 0 3px;
    background-color: #b2b2b2;
    cursor: pointer;
  }
  .carousel-items  .active {
    background-color: red;
  }

  .list-enter-to {
    transition: all 1s ease;
    transform: translate(0);
  } 
  
  .list-leave-active {
    transition: all 1s ease;
    transform: translateX(-100%)
  }
  
  .list-enter {
    transform: translateX(100%)
  }
  
  .list-leave {
    transform: translateX(0)
  }
  
</style>