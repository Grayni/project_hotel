<template lang="pug">
  .complex
    .gallery
      img.hotel(src="/images/about/hotel-2.jpg")
      .gallery__in
        img.hotel(src="/images/about/hotel.jpg")

    .cross-wrap
      .cross-img-text
        .cross-wrap-in
          img.cross(src="/images/about/cross.jpg" width="700")
        .wrap-complex-text
          .complex-text
            p Комплекс построен относительно недавно (в 2017 году).
            p Он располагается на въезде в город Уржум на Отрясовской горе рядом с поклонным крестом.

          img.god(src="/images/about/god.jpg" width="600")
          .map
            a(href="https://yandex.ru/maps/?um=constructor%3A52d7859f4d561c6214c01ebba2562f2b6cd65010d7f851a111c51341b479e752&amp;source=constructorStatic" target="_blank")
              img(src="https://api-maps.yandex.ru/services/constructor/1.0/static/?um=constructor%3A52d7859f4d561c6214c01ebba2562f2b6cd65010d7f851a111c51341b479e752&amp;width=570&amp;height=250&amp;lang=ru_RU" alt="" style="border: 0;")
    .urzhumka
      p С территории базы открывается потрясающий вид на реку Уржумка и живописные леса,<br>а также поля и местные окрестности.<br> А с высоты горы это выглядит более чем красиво. На это стоит посмотреть...
</template>

<script>
export default {
  name: 's2-complex',
  data () {
    return {
      scene1: null,
      scene2: null,
      tween: null,
      domParallax: [
        [2, '.god', 1],
        [2, '.gallery__in', 2],
        [2, '.complex-text', 4],
        [2, '.gallery > img', 6],
        [4, '.map', 2],
        [4, '.urzhumka', 1]
      ]
    }
  },
  methods: {

    parallax (dur, el, size) {
      this.scene1 = new this.$scrollmagic.Scene({
        triggerElement: '.complex',
        triggerHook: 1,
        duration: dur * 100 + '%' // eslint-disable-next-line
      }).setTween(el, { y: -60 * size + 'vh', ease: Power0.easeNone })

      this.$ksvuescr.$emit('addScene', 'parallax', this.scene1)
    },
    showUrzhumka () {
      this.tween = this.$gsap.TweenMax.to('.urzhumka', 1.2, { opacity: 1 })

      this.scene2 = new this.$scrollmagic.Scene({
        triggerElement: '.map',
        offset: 300
      }).setTween(this.tween)

      this.$ksvuescr.$emit('addScene', 'showUrzhumka', this.scene2)
    }
  },
  mounted () {
    for (let i = 0, p = this.domParallax; i < p.length; i++) {
      this.parallax(p[i][0], p[i][1], p[i][2])
    }

    this.showUrzhumka()
  }
}
</script>

<style lang="stylus" scoped>
  .complex
    max-width 800px
    font 22px Futura
    padding 4vw 4vw 0 4vw
    margin-bottom 10vh
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
    top 0vh
  .god
    transform translate(12vw, 2%)
  .map
    transform translate(-20%, 10%)
  .urzhumka
    width 96vw
    position relative
    top 10vh
    right 4vw
    display flex
    justify-content flex-end
    opacity 0
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
      margin-top 20px
      width 100%
      display flex
      justify-content flex-end
  @media (max-width: 1024px)
    .god
      display none

  @media (orientation: portrait), (max-height: 600px)
    .map, .urzhumka, .cross-wrap, .gallery > img
      display none

</style>
