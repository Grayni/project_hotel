<template lang="pug">
  #show-offers.wrapper_blur
    fade-string.about-offers(
      :title="'Приятные бонусы'",
      :strings="strings",
      :target="'#show-offers'",
      :parent="'#show-offers'"
    )
    section.wrap-land
      .left-land(id="parallax2")
        .left-land__in
      .right-land
        .offer
          .offers-header
            h2.bonus
              span Наши
              span  цены
              span <br> и
              span  бонусы
          .offer__unit-part(v-for="unit in data" :key="unit.index+'-ind'")
            .offer__wrap-img
              img.offer__img(
                :src="`/images/parts/${unit.index}.svg`",
                alt="service",
                width="140",
                height="140"
              )
            .offer__descript
              .offer__title {{unit.name}}
              .offer__text
                p {{ unit.text[0] }}
                p {{ unit.text[1] }}
                nuxt-link.offer__link(:to="'/'+unit.index") Подробнее...
</template>

<script>
import FadeString from '@/components/elements/FadeString'

export default {
  name: 's3-landscape',
  data () {
    return {
      strings: [
        ['Нашим', 'посетителям:'],
        ['-Бесплатная', 'парковка'],
        ['-Free', 'Wi-Fi'],
        ['-Такси']
      ],
      data: [
        {
          index: 'rooms',
          name: 'Гостиничные номера',
          text: [
            'Стоимость от: 1100 руб/ночь',
            'Завтрак: 200 руб'
          ]
        },
        {
          index: 'sauna',
          name: 'Сауна',
          text: [
            'Стоимость от: 1000 руб/час',
            'Чай с медом/вареньем в подарок'
          ]
        },
        {
          index: 'caffee-restorant',
          name: 'Кафе-ресторан',
          text: [
            'Бизнес-ланч от: 350 руб',
            'Аренда зала для корпаратива или свадьбы'
          ]
        }
      ],
      scene1: null,
      scene2: null,
      scene3: null,
      scene4: null,
      scene5: null,
      timeline: null
    }
  },
  components: {
    FadeString
  },
  methods: {
    sortArrWords () {
      let arrWords = document.querySelectorAll('.bonus span')

      arrWords = Array.prototype.slice.call(arrWords)
      this.$gsap.TweenMax.set(arrWords, { autoAlpha: 0, opacity: 0, left: '-130px', filter: 'blur(3px)' })

      return arrWords.sort(() => 0.5 - Math.random())
    },
    animateScene1 () {
      this.scene1 = new this.$scrollmagic.Scene({
        triggerElement: '#parallax2',
        triggerHook: 1,
        duration: '200%' // eslint-disable-next-line
      }).setTween('.left-land__in', { y: '-30vh', ease: Power0.easeNone })

      this.$ksvuescr.$emit('addScene', 'animateScene1', this.scene1)
    },
    animateScene2 () {
      this.timeline = new this.$gsap.TimelineMax()

      this.scene2 = new this.$scrollmagic.Scene({
        triggerElement: '.about-offers'
      }).setTween(
        this.timeline
          .addLabel('show-bonus')
          .staggerTo(this.sortArrWords(), 1.4, { autoAlpha: 1, left: 0, opacity: 1, filter: 'blur(0px)' }, 0.3, 'show-bonus')
          .fromTo('.wrap-land', 1.4, { autoAlpha: 0, y: '300px' }, { autoAlpha: 1, y: 0 }, 'show-bonus')
      )

      this.$ksvuescr.$emit('addScene', 'animateScene2', this.scene2)
    },
    animateScene3 () {
      this.scene3 = new this.$scrollmagic.Scene({
        triggerElement: '.bonus'
      }).setTween(
        this.$gsap.TweenMax
          .fromTo('.offer__unit-part:nth-child(2)', 1.4, { autoAlpha: 0, bottom: '-120px' }, { autoAlpha: 1, bottom: 0 })
      )

      this.$ksvuescr.$emit('addScene', 'animateScene3', this.scene3)
    },
    animateScene4 () {
      this.scene4 = new this.$scrollmagic.Scene({
        triggerElement: '.offer__unit-part:nth-child(2)'
      }).setTween(
        this.$gsap.TweenMax
          .fromTo('.offer__unit-part:nth-child(3)', 1.4, { autoAlpha: 0, bottom: '-120px' }, { autoAlpha: 1, bottom: 0 })
      )

      this.$ksvuescr.$emit('addScene', 'animateScene4', this.scene4)
    },
    animateScene5 () {
      this.scene5 = new this.$scrollmagic.Scene({
        triggerElement: '.offer__unit-part:nth-child(3)'
      }).setTween(
        this.$gsap.TweenMax
          .fromTo('.offer__unit-part:nth-child(4)', 1.4, { autoAlpha: 0, bottom: '-120px' }, { autoAlpha: 1, bottom: 0 })
      )

      this.$ksvuescr.$emit('addScene', 'animateScene5', this.scene5)
    }
  },
  mounted () {
    this.animateScene1()
    this.animateScene2()
    this.animateScene3()
    this.animateScene4()
    this.animateScene5()
  }

}
</script>

<style scoped lang="stylus">
  .wrap-land
    min-height 450px
    height 100vh
    width 100vw
    align-items center
    display flex
    justify-items center
    z-index 2
    .right-land
      background-image url('/images/backgrounds/skin.jpg')
      background-size 144px 144px
      width 50vw
      height 130%
    .left-land
      width 50vw
      height 100%
      overflow hidden
      display flex
      align-items center
      justify-content center
      position relative
      &__in
        transform scale(-1, 1)
        width 100%
        background-image url('/images/backgrounds/door.jpg')
        background-size cover
        position absolute
        width 100%
        height 110%
        top 0
        z-index 0

  .about
    padding-bottom 20vh

  #show-offers
    top 0
    position relative
    z-index 2

  .offers-header
    h2
      color #f1eee9
      font 38px 'Academic', Arial, sans-serif
      text-transform uppercase
      line-height 58px
      letter-spacing 8px
      position relative
      left 4vw
      top -4vw
      span
        position relative

  .offer
    display flex
    justify-content center
    flex-direction column
    height 100%
    &__unit-part
      display flex
      align-items center
      margin 2vw 4vw
      position relative
    &__title
      font bold 20px 'Futura', Arial, sans-serif
      letter-spacing 2px
      display inline-block
      margin-bottom 10px
    &__descript
      color #f1eee9
      font 15px 'Futura', Arial, sans-serif
      line-height 18px
    &__wrap-img
      border 4px dashed #6f5c56
      border-top 2px solid #6f5c56
      border-bottom 2px solid #6f5c56
      transform rotate(45deg)
      padding 4px
      border-radius 50%
      width 150px
      height 150px
      display flex
      align-items center
      justify-content center
      opacity 0.3
      margin-right 3vw
    &__img
      width 90px
      height 90px
      transform rotate(-45deg)
    &__link
      text-transform uppercase
      color #6f5c56
      text-decoration none
      display inline-block
      border-bottom 1px solid #6f5c56
      padding-bottom 2px
      letter-spacing 3px
      font bold 12px 'Futura', Arial, sans-serif
      margin-top 20px
      transition color 0.5s ease
      &:hover
        color #927971
        transition color 0.5s ease
  @media (max-width: 868px)
    .wrap-land
      .right-land
        width 100vw
        padding 40px 0
</style>
