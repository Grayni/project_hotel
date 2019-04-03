<template lang="pug">
  .complex(id="complex")
    .gallery
      img(src="/static/about/hotel-2.jpg").hotel
      .gallery__in
        img(src="/static/about/hotel.jpg").hotel

    .cross-wrap
      .cross-img-text
        .cross-wrap-in
          img(src="/static/about/cross.jpg" width="700").cross
        .wrap-complex-text
          .complex-text
            p Комплекс построен относительно недавно (в 2017 году).
            p Он располагается на въезде в город Уржум на Трясовской горе рядом с поклонным крестом.

          img(src="/static/about/god.jpg" width="600").god
          .map
            a(href="https://yandex.ru/maps/?um=constructor%3A52d7859f4d561c6214c01ebba2562f2b6cd65010d7f851a111c51341b479e752&amp;source=constructorStatic" target="_blank")
              img(src="https://api-maps.yandex.ru/services/constructor/1.0/static/?um=constructor%3A52d7859f4d561c6214c01ebba2562f2b6cd65010d7f851a111c51341b479e752&amp;width=570&amp;height=250&amp;lang=ru_RU" alt="" style="border: 0;")
    .urzhumka
      p С территории базы открывается потрясающий вид на реку Уржумка и живописные леса,<br>а также поля и местные окрестности.<br> А с высоты горы это выглядит более чем красиво. На это стоит посмотреть...
</template>

<script>
import ScrollMagic from 'scrollmagic'
import 'ScrollMagicGSAP'
// eslint-disable-next-line
import {TimelineMax, Power0} from 'gsap'

export default {
  name: 's2-complex',
  data () {
    return {
      controller: new ScrollMagic.Controller(),
      parallax1: null,
      parallax2: null,
      parallax3: null,
      parallax4: null,
      parallax5: null,
      parallax6: null,
      timeLine1: null,
      timeLine2: null
    }
  },
  methods: {
    parallax (dur, el, size) {
      return new ScrollMagic.Scene({
        triggerElement: '#complex',
        triggerHook: 1,
        duration: dur * 100 + '%'
      }).setTween(el, { y: -10 * size + 'vh', ease: Power0.easeNone })
        .addTo(this.controller)
    }
  },
  mounted () {
    this.parallax1 = this.parallax(2, '.god', 1)
    this.parallax2 = this.parallax(2, '.gallery__in', 2)
    this.parallax3 = this.parallax(2, '.complex-text', 4)
    this.parallax4 = this.parallax(2, '.gallery > img', 6)
    this.parallax5 = this.parallax(4, '.map', 3)
    this.parallax6 = this.parallax(4, '.urzhumka', 6)

    this.timeLine1 = new TimelineMax()
    let tween = this.timeLine1.fromTo('.urzhumka', 1.2, {autoAlpha: 0}, {autoAlpha: 1})

    new ScrollMagic.Scene({
      triggerElement: '.map',
      offset: 300
    }).setTween(tween)
      .addTo(this.controller)

    this.timeLine2 = new TimelineMax()
    this.timeLine2.fromTo(['img', 'p'], 3.2, {autoAlpha: 0}, {autoAlpha: 1})
  }
}
</script>

<style lang="stylus" scoped>
  .complex
    max-width 800px
    font 22px Futura
    padding 4vw 4vw 0 4vw
    img
      box-shadow 3px 3px 3px rgba(0,0,0,.1)
  .gallery
    display flex
    width 100vw
    & > img
      z-index 2
      top 60vh
    &__in
      width 90vw
      left 5vw
      display flex
      justify-content flex-end
      z-index 1
    & > img
      &:nth-child(1)
        position absolute
        left 5vw
        transform translate(0, -50%)
        max-width 500px
  .wrap-complex-text
    margin-top 4vw
    right 30%
    position relative
    p
      max-width 800px
  .cross-wrap
    display flex
    width 100vw
    flex-direction column
    margin-top 10vh

  .cross-wrap-in
    width 100%
    display flex
    justify-content flex-start
    padding-right 20vw
    .cross
      position relative
      height 900px
      left -50%

  .cross-img-text
    display flex
    width 100vw

  .complex-text
    transform translate(-20%, 0)
    margin-bottom 8vh
    position relative
    top 20vh
  .god
    transform translate(12vw, 2%)
  .map
    transform translate(-20%, 10%)
  .urzhumka
    margin 3vh 0
    width 96vw
    padding-right 4vw
    position relative
    top 30vh
    display flex
    justify-content flex-end
    p
      display inline-block

  @media (max-width: 1360px)
    .wrap-text
      padding-bottom 20vh
    .gallery > img.hotel
      top 70vh
    .complex-text
      transform translate3d(0, 0, 0)!important
      top -14vh
      display flex
      flex-direction column
      background rgba(255,255,255,0.5)
      border-radius 15px
      padding 10px
      p
        width calc(100vw - 40px)
        display inline-block
    .cross-img-text
      flex-direction column
      position relative
    .wrap-complex-text
      top 0
      right auto
      left 20px
      position absolute
      width 100%
    .map
      margin-top 70vh
      width 100%
      display flex
      justify-content flex-end
  @media (max-width: 1024px)
    .god
      display none
</style>
