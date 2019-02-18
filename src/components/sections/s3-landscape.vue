<template lang="pug">
  #show-offers
    .about-offers(is="fade-string", :title="'Приятные бонусы'", :strings="strings", :target="'#show-offers'", :parent="'#show-offers'")
    .wrap-land(is="section")
      .left-land(id="parallax2")
        .left-land__in
      .right-land
        .offers-header
          h2 Наши цены и бонусы
        .offer
          .offer__unit-part(v-for="unit in data" :key="unit.index+'-ind'")
            .offer__wrap-img
              img.offer__img(:src="'/static/parts/'+unit.index+'.svg'" alt="service" width="140" height="140")
            .offer__descript
              .offer__title {{unit.name}}
              .offer__text
                p Стоимость от: 1000 руб/час
                p Чай с медом/вареньем <br> в подарок
                router-link.offer__link(:to="'/'+unit.index") Подробнее...
</template>

<script>
import FadeString from '../elements/fade-strings.vue'

import ScrollMagic from 'scrollmagic'
import 'ScrollMagicGSAP'
import 'debug.addIndicators'
import {TweenMax, Power0} from 'gsap'

export default {
  name: 's3-landscape',
  data () {
    return {
      strings: [
        ['Нашим', 'посетителям:'],
        ['-Бесплатная', 'парковка'],
        ['-Free', 'Wi-Fi']
      ],
      data: [
        {
          index: 'rooms',
          name: 'Гостиничные номера',
          text: [
            'Стоимость от: 1400 руб/ночь',
            'Бесплатный завтрак'
          ]
        },
        {
          index: 'sauna',
          name: 'Сауна',
          text: [
            'Стоимость от: 1000 руб/час',
            'Чай с медом/вареньем <br> в подарок'
          ]
        },
        {
          index: 'caffee-restorant',
          name: 'Кафе-ресторан',
          text: [
            'Бизнес-ланч от: 250 руб',
            'Аренда зала'
          ]
        }
      ]
    }
  },
  components: {
    FadeString
  },
  methods: {
    sortArrWords () {
      let arrWords = document.querySelectorAll('.word-blur')

      arrWords = Array.prototype.slice.call(arrWords)
      TweenMax.set(arrWords, {autoAlpha: 0, opacity: 0, filter: 'blur(3px)'})

      return arrWords.sort(() => 0.5 - Math.random())
    }
  },
  mounted () {
    const controller = new ScrollMagic.Controller()

    new ScrollMagic.Scene({
      triggerElement: '#parallax2',
      triggerHook: 1,
      duration: '200%'
    }).setTween('.left-land__in', {y: '-30vh', ease: Power0.easeNone})
      .addTo(controller)
  }

}
</script>

<style scoped lang="sass">
  .wrap-land
    min-height: 450px
    height: 100vh
    width: 100vw
    align-items: center
    display: flex
    justify-items: center
    z-index: 2
    .right-land
      background-image: url('/static/backgrounds/skin.jpg')
      background-size: 144px 144px
      width: 50vw
      height: 130%
    .left-land
      width: 50vw
      height: 100%
      overflow: hidden
      display: flex
      align-items: center
      justify-content: center
      position: relative
      &__in
        transform: scale(-1, 1)
        width: 100%
        background: red
        background-image: url('/static/backgrounds/door.jpg')
        background-size: cover
        position: absolute
        width: 100%
        height: 110%
        top: 0
        z-index: 0

  .about-offers
    padding-bottom: 10vh

  #show-offers
    top: -20vh
    position: relative
    background: #f1eee9

  .offer
    display: flex
    justify-content: center
    flex-direction: column
    height: 100%
    &__unit-part
      display: flex
      align-items: center
      margin: 2vw 4vw
    &__title
      text-transform: uppercase
      font: bold 18px 'Futura', Arial, sans-serif
      letter-spacing: 3px
      display: inline-block
      margin-bottom: 10px
    &__descript
      color: #f1eee9
      font: 16px 'Futura', Arial, sans-serif
      line-height: 25px
    &__wrap-img
      border: 1px dashed #6f5c56
      padding: 4px
      border-radius: 50%
      width: 150px
      height: 150px
      display: flex
      align-items: center
      justify-content: center
      opacity: 0.3
      margin-right: 2vw
    &__img
      width: 90px
      height: 90px
    &__link
      text-transform: uppercase
      color: #6f5c56
      text-decoration: none
      display: inline-block
      border-bottom: 1px solid #6f5c56
      padding-bottom: 2px
      letter-spacing: 3px
      font: bold 12px 'Futura', Arial, sans-serif
      margin-top: 20px
</style>
