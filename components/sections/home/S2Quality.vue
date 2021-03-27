<template lang="pug">

  .wrap-quality.wrapper_blur(is="section")
    svg.arc(xmlns="http://www.w3.org/2000/svg", viewBox="0 -10 2201.46 249.45")
      defs
        Shadow
      path.a(id="arc" d="M2201.46,249.45H0V20C740,318.16,1473.87,318.16,2201.46,10Z")
      path.rectangle(id="rectangle" d="M2201.46,249.45H0V0H2201.46Z")

    div(id='target-square')

      .top-block(id="target-top-block-text")
        fade-string.about-complex(
          :title="'Сервис комплекса'",
          :strings="strings",
          :target="'#target-square'",
          :parent="'#target-top-block-text'"
        )

      .bottom-block
        .wrap-text-block
          svg.wrap-text-block__frame(id="frame-top")
            rect(x="0", y="0", width="100%", height="100%", fill="none", stroke="#6f5c56", style="stroke-width: 4;")
          span.wrap-text-block__content
            p.
              #[b Гостиница Уржум] - это комфортабельный комплекс, который не оставит равнодушным нашего дорогого посетителя. В состав гостиницы входят не только удобные и #[b приятные номера], но и такие прелести, как #[b сауна и кафе-ресторан].
        .parallaxParent(id="parallax1")
          div
        .wrap-text-block
          svg.wrap-text-block__frame(id="frame-bottom")
            rect(x="0", y="0", width="100%", height="100%", fill="none", stroke="#6f5c56", style="stroke-width: 4;")
          span.wrap-text-block__content
            p(id="target-slider").
              Если Вы хотите остановиться на ночлег или просто хорошо провести время, то добро пожаловать к нам в гости! Мы будем Вам рады!
      .bottom-block-2(id="target-slider")
        .slider(is="Slider" @sendSlide='getSlide($event)')

</template>

<script>

import Shadow from '@/components/apps/DropShadow'
import Slider from '@/components/elements/Slider'
import FadeString from '@/components/elements/FadeString'

let kute, kuteSVG

if (process.client) {
  kute = require('kute.js')
  kuteSVG = require('kute.js/kute-svg')
}

