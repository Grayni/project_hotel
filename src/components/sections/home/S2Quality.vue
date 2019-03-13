<!-- eslint-disable -->
<template lang="pug">

  .wrap-quality.wrapper_blur(is="section")

    svg.arc(xmlns="http://www.w3.org/2000/svg", viewBox="0 -10 2201.46 249.45")
      defs
        Shadow
      path.a(id="arc" d="M2201.46,249.45H0V20C740,318.16,1473.87,318.16,2201.46,10Z")
      path.rectangle(id="rectangle" d="M2201.46,249.45H0V0H2201.46Z")

    div(id='target-square')

      .top-block(id="target-top-block-text")
        fade-string(
          :title="'Сервис комплекса'",
          :strings="strings",
          :target="'#target-square'",
          :parent="'#target-top-block-text'"
        )

      .bottom-block
        .wrap-text-block
          svg.wrap-text-block__frame(id="frame-top")
            rect(x="0" y="0" width="100%" height="100%" fill="none" stroke="#6f5c56" style="stroke-width: 4;")
          span.wrap-text-block__content
            p.
              #[b Гостиница Уржум] - это комфортабельный комплекс, который не оставит равнодушным нашего дорогого посетителя. В состав гостиницы входят не только удобные и #[b приятные номера], но и такие прелести, как #[b сауна и кафе-ресторан].
        .parallaxParent(id="parallax1")
          div
        .wrap-text-block
          svg.wrap-text-block__frame(id="frame-bottom")
            rect(x="0" y="0" width="100%" height="100%" fill="none" stroke="#6f5c56" style="stroke-width: 4;")
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

import ScrollMagic from 'scrollmagic'
import 'ScrollMagicGSAP'

/* eslint-disable */ 
import {TimelineMax, CSSPlugin} from 'gsap'
import kute from 'kute.js'
import kuteSVG from 'kute.js/kute-svg'
/* eslint-disable */ 
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
      timeLine1: null,
      timeLine1_1: null,
      timeLine3: null,
      timeLine4: null,
      timeLine5: null,
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
      TweenMax.set(arrWords, {autoAlpha: 0, opacity: 0, filter: 'blur(3px)'})

      return arrWords.sort(() => 0.5 - Math.random())
    }
  },
  mounted () {
    const controller = new ScrollMagic.Controller()

    // create kute obj
    this.timeLine1_1 = kute

    let tweenKute = this.timeLine1_1.fromTo('#arc', {path: '#arc'}, {path: '#rectangle'})
    let tweenKute2 = this.timeLine1_1.fromTo('#arc',{path: '#rectangle'} , {path: '#arc'})

    const scene1 = new ScrollMagic.Scene({
      triggerElement: '#target-square'
    }).on('start', (e) => 
      (e.scrollDirection === "FORWARD") ? tweenKute.start() :
      (e.scrollDirection === "REVERSE") ? tweenKute2.start() : false
    ).addTo(controller)

  // parallax section
    const scene2 = new ScrollMagic.Scene({
      triggerElement: '#parallax1',
      triggerHook: 1,
      duration: '200%'
    }).setTween('#parallax1 > div', {y: '-30vh', ease: Power0.easeNone})
    .addTo(controller)

    this.timeLine3 = new TimelineMax()
    let tween3 = this.timeLine3.addLabel('show-top-box')
    .fromTo('#frame-top rect', 1, {'stroke-dashoffset': 2000, 'stroke-dasharray': 2000}, {'stroke-dashoffset': 0}, 'show-top-box')
    .fromTo('#frame-top + .wrap-text-block__content', 1, {opacity: 0}, {opacity: 1, ease: Back.easeIn}, 'show-top-box')
    .fromTo('.wrap-text-block:first-child', 0.5, {y: '-30%'}, {y: '-50%'}, 'show-top-box')
    .fromTo('.parallaxParent', 1, {y: 10, autoAlpha: 0.5}, {y: 0, autoAlpha: 1}, 'show-top-box')

    let scene3 = new ScrollMagic.Scene({
      triggerElement: '#target-top-block-text'
    }).setTween(tween3).addTo(controller)

    this.timeLine4 = new TimelineMax()
    let tween4 = this.timeLine4.addLabel('show-bottom-box')
    .fromTo('#frame-bottom rect', 1, {'stroke-dashoffset': 2000, 'stroke-dasharray': 2000}, {'stroke-dashoffset': 0}, 'show-bottom-box')
    .fromTo('#frame-bottom + .wrap-text-block__content', 1, {opacity: 0}, {opacity: 1, ease: Back.easeIn}, 'show-bottom-box')
    .fromTo('.wrap-text-block:nth-child(3)', 0.5, {y: '80%'}, {y: '50%'}, 'show-bottom-box')

    let scene4 = new ScrollMagic.Scene({
      triggerElement: '#parallax1',
      offset: 300
    }).setTween(tween4).addTo(controller)

    this.timeLine5 = new TimelineMax()
    let tween5 = this.timeLine5.addLabel('show-slider')
    .staggerFromTo('.swiper-slide', 1.3, {y: '-400', autoAlpha: 0}, {y: 0, autoAlpha: 1, ease: Back.easeOut}, 0.1, 'show-slider')
    .fromTo(['.swiper-button-prev', '.swiper-button-next'], 1, {autoAlpha: 0}, {autoAlpha: 1, delay: 1.4, ease: Back.easeIn}, 'show-slider')

    let scene5 = new ScrollMagic.Scene({
      triggerElement: '#target-slider'
    }).setTween(tween5).addTo(controller)
  }

}

</script>
<style lang="sass" scoped>
  $shift: -20vh;

  .wrap-quality
    z-index: 2
    position: relative
    margin: 0
    top: $shift
    width: 100vw

    svg
      &.arc
        pointer-events: none
        position: relative
        bottom: 0
        -webkit-filter: url(#dropshadow)
        -moz-filter: url("#blur")
        filter: url(#dropshadow)
        z-index: -1

      .b, .a, .rectangle
        fill: #f1eee9
      .rectangle
        visibility: hidden
        border: 0
        stroke-width: 0

    .top-block
      background: #f1eee9

  .slider
    width: 80vw
    max-width: 1496px 
    margin-left: 10vw
    margin-right: 10vw
    padding-top: 10vw
    left: 0
    right: 0
    opacity: 1
    position: relative

  .bottom-block
    position: relative
  .bottom-block-2
    background: #f1eee9

  .wrap-text-block
    position: absolute
    display: flex
    max-width: 500px
    z-index: 1
    &:nth-child(1)
      transform: translate(0, -50%)
      top: 0
      right: 5vw
    &:nth-child(3)
      transform: translate(0, 50%)
      bottom: 0
      left: 5vw

    &__frame
      width: 100%
      height: 100%
      position: absolute
      top: 0
      left: 0
    &__content
      font: bold 14px 'Academic', Arial, 'sans-serif'
      letter-spacing: 3px
      background: #fff
      color: #3e3937
      display: inline-block
      margin: 2vh 2vh 2vh 2vh
      padding: 3vh
      text-transform: uppercase
      border-radius: 3px 
      letter-spacing: 7px
      line-height: 30px

  .parallaxParent
    height: 80vh
    overflow: hidden
    display: block
    position: relative
    background-color: #f1eee9
    div
      background-image: url('/static/backgrounds/pillow-parallax.jpg')
      background-repeat: no-repeat
      background-size: cover
      position: absolute
      width: 100%
      height: 150%
      top: 0
      z-index: 0

</style>
