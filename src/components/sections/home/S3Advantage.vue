<template lang="pug">
  #show-offers.wrapper_blur
    .about-offers(is="fade-string", :title="'Приятные бонусы'", :strings="strings", :target="'#show-offers'", :parent="'#show-offers'")
    .wrap-land(is="section")
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
              img.offer__img(:src="'/static/parts/'+unit.index+'.svg'" alt="service" width="140" height="140")
            .offer__descript
              .offer__title {{unit.name}}
              .offer__text
                p {{unit.text[0]}}
                p {{unit.text[1]}}
                router-link.offer__link(:to="'/'+unit.index") Подробнее...
</template>

<script>
import FadeString from '@/components/elements/FadeString'

import ScrollMagic from 'scrollmagic'
import 'ScrollMagicGSAP'

import {TweenMax, Power0, TimelineMax} from 'gsap'

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
            'Стоимость от: 1350 руб/ночь',
            'Бесплатный завтрак'
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
            'Бизнес-ланч от: 250 руб',
            'Аренда зала для корпаратива или свадьбы'
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
      let arrWords = document.querySelectorAll('.bonus span')

      arrWords = Array.prototype.slice.call(arrWords)
      TweenMax.set(arrWords, {autoAlpha: 0, opacity: 0, left: '-130px', filter: 'blur(3px)'})

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

    const timeline = new TimelineMax()
    new ScrollMagic.Scene({
      triggerElement: '.about-offers'
    }).setTween(
      timeline
        .addLabel('show-bonus')
        .staggerTo(this.sortArrWords(), 1.4, {autoAlpha: 1, left: 0, opacity: 1, filter: 'blur(0px)'}, 0.3, 'show-bonus')
        .fromTo('.wrap-land', 1.4, {autoAlpha: 0, y: '300px'}, {autoAlpha: 1, y: 0}, 'show-bonus')
    ).addTo(controller)

    new ScrollMagic.Scene({
      triggerElement: '.bonus'
    }).setTween(
      TweenMax
        .fromTo('.offer__unit-part:nth-child(2)', 1.4, {autoAlpha: 0, bottom: '-120px'}, {autoAlpha: 1, bottom: 0})
    ).addTo(controller)

    new ScrollMagic.Scene({
      triggerElement: '.offer__unit-part:nth-child(2)'
    }).setTween(
      TweenMax
        .fromTo('.offer__unit-part:nth-child(3)', 1.4, {autoAlpha: 0, bottom: '-120px'}, {autoAlpha: 1, bottom: 0})
    ).addTo(controller)

    new ScrollMagic.Scene({
      triggerElement: '.offer__unit-part:nth-child(3)'
    }).setTween(
      TweenMax
        .fromTo('.offer__unit-part:nth-child(4)', 1.4, {autoAlpha: 0, bottom: '-120px'}, {autoAlpha: 1, bottom: 0})
    ).addTo(controller)
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
    padding-bottom: 20vh

  #show-offers
    top: -20vh
    position: relative
    background: #f1eee9

  .offers-header
    h2
      color: #f1eee9
      font: 38px 'Academic', Arial, sans-serif
      text-transform: uppercase
      line-height: 58px
      letter-spacing: 8px
      position: relative
      left: 4vw
      top: -4vw
      span
        position: relative

  .offer
    display: flex
    justify-content: center
    flex-direction: column
    height: 100%
    &__unit-part
      display: flex
      align-items: center
      margin: 2vw 4vw
      position: relative
    &__title
      font: bold 20px 'Futura', Arial, sans-serif
      letter-spacing: 2px
      display: inline-block
      margin-bottom: 10px
    &__descript
      color: #f1eee9
      font: 15px 'Futura', Arial, sans-serif
      line-height: 18px
    &__wrap-img
      border: 4px dashed #6f5c56
      border-top: 2px solid #6f5c56
      border-bottom: 2px solid #6f5c56
      transform: rotate(45deg)
      padding: 4px
      border-radius: 50%
      width: 150px
      height: 150px
      display: flex
      align-items: center
      justify-content: center
      opacity: 0.3
      margin-right: 3vw
    &__img
      width: 90px
      height: 90px
      transform: rotate(-45deg)
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
      transition: color 0.5s ease
      &:hover
        color: #927971
        transition: color 0.5s ease
</style>