export default {
  name: 's2-quality',
  components: {
    Shadow,
    Slider,
    FadeString
  },
  data () {
    return {
      slide: '',
      scene1: null,
      scene2: null,
      scene3: null,
      scene4: null,
      scene5: null,
      timeLine1: null,
      timeLine3: null,
      timeLine4: null,
      timeLine5: null,
      timeKute: null,
      tweenKute1: null,
      tweenKute2: null,
      tween3: null,
      tween4: null,
      tween5: null,
      save: null,
      strings: [
        ['Мы', 'предлагаем:'],
        ['-Гостиничные', 'номера'],
        ['-Кафе-ресторан'],
        ['-Сауна']
      ]
    }
  },
  methods: {
    getSlide (e) {
      this.slide = e
      this.$emit('sendSlide', this.slide)
    },
    sortArrWords () {
      let arrWords = document.querySelectorAll('.word-blur')

      arrWords = Array.prototype.slice.call(arrWords)
      this.$gsap.TweenMax.set(arrWords, { autoAlpha: 0, opacity: 0, filter: 'blur(3px)' })

      return arrWords.sort(() => 0.5 - Math.random())
    },
    kuteFunc () {
      // create kute obj
      this.save = kuteSVG
      this.timeKute = kute

      this.tweenKute1 = this.timeKute.fromTo('#arc', { path: '#arc' }, { path: '#rectangle' })
      this.tweenKute2 = this.timeKute.fromTo('#arc', { path: '#rectangle' }, { path: '#arc' })

      this.scene1 = new this.$scrollmagic.Scene({
        triggerElement: '#target-square'
      }).on('start', e =>
        (e.scrollDirection === 'FORWARD') ? this.tweenKute1.start()
          : (e.scrollDirection === 'REVERSE') ? this.tweenKute2.start() : false
      )

      this.$ksvuescr.$emit('addScene', 'kuteFunc', this.scene1)
    },
    parallaxScene2 () {
      this.scene2 = new this.$scrollmagic.Scene({
        triggerElement: '#parallax1',
        triggerHook: 1,
        duration: '200%'
      // eslint-disable-next-line
      }).setTween('#parallax1 > div', { y : '-30vh', ease: Power0.easeNone })

      this.$ksvuescr.$emit('addScene', 'parallaxScene2', this.scene2)
    },
    parallaxScene3 () {
      this.timeLine3 = new this.$gsap.TimelineMax()

      this.tween3 = this.timeLine3.addLabel('show-top-box')
        .fromTo('#frame-top rect', 1, { 'stroke-dashoffset': 2000, 'stroke-dasharray': 2000 }, { 'stroke-dashoffset': 0 }, 'show-top-box')
        // eslint-disable-next-line
        .fromTo('#frame-top + .wrap-text-block__content', 1, { opacity: 0 }, { opacity: 1, ease: Back.easeIn }, 'show-top-box')
        .fromTo('.wrap-text-block:first-child', 0.5, { y: '-30%' }, { y: '-50%' }, 'show-top-box')
        .fromTo('.parallaxParent', 1, { y: 10, autoAlpha: 0.5 }, { y: 0, autoAlpha: 1 }, 'show-top-box')

      this.scene3 = new this.$scrollmagic.Scene({
        triggerElement: '#target-top-block-text'
      }).setTween(this.tween3)

      this.$ksvuescr.$emit('addScene', 'parallaxScene3', this.scene3)
    },
    parallaxScene4 () {
      this.timeLine4 = new this.$gsap.TimelineMax()

      this.tween4 = this.timeLine4.addLabel('show-bottom-box')
        .fromTo('#frame-bottom rect', 1, { 'stroke-dashoffset': 2000, 'stroke-dasharray': 2000 }, { 'stroke-dashoffset': 0 }, 'show-bottom-box')
        // eslint-disable-next-line
        .fromTo('#frame-bottom + .wrap-text-block__content', 1, { opacity: 0 }, { opacity: 1, ease: Back.easeIn }, 'show-bottom-box')
        .fromTo('.wrap-text-block:nth-child(3)', 0.5, { y: '80%' }, { y: '50%' }, 'show-bottom-box')

      this.scene4 = new this.$scrollmagic.Scene({
        triggerElement: '#parallax1',
        offset: 300
      }).setTween(this.tween4)

      this.$ksvuescr.$emit('addScene', 'parallaxScene4', this.scene4)
    },
    parallaxScene5 () {
      this.timeLine5 = new this.$gsap.TimelineMax()

      this.tween5 = this.timeLine5.addLabel('show-slider')
      // eslint-disable-next-line
      .staggerFromTo('.swiper-slide', 1.3, { y: '-400', autoAlpha: 0 }, { y: 0, autoAlpha: 1, ease: Back.easeOut }, 0.1, 'show-slider')
      // eslint-disable-next-line
      .fromTo(['.swiper-button-prev', '.swiper-button-next'], 1, { autoAlpha: 0 }, { autoAlpha: 1, delay: 1.4, ease: Back.easeIn }, 'show-slider')

      this.scene5 = new this.$scrollmagic.Scene({
        triggerElement: '#target-slider'
      }).setTween(this.tween5)

      this.$ksvuescr.$emit('addScene', 'parallaxScene5', this.scene5)
    }
  },
  mounted () {
    this.kuteFunc()
    this.parallaxScene2()
    this.parallaxScene3()
    this.parallaxScene4()
    this.parallaxScene5()
  }

}

</script>
<style lang="stylus" scoped>
  $shift: -20vh

  .wrap-quality
    z-index 2
    position relative
    margin 0
    top $shift
    width 100vw

    svg
      &.arc
        pointer-events none
        position relative
        bottom 0
        filter url(#dropshadow)
        z-index -1

      .b, .a, .rectangle
        fill #f1eee9
      .rectangle
        visibility hidden
        border 0
        stroke-width 0

    .top-block
      background #f1eee9

  .slider
    width 80vw
    max-width 1496px
    margin-left 10vw
    margin-right 10vw
    padding-top 10vw
    left 0
    right 0
    opacity 1
    position relative

  .bottom-block
    position relative
  .bottom-block-2
    background #f1eee9

  .wrap-text-block
    position absolute
    display flex
    max-width 500px
    z-index 1
    &:nth-child(1)
      transform translate(0, -50%)
      top 0
      right 5vw
    &:nth-child(3)
      transform translate(0, 50%)
      bottom 0
      left 5vw

    &__frame
      width 100%
      height 100%
      position absolute
      top 0
      left 0
    &__content
      font bold 14px 'Academic', Arial, 'sans-serif'
      letter-spacing 3px
      background #fff
      color #3e3937
      display inline-block
      margin 2vh 2vh 2vh 2vh
      padding 3vh
      text-transform uppercase
      border-radius 3px
      letter-spacing 7px
      line-height 30px

  .parallaxParent
    height 80vh
    overflow hidden
    display block
    position relative
    background-color #f1eee9
    div
      background-image url('/images/backgrounds/pillow-parallax.jpg')
      background-repeat no-repeat
      background-size cover
      position absolute
      width 100%
      height 150%
      top 0
      z-index 0
@media (max-width: 1280px)
  .slider
    margin 150px 10vw 20px 10vw
    padding-bottom 0

@media (max-width: 490px)
    .about-complex
      padding-bottom 40vh
</style>
