<template lang="pug">
  div.about
    h2.title {{title}}
    p(v-for="(words,i) in strings" :key='i')
      span.word-blur(v-for="word in words" :key="word") {{word}}

</template>

<script>
import ScrollMagic from 'scrollmagic'
import 'ScrollMagicGSAP'
import {TweenMax, TimelineMax} from 'gsap'

export default {
  name: 'fade-strings',
  props: ['title', 'strings', 'target', 'parent'],
  // strings => frases, target => (scroll start animation element),
  // parent => wrap-element contain this component (this IMPORTANT!)
  methods: {
    sortArrWords () {
      let arrWords = document.querySelectorAll(this.parent + ' .word-blur')

      arrWords = Array.prototype.slice.call(arrWords)
      TweenMax.set(arrWords, {scale: 0, autoAlpha: 0, opacity: 0, filter: 'blur(3px)'})

      return arrWords.sort(() => 0.5 - Math.random())
    }
  },
  mounted () {
    let tween = new TimelineMax()
    // create TimelineMax obj
    new ScrollMagic.Scene({
      triggerElement: this.target
    }).setTween(
      tween
        .addLabel('show-block')
        .staggerTo(this.sortArrWords(), 1.4, {scale: 11, autoAlpha: 1, opacity: 1, filter: 'blur(0px)'}, 0.3, 'show-block')
        .fromTo(this.parent + ' .title', 1.4, {autoAlpha: 0, x: '-10vw'}, {autoAlpha: 0.5, x: 0}, 'show-block')

    ).addTo(new ScrollMagic.Controller())
  }
}
</script>

<style lang="sass" scoped>
.about
  font: 32px 'Academic', Arial, sans-serif
  line-height: 58px
  letter-spacing: 10px
  text-transform: uppercase
  color: #3e3937
  transform: matrix(1, 0, 0, 1, 0, 0)
  margin-left: 5vw
  padding: 40px 0 80px 0

  p:first-child
    text-indent: 26px

  .word-blur
    margin-right: 25px
    transform: scale(2)

  h2.title
    font: italic 18px 'Futura', Arial, 'sans-serif'
    display: inline-block
    color: #6f5c56
    border-bottom: 1px solid #6f5c56
</style>
