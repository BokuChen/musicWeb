<template>
  <div class="main" ref="viewBox">
    <!-- @mouseenter="stop" @mouseleave="go" -->
    <transition-group tag="ul" class='main' name="list">
      <div class="img" v-for="(list,index) in slideList" :key="list.id" :style="list.image"
        v-show="index===currentIndex">
      </div>
    </transition-group>
    <div class="carousel-items">

      <div v-for="(item,index) in slideList" :key="item.id" :class="{'active':index===currentIndex}"
        @click="change(index)">
      </div>
    </div>
  </div>



</template>

<script>
  import defaultImg1 from '../imgs/TS.jpg'
  import defaultImg2 from '../imgs/LG.jpg'
  import defaultImg3 from '../imgs/AD.jpg'
  import defaultImg4 from '../imgs/RI.jpg'
  import defaultImg5 from '../imgs/KP.jpg'

  export default {
    data() {
      return {
        slideList: [{
            "id": 1,
            "clickUrl": "#",
            "desc": "nhwc",
            "image": {

              backgroundImage: "url(" + defaultImg1 + ")",
            },

          },
          {
            "id": 2,
            "clickUrl": "#",
            "desc": "hxrj",
            "image": {

              backgroundImage: "url(" + defaultImg2 + ")",
            }
          },
          {
            "id": 3,
            "clickUrl": "#",
            "desc": "rsdh",
            "image": {

              backgroundImage: "url(" + defaultImg3 + ")",
            }
          },
          {
            "id": 4,
            "clickUrl": "#",
            "desc": "nhwc",
            "image": {

              backgroundImage: "url(" + defaultImg4 + ")",
            }
          },
          {
            "id": 5,
            "clickUrl": "#",
            "desc": "hxrj",
            "image": {

              backgroundImage: "url(" + defaultImg5 + ")",
            }
          },
        ],
        currentIndex: 0,
      }
    },

    methods: {
      go() {
        this.timer = setInterval(() => {
          this.autoPlay()
        }, 10000)
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
      },
      _debounce(func, wait) {
        let timeout;
        wait = wait || 1000;
        return function () {
          let context = this;
          let args = arguments;

          if (timeout) clearTimeout(timeout);

          let callNow = !timeout;
          timeout = setTimeout(() => {
            timeout = null;
          }, wait)

          if (callNow) func.apply(context, args)
        }
      },
      _throttle(func, wait) {
        wait = wait || 1000;
        let previous = 0;
        return function () {
          let now = Date.now();
          let context = this;
          let args = arguments;
          if (now - previous > wait) {
            func.apply(context, args);
            previous = now;
          }
        }
      },

      handleScroll(e) {
        // if(e.deltaY>0){console.log('down');}
        // else console.log('up');
        // wheelDelta：获取滚轮滚动方向，向上120，向下-120，但为常量，与滚轮速率无关
        // deltaY：垂直滚动幅度，正值向下滚动。电脑鼠标滚轮垂直行数默认值是3
        // wheelDelta只有部分浏览器支持，deltaY几乎所有浏览器都支持
        // const eventDelta = e.wheelDelta || -e.deltaY * 40;
        // const $scrollWrapper = this.$refs.scrollContainer.$refs.wrap;
        // // 0到scrollLeft为滚动区域隐藏部分
        // $scrollWrapper.scrollLeft = $scrollWrapper.scrollLeft + eventDelta / 4;
        e = e || window.event;

        if (e.wheelDelta) { //判断浏览器IE，谷歌滑轮事件             
          if (e.wheelDelta > 0) { //当滑轮向上滚动时
            // alert("滑轮向上滚动");

            console.log(this.currentIndex);
            console.log('up');
            this.currentIndex -= 1;
            if (this.currentIndex < 0) {
              this.currentIndex = 0;
            }
          }
          if (e.wheelDelta < 0) { //当滑轮向下滚动时
            //alert("滑轮向下滚动");
            this.currentIndex += 1;
            if (this.currentIndex >= this.slideList.length) {
              this.currentIndex = this.slideList.length - 1;
            }
            console.log(this.currentIndex);
            console.log('down');
          }
        } else if (e.detail) { //Firefox滑轮事件
          if (e.detail > 0) { //当滑轮向上滚动时
            //alert("滑轮向上滚动");   

          }
          if (e.detail < 0) { //当滑轮向下滚动时
            //alert("滑轮向下滚动");
          }
        }
      }
    },
    // created() {
    //     this.$nextTick(() => {
    //         this.timer = setInterval(() => {
    //             this.autoPlay()
    //         }, 8000)
    //     })
    // },
    mounted: function () {
      this.$refs.viewBox.addEventListener('mousewheel', this._throttle(this.handleScroll), true); // 监听（绑定）滚轮滚动事件
    },

  };
</script>

<style lang="stylus">
  .main {
    width: 100%;
    height: 100%;
    overflow: hidden;
    padding: 0;
    margin: 0;
    background-size: 100% 100%;
    position: absolute;
  }

  .img {
    position: absolute;
    width: 100%;
    background-position: center center;
    height: 1010px;
    overflow: hidden;
    background-size: cover;
  }

 
  .carousel-items {
    position: fixed;
    right: 15px;
    padding-left: 20px;
    top: 50%;
    transform: translateY(-50%);
  }

  .carousel-items div {
    width: 12px;
    height: 12px;
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    border-radius: 20px;
    background: #fff;
    display: block;
    opacity: .8;
    margin: 7px 0;
    cursor: pointer;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, .07);
  }

  .carousel-items .active {
    opacity: 0.3;
  }


  .list-enter-to {
    transition: all 1s ease;
    transform: translate(0);
  }

  .list-leave-active {
    transition: all 1s ease;
    transform: translateY(-100%)
  }

  .list-enter {
    transform: translateY(100%)
  }

  .list-leave {
    transform: translateY(0)
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .5s
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0
  }
</style>